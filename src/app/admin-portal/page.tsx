'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ScaleIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

export default function AdminPortalPage() {
  return (
    <>
      <Navbar />
      <style jsx global>{`
        .admin-section {
          min-height: 100vh; padding: 120px 20px 60px;
          background: var(--bg-primary);
          position: relative; overflow: hidden;
        }
        .admin-container { max-width: 1400px; margin: 0 auto; }
        .admin-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 32px; flex-wrap: wrap; gap: 20px;
        }
        .admin-header h1 {
          font-family: 'Archivo', sans-serif;
          color: var(--text-primary);
          font-size: 1.6rem;
        }
        .admin-tabs { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
        .admin-tab {
          padding: 8px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 50px;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.84rem;
          font-weight: 500;
          transition: all var(--transition-base);
        }
        .admin-tab:hover, .admin-tab.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        .tab-content { display: none; }
        .tab-content.active { display: block; }

        /* Login */
        .login-container {
          max-width: 420px; margin: 0 auto;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: var(--radius-lg);
          padding: 48px 40px;
          border: 1px solid var(--border-subtle);
        }
        .login-container h2 {
          font-family: 'Archivo', sans-serif;
          color: var(--text-primary);
          margin-bottom: 32px;
          text-align: center;
          font-size: 1.5rem;
        }
        .login-container input {
          width: 100%; padding: 14px 18px; margin-bottom: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
        }
        .login-container input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .login-error {
          background: rgba(220,38,38,0.12); color: #f87171;
          padding: 12px 16px; border-radius: var(--radius-sm);
          margin-bottom: 18px; display: none;
          font-size: 0.9rem;
          border: 1px solid rgba(220,38,38,0.2);
        }

        /* Table */
        .requests-table {
          width: 100%;
          background: var(--bg-card);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }
        .requests-table th, .requests-table td {
          padding: 14px 16px; text-align: left;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.88rem;
        }
        .requests-table th {
          background: rgba(255,255,255,0.03);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .requests-table td { color: var(--text-primary); }
        .requests-table tr:hover { background: rgba(255,255,255,0.02); }

        .status-badge {
          padding: 5px 14px; border-radius: 20px;
          font-size: 0.78rem; font-weight: 600;
        }
        .status-pending { background: rgba(251,191,36,0.12); color: #fbbf24; }
        .status-accepted { background: rgba(168,85,247,0.12); color: #a855f7; }
        .status-in-progress { background: rgba(59,130,246,0.12); color: #3b82f6; }
        .status-completed { background: rgba(34,197,94,0.12); color: #22c55e; }
        .status-rejected { background: rgba(220,38,38,0.12); color: #ef4444; }
        .priority-urgent { color: #ef4444; }
        .priority-high { color: #f97316; }
        .priority-medium { color: #fbbf24; }
        .priority-low { color: #22c55e; }

        .action-btn {
          padding: 6px 12px; border: none;
          border-radius: 50px; cursor: pointer;
          font-size: 0.82rem; margin-right: 4px; margin-bottom: 4px;
          transition: all var(--transition-fast);
          font-family: 'Space Grotesk', sans-serif;
        }
        .action-btn.edit { background: rgba(168,85,247,0.12); color: #a855f7; }
        .action-btn.delete { background: rgba(220,38,38,0.12); color: #ef4444; }
        .action-btn:hover { transform: scale(1.05); }

        /* Modals */
        .modal {
          display: none; position: fixed; inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          z-index: 1000;
          align-items: center; justify-content: center;
        }
        .modal.active { display: flex; }
        .modal-content {
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          padding: 36px;
          max-width: 600px; width: 90%;
          max-height: 90vh; overflow-y: auto;
          border: 1px solid var(--border-subtle);
        }
        .modal-header {
          display: flex; justify-content: space-between;
          align-items: center; margin-bottom: 24px;
        }
        .modal-header h3 {
          font-family: 'Archivo', sans-serif;
          color: var(--text-primary);
          margin: 0;
          font-size: 1.2rem;
        }
        .modal-close {
          background: none; border: none;
          color: var(--text-muted);
          font-size: 1.5rem; cursor: pointer;
          transition: color var(--transition-fast);
        }
        .modal-close:hover { color: var(--text-primary); }
        .modal-form label {
          display: block; color: var(--text-muted);
          margin-bottom: 8px; font-size: 0.85rem; font-weight: 500;
        }
        .modal-form input, .modal-form select, .modal-form textarea {
          width: 100%; padding: 12px 16px; margin-bottom: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          outline: none;
        }
        .modal-form input:focus, .modal-form select:focus, .modal-form textarea:focus {
          border-color: var(--primary);
        }
        .modal-form textarea { min-height: 100px; resize: vertical; }

        /* Client cards */
        .client-card {
          background: var(--bg-card);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          border: 1px solid var(--border-subtle);
          margin-bottom: 12px;
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 14px;
          transition: all var(--transition-fast);
        }
        .client-card:hover { border-color: var(--border-light); }
        .client-info h4 {
          font-family: 'Archivo', sans-serif;
          color: var(--text-primary);
          margin: 0 0 4px 0; font-size: 0.95rem;
        }
        .client-info p { color: var(--text-secondary); margin: 0; font-size: 0.88rem; }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px; margin-bottom: 28px;
        }
        .stat-card {
          background: var(--bg-card);
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }
        .stat-card:hover { border-color: var(--border-light); }
        .stat-card h3 {
          font-family: 'Archivo', sans-serif;
          color: var(--primary-light);
          font-size: 2rem;
          margin: 0 0 4px 0;
        }
        .stat-card p { color: var(--text-muted); margin: 0; font-size: 0.85rem; }

        /* Filter */
        .filter-bar { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
        .filter-bar select {
          padding: 10px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem;
          outline: none;
        }
        select { background-color: var(--bg-tertiary) !important; color: var(--text-primary) !important; }
        select option { background-color: var(--bg-tertiary) !important; color: var(--text-primary) !important; }

        .success-toast {
          position: fixed; bottom: 24px; right: 24px;
          background: rgba(34,197,94,0.92); color: white;
          padding: 14px 24px; border-radius: var(--radius-sm);
          display: none; z-index: 1001;
          font-size: 0.9rem; font-weight: 500;
          box-shadow: var(--shadow-md);
        }
        .empty-state { text-align: center; padding: 40px; color: var(--text-muted); }
        .confirm-modal { text-align: center; }
        .confirm-modal p { color: var(--text-primary); margin-bottom: 20px; font-size: 0.95rem; }
        .confirm-modal .btn-group { display: flex; gap: 10px; justify-content: center; }
        @media (max-width: 768px) { .requests-table { display: block; overflow-x: auto; } }
      `}</style>

      <section className="admin-section">
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.05)" size={400} position={{ top: '-10%', right: '-10%' }} />
        <MorphingBlob color="rgba(168,85,247,0.04)" size={300} position={{ bottom: '-5%', left: '-5%' }} />

        <ScaleIn>
        <div className="login-container" id="adminLogin" style={{ position: 'relative', zIndex: 1 }}>
          <h2><i className="fas fa-lock" style={{ marginRight: '10px', color: 'var(--primary-light)' }}></i>Admin Login</h2>
          <div className="login-error" id="loginError"></div>
          <form id="adminLoginForm">
            <input type="email" id="adminEmail" placeholder="Admin Email" required />
            <input type="password" id="adminPassword" placeholder="Password" required />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} id="loginBtn">Sign In</button>
          </form>
        </div>
        </ScaleIn>

        <div className="admin-container" id="adminDashboard" style={{ display: 'none', position: 'relative', zIndex: 1 }}>
          <div className="admin-header">
            <h1><i className="fas fa-cog" style={{ marginRight: '10px', color: 'var(--primary-light)' }}></i>Admin Dashboard</h1>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/payment" className="btn btn-primary">
                <i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i>Make a Payment
              </Link>
              <button className="btn btn-outline" id="logoutBtn">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>

          <div className="stats-grid" id="statsGrid"></div>

          <div className="admin-tabs">
            <button className="admin-tab active" data-tab="requests">
              <i className="fas fa-clipboard-list"></i> Requests
            </button>
            <button className="admin-tab" data-tab="clients">
              <i className="fas fa-users"></i> Manage Clients
            </button>
          </div>

          <div className="tab-content active" id="requests-tab">
            <div className="filter-bar">
              <select id="statusFilter">
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
              <select id="priorityFilter">
                <option value="">All Priorities</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <table className="requests-table">
              <thead>
                <tr>
                  <th>Ticket #</th>
                  <th>Client</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="requestsBody"></tbody>
            </table>
          </div>

          <div className="tab-content" id="clients-tab">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" id="addClientBtn">
                <i className="fas fa-plus"></i> Add New Client
              </button>
            </div>
            <div id="clientsList"></div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div className="modal" id="requestModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Manage Request</h3>
            <button className="modal-close" data-close="requestModal">&times;</button>
          </div>
          <form className="modal-form" id="updateRequestForm">
            <input type="hidden" id="requestId" />
            <div id="requestDetails"></div>
            <label>Status</label>
            <select id="updateStatus" required>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
            <label>Admin Notes (visible to client)</label>
            <textarea id="adminNotes" placeholder="Add notes for the client..."></textarea>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Update Request</button>
          </form>
        </div>
      </div>

      <div className="modal" id="clientModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Create New Client</h3>
            <button className="modal-close" data-close="clientModal">&times;</button>
          </div>
          <form className="modal-form" id="clientForm">
            <label>Client Name</label>
            <input type="text" id="clientName" placeholder="Full name" required />
            <label>Email</label>
            <input type="email" id="clientEmail" placeholder="client@example.com" required />
            <label>Temporary Password</label>
            <input type="text" id="clientPassword" placeholder="Min 6 characters" required minLength={6} />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} id="createClientBtn">Create Client</button>
          </form>
        </div>
      </div>

      <div className="modal" id="confirmModal">
        <div className="modal-content confirm-modal">
          <div className="modal-header">
            <h3 id="confirmTitle">Confirm Action</h3>
            <button className="modal-close" data-close="confirmModal">&times;</button>
          </div>
          <p id="confirmMessage">Are you sure?</p>
          <div className="btn-group">
            <button className="btn btn-outline" data-close="confirmModal">Cancel</button>
            <button className="btn btn-primary" id="confirmActionBtn" style={{ background: '#ef4444', borderColor: '#ef4444' }}>Confirm</button>
          </div>
        </div>
      </div>

      <div className="success-toast" id="successToast"></div>

      <AdminFirebaseScript />
    </>
  );
}

function AdminFirebaseScript() {
  return (
    <script type="module" dangerouslySetInnerHTML={{ __html: ADMIN_SCRIPT }} />
  );
}

const ADMIN_SCRIPT = `
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, browserSessionPersistence, setPersistence } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBBnOrgy82HaCPpJaxeHU4csK6YhjhAeOI",
  authDomain: "senyo-solutions.firebaseapp.com",
  projectId: "senyo-solutions",
  storageBucket: "senyo-solutions.firebasestorage.app",
  messagingSenderId: "632156878304",
  appId: "1:632156878304:web:635968afa1eb25c928e785",
  measurementId: "G-50TB2Q2L1G"
};

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
      loadRequests(); loadClients();
    } else {
      document.getElementById('adminDashboard').style.display = 'none';
      document.getElementById('adminLogin').style.display = 'block';
      if (unsubscribeRequests) unsubscribeRequests();
      if (user && !ADMIN_EMAILS.includes(user.email)) { signOut(adminAuth); showError('Access denied. Admin only.'); }
    }
  });
}
init();

function loadRequests() {
  const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'));
  unsubscribeRequests = onSnapshot(q, (snapshot) => {
    allRequests = [];
    snapshot.forEach((docSnap) => { allRequests.push({ id: docSnap.id, ...docSnap.data() }); });
    updateStats(); renderRequests();
  }, (error) => {
    console.error('Error loading requests:', error.code, error.message);
    document.getElementById('requestsBody').innerHTML = '<tr><td colspan="7" class="empty-state">Error loading requests</td></tr>';
  });
}

function updateStats() {
  const stats = { total: allRequests.length, pending: allRequests.filter(r => r.status === 'Pending').length, inProgress: allRequests.filter(r => r.status === 'In Progress').length, completed: allRequests.filter(r => r.status === 'Completed').length };
  document.getElementById('statsGrid').innerHTML = '<div class="stat-card"><h3>' + stats.total + '</h3><p>Total Requests</p></div><div class="stat-card"><h3>' + stats.pending + '</h3><p>Pending</p></div><div class="stat-card"><h3>' + stats.inProgress + '</h3><p>In Progress</p></div><div class="stat-card"><h3>' + stats.completed + '</h3><p>Completed</p></div>';
}

function renderRequests() {
  const statusFilter = document.getElementById('statusFilter').value;
  const priorityFilter = document.getElementById('priorityFilter').value;
  let filtered = allRequests;
  if (statusFilter) filtered = filtered.filter(r => r.status === statusFilter);
  if (priorityFilter) filtered = filtered.filter(r => r.priority === priorityFilter);
  const tbody = document.getElementById('requestsBody');
  if (filtered.length === 0) { tbody.innerHTML = '<tr><td colspan="8" class="empty-state">No requests found.</td></tr>'; return; }
  tbody.innerHTML = filtered.map(r => {
    const canDelete = r.status === 'Completed' || r.status === 'Rejected';
    return '<tr><td style="color: var(--primary-light); font-weight: 600; font-size: 0.82rem;">' + escapeHtml(r.ticketNumber || '—') + '</td><td>' + escapeHtml(r.userName || r.userEmail || 'Unknown') + '</td><td>' + escapeHtml(r.title || 'No title') + '</td><td>' + escapeHtml(r.requestType || 'N/A') + '</td><td class="priority-' + (r.priority || 'medium').toLowerCase() + '">' + (r.priority || 'N/A') + '</td><td><span class="status-badge status-' + (r.status || 'pending').toLowerCase().replace(' ', '-') + '">' + (r.status || 'Pending') + '</span></td><td>' + (r.createdAt ? new Date(r.createdAt.toDate()).toLocaleDateString() : '-') + '</td><td><button class="action-btn edit" data-request-id="' + r.id + '"><i class="fas fa-edit"></i> Manage</button>' + (canDelete ? '<button class="action-btn delete" data-delete-request="' + r.id + '"><i class="fas fa-trash"></i></button>' : '') + '</td></tr>';
  }).join('');
}

async function loadClients() {
  try {
    const snapshot = await getDocs(collection(db, 'clients'));
    const container = document.getElementById('clientsList');
    allClients = [];
    snapshot.forEach((docSnap) => { allClients.push({ id: docSnap.id, ...docSnap.data() }); });
    if (allClients.length === 0) { container.innerHTML = '<p style="color: var(--text-secondary);">No clients yet. Add one above.</p>'; return; }
    container.innerHTML = allClients.map(client => '<div class="client-card"><div class="client-info"><h4>' + escapeHtml(client.name || 'No name') + '</h4><p>' + escapeHtml(client.email || 'No email') + '</p><p style="font-size: 0.78rem; color: var(--text-muted);">Created: ' + (client.createdAt ? new Date(client.createdAt.toDate()).toLocaleDateString() : 'N/A') + '</p></div><button class="action-btn delete" data-delete-client="' + client.id + '" data-client-email="' + client.email + '"><i class="fas fa-trash"></i> Remove</button></div>').join('');
  } catch (error) {
    console.error('Error loading clients:', error.code, error.message);
    document.getElementById('clientsList').innerHTML = '<p style="color: #f87171;">Error loading clients</p>';
  }
}

function escapeHtml(text) { if (!text) return ''; const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
function showError(msg) { const el = document.getElementById('loginError'); el.textContent = msg; el.style.display = 'block'; }
function showToast(msg) { const toast = document.getElementById('successToast'); toast.textContent = msg; toast.style.display = 'block'; setTimeout(() => toast.style.display = 'none', 3000); }
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
function showConfirm(title, message, action) { document.getElementById('confirmTitle').textContent = title; document.getElementById('confirmMessage').textContent = message; pendingAction = action; openModal('confirmModal'); }

document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;
  const btn = document.getElementById('loginBtn');
  btn.disabled = true; btn.textContent = 'Signing in...'; document.getElementById('loginError').style.display = 'none';
  try { await signInWithEmailAndPassword(adminAuth, email, password); }
  catch (error) { showError('Invalid credentials'); }
  finally { btn.disabled = false; btn.textContent = 'Sign In'; }
});

document.getElementById('logoutBtn').addEventListener('click', async () => { if (unsubscribeRequests) unsubscribeRequests(); await signOut(adminAuth); });

document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab + '-tab').classList.add('active');
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
    document.getElementById('requestDetails').innerHTML = '<div style="margin-bottom: 20px; padding: 16px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid var(--border-subtle);">' + (request.ticketNumber ? '<p style="color: var(--primary-light); font-weight: 600; font-size: 0.88rem; margin-bottom: 10px;"><i class="fas fa-ticket-alt" style="margin-right: 6px;"></i>' + escapeHtml(request.ticketNumber) + '</p>' : '') + '<p><strong>Client:</strong> ' + escapeHtml(request.userName || 'Unknown') + ' (' + escapeHtml(request.userEmail || 'No email') + ')</p><p><strong>Title:</strong> ' + escapeHtml(request.title || 'No title') + '</p><p><strong>Type:</strong> ' + escapeHtml(request.requestType || 'N/A') + '</p><p><strong>Priority:</strong> ' + escapeHtml(request.priority || 'N/A') + '</p><p><strong>Description:</strong></p><p style="color: var(--text-secondary);">' + escapeHtml(request.description || 'No description') + '</p></div>';
    openModal('requestModal');
  }
  if (deleteBtn) {
    const requestId = deleteBtn.dataset.deleteRequest;
    showConfirm('Delete Request', 'Are you sure you want to delete this request? This cannot be undone.', async () => {
      try { await deleteDoc(doc(db, 'requests', requestId)); showToast('Request deleted successfully!'); }
      catch (error) { alert('Error deleting request: ' + error.message); }
    });
  }
});

document.getElementById('updateRequestForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('requestId').value;
  try {
    await updateDoc(doc(db, 'requests', id), { status: document.getElementById('updateStatus').value, adminNotes: document.getElementById('adminNotes').value, updatedAt: serverTimestamp() });
    closeModal('requestModal'); showToast('Request updated successfully!');
  } catch (error) { alert('Error updating request: ' + error.message); }
});

document.getElementById('addClientBtn').addEventListener('click', () => { document.getElementById('clientForm').reset(); openModal('clientModal'); });

document.getElementById('clientForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = document.getElementById('createClientBtn');
  btn.disabled = true; btn.textContent = 'Creating...';
  const name = document.getElementById('clientName').value;
  const email = document.getElementById('clientEmail').value;
  const password = document.getElementById('clientPassword').value;
  try {
    const userCredential = await createUserWithEmailAndPassword(clientCreatorAuth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    await setDoc(doc(db, 'clients', userCredential.user.uid), { name, email, createdAt: serverTimestamp() });
    await signOut(clientCreatorAuth);
    closeModal('clientModal'); showToast('Client created! Email: ' + email); loadClients();
  } catch (error) { alert('Error: ' + error.message); }
  finally { btn.disabled = false; btn.textContent = 'Create Client'; }
});

document.getElementById('clientsList').addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('[data-delete-client]');
  if (deleteBtn) {
    const clientId = deleteBtn.dataset.deleteClient;
    const clientEmail = deleteBtn.dataset.clientEmail;
    showConfirm('Remove Client', 'Are you sure you want to remove ' + clientEmail + '?', async () => {
      try { await deleteDoc(doc(db, 'clients', clientId)); showToast('Client removed successfully!'); loadClients(); }
      catch (error) { alert('Error removing client: ' + error.message); }
    });
  }
});

document.getElementById('confirmActionBtn').addEventListener('click', async () => { if (pendingAction) { await pendingAction(); pendingAction = null; } closeModal('confirmModal'); });
document.querySelectorAll('[data-close]').forEach(btn => { btn.addEventListener('click', () => closeModal(btn.dataset.close)); });
`;
