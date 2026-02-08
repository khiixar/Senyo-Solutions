import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import firebaseConfig from './firebase-config.js';

const clientApp = initializeApp(firebaseConfig, 'clientPortal');
const clientAuth = getAuth(clientApp);
const db = getFirestore(clientApp);

let currentUser = null;
let unsubscribeRequests = null;

onAuthStateChanged(clientAuth, (user) => {
    if (user) {
        currentUser = user;
        showDashboard(user);
        loadRequests(user.uid);
    } else {
        currentUser = null;
        showLogin();
    }
});

function showDashboard(user) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('clientName').textContent = user.displayName || user.email.split('@')[0];
}

function showLogin() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    if (unsubscribeRequests) {
        unsubscribeRequests();
        unsubscribeRequests = null;
    }
}

function loadRequests(userId) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '<div class="loading-spinner"></div>';

    try {
        const q = query(
            collection(db, 'requests'),
            where('userId', '==', userId),
            orderBy('createdAt', 'desc')
        );

        unsubscribeRequests = onSnapshot(q, (snapshot) => {
            if (snapshot.empty) {
                grid.innerHTML = `
                    <div class="empty-projects">
                        <i class="fas fa-folder-open"></i>
                        <h3>No Requests Yet</h3>
                        <p>Submit your first request below to get started.</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = '';
            snapshot.forEach((doc) => {
                const request = doc.data();
                const card = createRequestCard(request);
                grid.appendChild(card);
            });
        }, (error) => {
            console.error('Error loading requests:', error);
            grid.innerHTML = `
                <div class="empty-projects">
                    <i class="fas fa-folder-open"></i>
                    <h3>No Requests Yet</h3>
                    <p>Submit your first request below to get started.</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
        grid.innerHTML = `
            <div class="empty-projects">
                <i class="fas fa-folder-open"></i>
                <h3>No Requests Yet</h3>
                <p>Submit your first request below to get started.</p>
            </div>
        `;
    }
}

function createRequestCard(request) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const statusClass = getStatusClass(request.status);
    const date = request.createdAt ? new Date(request.createdAt.toDate()).toLocaleDateString() : 'Just now';
    
    card.innerHTML = `
        <h4>${escapeHtml(request.title)}</h4>
        <p>${escapeHtml(request.description.substring(0, 150))}${request.description.length > 150 ? '...' : ''}</p>
        <span class="project-status ${statusClass}">${request.status}</span>
        <div class="request-meta">
            <span><i class="fas fa-tag"></i> ${escapeHtml(request.requestType)}</span>
            <span><i class="fas fa-flag"></i> ${escapeHtml(request.priority)}</span>
            <span><i class="fas fa-calendar"></i> ${date}</span>
        </div>
        ${request.adminNotes ? `
            <div class="admin-notes">
                <h5><i class="fas fa-comment"></i> Admin Notes</h5>
                <p>${escapeHtml(request.adminNotes)}</p>
            </div>
        ` : ''}
    `;
    return card;
}

function getStatusClass(status) {
    const classes = {
        'Pending': 'status-pending',
        'Accepted': 'status-accepted',
        'In Progress': 'status-in-progress',
        'Completed': 'status-completed',
        'Rejected': 'status-rejected'
    };
    return classes[status] || 'status-pending';
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

function getErrorMessage(code) {
    const messages = {
        'auth/invalid-email': 'Invalid email address',
        'auth/user-disabled': 'This account has been disabled',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/invalid-credential': 'Invalid email or password'
    };
    return messages[code] || 'An error occurred. Please try again.';
}

document.getElementById('clientLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('loginError');
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.disabled = true;
    loginBtn.textContent = 'Signing in...';
    errorEl.style.display = 'none';

    try {
        await signInWithEmailAndPassword(clientAuth, email, password);
    } catch (error) {
        showError(getErrorMessage(error.code));
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In';
    }
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (unsubscribeRequests) unsubscribeRequests();
    await signOut(clientAuth);
});

document.getElementById('forgotPasswordLink').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    if (!email) {
        alert('Please enter your email address first');
        return;
    }
    try {
        await sendPasswordResetEmail(clientAuth, email);
        alert('Password reset email sent! Check your inbox.');
    } catch (error) {
        alert(getErrorMessage(error.code));
    }
});

document.getElementById('requestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    try {
        await addDoc(collection(db, 'requests'), {
            userId: currentUser.uid,
            userEmail: currentUser.email,
            userName: currentUser.displayName || currentUser.email.split('@')[0],
            requestType: document.getElementById('requestType').value,
            priority: document.getElementById('requestPriority').value,
            title: document.getElementById('requestTitle').value,
            description: document.getElementById('requestDescription').value,
            status: 'Pending',
            adminNotes: '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });

        document.getElementById('requestForm').reset();
        successMsg.style.display = 'block';
        setTimeout(() => successMsg.style.display = 'none', 5000);
    } catch (error) {
        alert('Error submitting request: ' + error.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Submit Request';
    }
});