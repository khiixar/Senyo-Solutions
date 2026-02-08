import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, browserSessionPersistence, setPersistence } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import firebaseConfig from './firebase-config.js';

const adminApp = initializeApp(firebaseConfig, 'adminPortal');
const adminAuth = getAuth(adminApp);
const db = getFirestore(adminApp);

const clientCreatorApp = initializeApp(firebaseConfig, 'clientCreator');
const clientCreatorAuth = getAuth(clientCreatorApp);

let allRequests = [];
let allClients = [];
let unsubscribeRequests = null;
let pendingAction = null;

const ADMIN_EMAILS = ['khizar.naeem27@gmail.com'];

async function init() {
    await setPersistence(adminAuth, browserSessionPersistence);
    
    onAuthStateChanged(adminAuth, (user) => {
        if (user && ADMIN_EMAILS.includes(user.email)) {
            document.getElementById('adminLogin').style.display = 'none';
            document.getElementById('adminDashboard').style.display = 'block';
            loadRequests();
            loadClients();
        } else {
            document.getElementById('adminDashboard').style.display = 'none';
            document.getElementById('adminLogin').style.display = 'block';
            if (unsubscribeRequests) unsubscribeRequests();
            if (user && !ADMIN_EMAILS.includes(user.email)) {
                signOut(adminAuth);
                showError('Access denied. Admin only.');
            }
        }
    });
}

init();

function loadRequests() {
    const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'));
    unsubscribeRequests = onSnapshot(q, (snapshot) => {
        allRequests = [];
        snapshot.forEach((doc) => {
            allRequests.push({ id: doc.id, ...doc.data() });
        });
        updateStats();
        renderRequests();
    }, (error) => {
        console.error('Error loading requests:', error);
        document.getElementById('requestsBody').innerHTML = '<tr><td colspan="7" class="empty-state">Error loading requests.</td></tr>';
    });
}

function updateStats() {
    const stats = {
        total: allRequests.length,
        pending: allRequests.filter(r => r.status === 'Pending').length,
        inProgress: allRequests.filter(r => r.status === 'In Progress').length,
        completed: allRequests.filter(r => r.status === 'Completed').length
    };
    document.getElementById('statsGrid').innerHTML = `
        <div class="stat-card"><h3>${stats.total}</h3><p>Total Requests</p></div>
        <div class="stat-card"><h3>${stats.pending}</h3><p>Pending</p></div>
        <div class="stat-card"><h3>${stats.inProgress}</h3><p>In Progress</p></div>
        <div class="stat-card"><h3>${stats.completed}</h3><p>Completed</p></div>
    `;
}

function renderRequests() {
    const statusFilter = document.getElementById('statusFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;
    
    let filtered = allRequests;
    if (statusFilter) filtered = filtered.filter(r => r.status === statusFilter);
    if (priorityFilter) filtered = filtered.filter(r => r.priority === priorityFilter);

    const tbody = document.getElementById('requestsBody');
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No requests found.</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(r => {
        const canDelete = r.status === 'Completed' || r.status === 'Rejected';
        return `
        <tr>
            <td>${escapeHtml(r.userName || r.userEmail || 'Unknown')}</td>
            <td>${escapeHtml(r.title || 'No title')}</td>
            <td>${escapeHtml(r.requestType || 'N/A')}</td>
            <td class="priority-${(r.priority || 'medium').toLowerCase()}">${r.priority || 'N/A'}</td>
            <td><span class="status-badge status-${(r.status || 'pending').toLowerCase().replace(' ', '-')}">${r.status || 'Pending'}</span></td>
            <td>${r.createdAt ? new Date(r.createdAt.toDate()).toLocaleDateString() : '-'}</td>
            <td>
                <button class="action-btn edit" data-request-id="${r.id}">
                    <i class="fas fa-edit"></i> Manage
                </button>
                ${canDelete ? `<button class="action-btn delete" data-delete-request="${r.id}">
                    <i class="fas fa-trash"></i>
                </button>` : ''}
            </td>
        </tr>
    `}).join('');
}

async function loadClients() {
    try {
        const snapshot = await getDocs(collection(db, 'clients'));
        const container = document.getElementById('clientsList');
        allClients = [];
        
        snapshot.forEach((doc) => {
            allClients.push({ id: doc.id, ...doc.data() });
        });

        if (allClients.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary);">No clients yet. Add one above.</p>';
            return;
        }

        container.innerHTML = allClients.map(client => `
            <div class="client-card">
                <div class="client-info">
                    <h4>${escapeHtml(client.name || 'No name')}</h4>
                    <p>${escapeHtml(client.email || 'No email')}</p>
                    <p style="font-size: 0.8rem; color: var(--text-secondary);">
                        Created: ${client.createdAt ? new Date(client.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                    </p>
                </div>
                <button class="action-btn delete" data-delete-client="${client.id}" data-client-email="${client.email}">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading clients:', error);
        document.getElementById('clientsList').innerHTML = '<p style="color: var(--text-secondary);">Error loading clients.</p>';
    }
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showError(msg) {
    const el = document.getElementById('loginError');
    el.textContent = msg;
    el.style.display = 'block';
}

function showToast(msg) {
    const toast = document.getElementById('successToast');
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 3000);
}

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function showConfirm(title, message, action) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    pendingAction = action;
    openModal('confirmModal');
}

document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const btn = document.getElementById('loginBtn');

    btn.disabled = true;
    btn.textContent = 'Signing in...';
    document.getElementById('loginError').style.display = 'none';

    try {
        await signInWithEmailAndPassword(adminAuth, email, password);
    } catch (error) {
        showError('Invalid credentials');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Sign In';
    }
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (unsubscribeRequests) unsubscribeRequests();
    await signOut(adminAuth);
});

document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        if (tab.dataset.tab === 'clients') loadClients();
    });
});

document.getElementById('statusFilter').addEventListener('change', renderRequests);
document.getElementById('priorityFilter').addEventListener('change', renderRequests);

document.getElementById('requestsBody').addEventListener('click', (e) => {
    const editBtn = e.target.closest('[data-request-id]');
    const deleteBtn = e.target.closest('[data-delete-request]');
    
    if (editBtn) {
        const request = allRequests.find(r => r.id === editBtn.dataset.requestId);
        if (!request) return;

        document.getElementById('requestId').value = request.id;
        document.getElementById('updateStatus').value = request.status || 'Pending';
        document.getElementById('adminNotes').value = request.adminNotes || '';
        document.getElementById('requestDetails').innerHTML = `
            <div style="margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <p><strong>Client:</strong> ${escapeHtml(request.userName || 'Unknown')} (${escapeHtml(request.userEmail || 'No email')})</p>
                <p><strong>Title:</strong> ${escapeHtml(request.title || 'No title')}</p>
                <p><strong>Type:</strong> ${escapeHtml(request.requestType || 'N/A')}</p>
                <p><strong>Priority:</strong> ${escapeHtml(request.priority || 'N/A')}</p>
                <p><strong>Description:</strong></p>
                <p style="color: var(--text-secondary);">${escapeHtml(request.description || 'No description')}</p>
            </div>
        `;
        openModal('requestModal');
    }
    
    if (deleteBtn) {
        const requestId = deleteBtn.dataset.deleteRequest;
        showConfirm('Delete Request', 'Are you sure you want to delete this request? This cannot be undone.', async () => {
            try {
                await deleteDoc(doc(db, 'requests', requestId));
                showToast('Request deleted successfully!');
            } catch (error) {
                alert('Error deleting request: ' + error.message);
            }
        });
    }
});

document.getElementById('updateRequestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('requestId').value;
    
    try {
        await updateDoc(doc(db, 'requests', id), {
            status: document.getElementById('updateStatus').value,
            adminNotes: document.getElementById('adminNotes').value,
            updatedAt: serverTimestamp()
        });
        closeModal('requestModal');
        showToast('Request updated successfully!');
    } catch (error) {
        alert('Error updating request: ' + error.message);
    }
});

document.getElementById('addClientBtn').addEventListener('click', () => {
    document.getElementById('clientForm').reset();
    openModal('clientModal');
});

document.getElementById('clientForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('createClientBtn');
    btn.disabled = true;
    btn.textContent = 'Creating...';

    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const password = document.getElementById('clientPassword').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(clientCreatorAuth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        
        await setDoc(doc(db, 'clients', userCredential.user.uid), {
            name: name,
            email: email,
            createdAt: serverTimestamp()
        });

        await signOut(clientCreatorAuth);

        closeModal('clientModal');
        showToast(`Client created! Email: ${email}`);
        loadClients();
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        btn.disabled = false;
        btn.textContent = 'Create Client';
    }
});

document.getElementById('clientsList').addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('[data-delete-client]');
    if (deleteBtn) {
        const clientId = deleteBtn.dataset.deleteClient;
        const clientEmail = deleteBtn.dataset.clientEmail;
        showConfirm('Remove Client', `Are you sure you want to remove ${clientEmail}? Their requests will remain but they won't be able to log in.`, async () => {
            try {
                await deleteDoc(doc(db, 'clients', clientId));
                showToast('Client removed successfully!');
                loadClients();
            } catch (error) {
                alert('Error removing client: ' + error.message);
            }
        });
    }
});

document.getElementById('confirmActionBtn').addEventListener('click', async () => {
    if (pendingAction) {
        await pendingAction();
        pendingAction = null;
    }
    closeModal('confirmModal');
});

document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
});