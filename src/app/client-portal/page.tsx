'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ClientPortalPage() {
  useEffect(() => {
    // Firebase modules are loaded via ES module imports in the inline script
  }, []);

  return (
    <>
      <Navbar />
      <style jsx global>{`
        .portal-section {
          min-height: 100vh;
          padding: 120px 20px 60px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }
        .login-container {
          max-width: 400px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .login-container h2 { color: var(--text-primary); margin-bottom: 30px; text-align: center; }
        .login-container .form-group { margin-bottom: 20px; }
        .login-container input {
          width: 100%; padding: 14px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px; color: var(--text-primary);
          font-size: 1rem; transition: all 0.3s ease;
        }
        .login-container input:focus { outline: none; border-color: var(--primary); background: rgba(255, 255, 255, 0.12); }
        .login-container .btn { width: 100%; margin-top: 10px; }
        .login-error { background: rgba(239, 68, 68, 0.2); color: #f87171; padding: 12px; border-radius: 8px; margin-bottom: 20px; display: none; text-align: center; }
        .forgot-password { text-align: center; margin-top: 20px; }
        .forgot-password a { color: var(--primary-light); text-decoration: none; font-size: 0.9rem; }
        .admin-link { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .admin-link a { color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; }
        .admin-link a:hover { color: var(--primary-light); }
        .dashboard-container { max-width: 1200px; margin: 0 auto; display: none; }
        .dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; flex-wrap: wrap; gap: 20px; }
        .welcome-text h2 { color: var(--text-primary); margin-bottom: 5px; }
        .welcome-text p { color: var(--text-secondary); }
        .projects-section { margin-bottom: 40px; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; }
        .project-card { background: rgba(255, 255, 255, 0.05); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-radius: 12px; padding: 24px; border: 1px solid rgba(255, 255, 255, 0.1); transition: transform 0.3s ease; }
        .project-card:hover { transform: translateY(-5px); }
        .project-card h4 { color: var(--text-primary); margin-bottom: 10px; }
        .project-card p { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 15px; }
        .project-status { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; }
        .status-pending { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
        .status-in-progress { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
        .status-completed { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
        .status-rejected { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
        .status-accepted { background: rgba(168, 85, 247, 0.2); color: #a855f7; }
        .empty-projects { text-align: center; padding: 60px 20px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px dashed rgba(255, 255, 255, 0.1); grid-column: 1 / -1; }
        .empty-projects i { font-size: 3rem; color: var(--primary-light); margin-bottom: 20px; }
        .empty-projects h3 { color: var(--text-primary); margin-bottom: 10px; }
        .empty-projects p { color: var(--text-secondary); }
        .request-meta { display: flex; gap: 15px; margin-top: 15px; flex-wrap: wrap; font-size: 0.85rem; color: var(--text-secondary); }
        .request-meta span { display: flex; align-items: center; gap: 5px; }
        .admin-notes { margin-top: 15px; padding: 12px; background: rgba(168, 85, 247, 0.1); border-radius: 8px; border-left: 3px solid #a855f7; }
        .admin-notes h5 { color: #a855f7; margin: 0 0 8px 0; font-size: 0.85rem; }
        .admin-notes p { color: var(--text-secondary); margin: 0; font-size: 0.9rem; }
        .update-request-section { background: rgba(255, 255, 255, 0.05); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-radius: 16px; padding: 32px; border: 1px solid rgba(255, 255, 255, 0.1); }
        .update-request-section h3 { color: var(--text-primary); margin-bottom: 24px; }
        .request-form .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .request-form .form-group { margin-bottom: 20px; }
        .request-form label { display: block; color: var(--text-secondary); margin-bottom: 8px; font-size: 0.9rem; }
        .request-form input, .request-form select, .request-form textarea { width: 100%; padding: 14px 16px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; color: var(--text-primary); font-size: 1rem; transition: all 0.3s ease; }
        .request-form input:focus, .request-form select:focus, .request-form textarea:focus { outline: none; border-color: var(--primary); background: rgba(255, 255, 255, 0.15); }
        .request-form textarea { resize: vertical; min-height: 120px; }
        select { background-color: #1a1a2e !important; color: #ffffff !important; }
        select option { background-color: #1a1a2e !important; color: #ffffff !important; }
        .success-message { background: rgba(34, 197, 94, 0.2); color: #22c55e; padding: 16px; border-radius: 8px; margin-top: 20px; display: none; text-align: center; }
        .loading-spinner { display: flex; justify-content: center; padding: 40px; grid-column: 1 / -1; }
        .loading-spinner::after { content: ''; width: 40px; height: 40px; border: 3px solid rgba(255, 255, 255, 0.1); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .ticket-number { font-size: 0.75rem; color: var(--primary-light); font-weight: 600; letter-spacing: 0.05em; margin-bottom: 8px; display: block; }
        .status-wrapper { margin: 12px 0; }
        .history-section { margin-bottom: 40px; }
        .history-toggle { display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 16px 20px; transition: background 0.2s ease; user-select: none; }
        .history-toggle:hover { background: rgba(255, 255, 255, 0.08); }
        .history-toggle-left { display: flex; align-items: center; gap: 12px; }
        .history-toggle-left span { color: var(--text-primary); font-size: 1.1rem; font-weight: 600; }
        .history-toggle-left i.fa-history { color: var(--primary-light); }
        .history-count { background: rgba(255, 255, 255, 0.1); color: var(--text-secondary); font-size: 0.8rem; padding: 2px 8px; border-radius: 12px; }
        .history-chevron { color: var(--text-secondary); transition: transform 0.3s ease; font-size: 0.9rem; }
        .history-chevron.open { transform: rotate(180deg); }
        .history-list { display: none; margin-top: 8px; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; overflow: hidden; }
        .history-list.open { display: block; }
        .ticket-row { border-bottom: 1px solid rgba(255, 255, 255, 0.06); background: rgba(255, 255, 255, 0.03); }
        .ticket-row:last-child { border-bottom: none; }
        .ticket-row-header { display: flex; align-items: center; gap: 14px; padding: 14px 18px; cursor: pointer; transition: background 0.2s ease; flex-wrap: wrap; }
        .ticket-row-header:hover { background: rgba(255, 255, 255, 0.05); }
        .ticket-row-number { font-size: 0.75rem; color: var(--primary-light); font-weight: 600; letter-spacing: 0.05em; min-width: 90px; }
        .ticket-row-title { color: var(--text-primary); font-size: 0.95rem; font-weight: 500; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ticket-row-status { flex-shrink: 0; }
        .ticket-row-date { color: var(--text-secondary); font-size: 0.8rem; flex-shrink: 0; }
        .ticket-row-chevron { color: var(--text-secondary); font-size: 0.8rem; transition: transform 0.3s ease; flex-shrink: 0; }
        .ticket-row-chevron.open { transform: rotate(180deg); }
        .ticket-row-details { display: none; padding: 0 18px 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.05); }
        .ticket-row-details.open { display: block; }
        .ticket-detail-description { color: var(--text-secondary); font-size: 0.9rem; margin: 14px 0 10px; line-height: 1.6; }
        .ticket-detail-meta { display: flex; gap: 15px; flex-wrap: wrap; font-size: 0.85rem; color: var(--text-secondary); margin-top: 10px; }
        .ticket-detail-meta span { display: flex; align-items: center; gap: 5px; }
        .ticket-detail-notes { margin-top: 12px; padding: 12px; background: rgba(168, 85, 247, 0.1); border-radius: 8px; border-left: 3px solid #a855f7; }
        .ticket-detail-notes h5 { color: #a855f7; margin: 0 0 6px 0; font-size: 0.85rem; }
        .ticket-detail-notes p { color: var(--text-secondary); margin: 0; font-size: 0.9rem; }
        @media (max-width: 768px) {
          .request-form .form-row { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
          .ticket-row-date { display: none; }
        }
      `}</style>

      <section className="portal-section">
        <div className="login-container" id="loginForm">
          <h2><i className="fas fa-user-circle" style={{ marginRight: '10px' }}></i>Client Login</h2>
          <div className="login-error" id="loginError"></div>
          <form id="clientLoginForm">
            <div className="form-group">
              <input type="email" id="loginEmail" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" id="loginPassword" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary" id="loginBtn">Sign In</button>
          </form>
          <div className="forgot-password">
            <a href="#" id="forgotPasswordLink">Forgot your password?</a>
          </div>
        </div>

        <div className="dashboard-container" id="dashboard">
          <div className="dashboard-header">
            <div className="welcome-text">
              <h2>Welcome, <span id="clientName">Client</span></h2>
              <p>Manage your requests and track progress</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/payment" className="btn btn-primary">
                <i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i>Make a Payment
              </Link>
              <button className="btn btn-outline" id="logoutBtn">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>

          <div className="projects-section">
            <h3 className="section-title" style={{ textAlign: 'left' }}><i className="fas fa-clipboard-list" style={{ marginRight: '10px' }}></i>Active Requests</h3>
            <div className="projects-grid" id="projectsGrid">
              <div className="loading-spinner"></div>
            </div>
          </div>

          <div className="history-section" id="historySection" style={{ display: 'none' }}>
            <div className="history-toggle" id="historyToggle">
              <div className="history-toggle-left">
                <i className="fas fa-history"></i>
                <span>Ticket History</span>
                <span className="history-count" id="historyCount">0</span>
              </div>
              <i className="fas fa-chevron-down history-chevron" id="historyChevron"></i>
            </div>
            <div className="history-list" id="historyList"></div>
          </div>

          <div className="update-request-section">
            <h3><i className="fas fa-plus-circle" style={{ marginRight: '10px' }}></i>Submit New Request</h3>
            <form className="request-form" id="requestForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="requestType">Request Type</label>
                  <select id="requestType" required>
                    <option value="">Select type...</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Website Update">Website Update</option>
                    <option value="Bug Fix">Bug Fix</option>
                    <option value="New Feature">New Feature</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="requestPriority">Priority</label>
                  <select id="requestPriority" required>
                    <option value="">Select priority...</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="requestTitle">Title</label>
                <input type="text" id="requestTitle" placeholder="Brief title for your request" required />
              </div>
              <div className="form-group">
                <label htmlFor="requestDescription">Description</label>
                <textarea id="requestDescription" placeholder="Describe your request in detail..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" id="submitBtn">
                <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i>Submit Request
              </button>
            </form>
            <div className="success-message" id="successMessage">
              <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
              Your request has been submitted successfully!
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Senyo Solutions</h4>
              <p>Professional web development and digital solutions for businesses.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="footer-contact">
                <p><i className="fas fa-phone"></i> (516) 707-7351</p>
                <p><i className="fas fa-envelope"></i> contact@senyosolutions.com</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Senyo Solutions. All rights reserved.</p>
            <div className="footer-legal-links">
              <Link href="/terms-of-service">Terms of Service</Link>
              <span>&middot;</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Firebase Client Portal Script */}
      <script type="module" dangerouslySetInnerHTML={{ __html: `
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
        import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
        import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

        const firebaseConfig = {
          apiKey: "AIzaSyBBnOrgy82HaCPpJaxeHU4csK6YhjhAeOI",
          authDomain: "senyo-solutions.firebaseapp.com",
          projectId: "senyo-solutions",
          storageBucket: "senyo-solutions.firebasestorage.app",
          messagingSenderId: "632156878304",
          appId: "1:632156878304:web:635968afa1eb25c928e785",
          measurementId: "G-50TB2Q2L1G"
        };

        const clientApp = initializeApp(firebaseConfig, 'clientPortal');
        const clientAuth = getAuth(clientApp);
        const db = getFirestore(clientApp);

        let currentUser = null;
        let unsubscribeRequests = null;

        const INACTIVITY_TIMEOUT = 30 * 60 * 1000;
        const LAST_ACTIVITY_KEY = 'client_last_activity';
        let inactivityTimer = null;

        function resetInactivityTimer() {
          localStorage.setItem(LAST_ACTIVITY_KEY, Date.now());
          clearTimeout(inactivityTimer);
          inactivityTimer = setTimeout(async () => {
            if (currentUser) {
              if (unsubscribeRequests) unsubscribeRequests();
              await signOut(clientAuth);
            }
          }, INACTIVITY_TIMEOUT);
        }

        function startActivityTracking() {
          ['click', 'keypress', 'mousemove', 'scroll', 'touchstart'].forEach(evt => {
            document.addEventListener(evt, resetInactivityTimer, { passive: true });
          });
          resetInactivityTimer();
        }

        function stopActivityTracking() {
          ['click', 'keypress', 'mousemove', 'scroll', 'touchstart'].forEach(evt => {
            document.removeEventListener(evt, resetInactivityTimer);
          });
          clearTimeout(inactivityTimer);
          localStorage.removeItem(LAST_ACTIVITY_KEY);
        }

        document.addEventListener('visibilitychange', async () => {
          if (document.visibilityState === 'visible' && currentUser) {
            const last = parseInt(localStorage.getItem(LAST_ACTIVITY_KEY) || '0', 10);
            if (Date.now() - last > INACTIVITY_TIMEOUT) {
              if (unsubscribeRequests) unsubscribeRequests();
              await signOut(clientAuth);
            } else { resetInactivityTimer(); }
          }
        });

        onAuthStateChanged(clientAuth, (user) => {
          if (user) { currentUser = user; showDashboard(user); loadRequests(user.uid); startActivityTracking(); }
          else { currentUser = null; stopActivityTracking(); showLogin(); }
        });

        function showDashboard(user) {
          document.getElementById('loginForm').style.display = 'none';
          document.getElementById('dashboard').style.display = 'block';
          document.getElementById('clientName').textContent = user.displayName || user.email.split('@')[0];
        }

        function showLogin() {
          document.getElementById('dashboard').style.display = 'none';
          document.getElementById('loginForm').style.display = 'block';
          if (unsubscribeRequests) { unsubscribeRequests(); unsubscribeRequests = null; }
        }

        function loadRequests(userId) {
          const grid = document.getElementById('projectsGrid');
          const historyList = document.getElementById('historyList');
          const historySection = document.getElementById('historySection');
          const historyCount = document.getElementById('historyCount');
          grid.innerHTML = '<div class="loading-spinner"></div>';
          try {
            const q = query(collection(db, 'requests'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
            unsubscribeRequests = onSnapshot(q, (snapshot) => {
              const activeStatuses = ['Pending', 'Accepted', 'In Progress'];
              const historyStatuses = ['Completed', 'Rejected'];
              const activeRequests = []; const historyRequests = [];
              snapshot.forEach((docSnap) => {
                const request = docSnap.data();
                if (historyStatuses.includes(request.status)) historyRequests.push(request);
                else activeRequests.push(request);
              });
              if (activeRequests.length === 0) {
                grid.innerHTML = '<div class="empty-projects"><i class="fas fa-folder-open"></i><h3>No Active Requests</h3><p>Submit your first request below to get started.</p></div>';
              } else {
                grid.innerHTML = '';
                activeRequests.forEach((request) => grid.appendChild(createRequestCard(request)));
              }
              if (historyRequests.length > 0) {
                historySection.style.display = 'block';
                historyCount.textContent = historyRequests.length;
                historyList.innerHTML = '';
                historyRequests.forEach((request) => historyList.appendChild(createHistoryRow(request)));
              } else { historySection.style.display = 'none'; }
            }, (error) => {
              console.error('Error loading requests:', error);
              grid.innerHTML = '<div class="empty-projects"><i class="fas fa-folder-open"></i><h3>No Active Requests</h3><p>Submit your first request below to get started.</p></div>';
            });
          } catch (error) {
            console.error('Error:', error);
            grid.innerHTML = '<div class="empty-projects"><i class="fas fa-folder-open"></i><h3>No Active Requests</h3><p>Submit your first request below to get started.</p></div>';
          }
        }

        document.getElementById('historyToggle').addEventListener('click', () => {
          document.getElementById('historyList').classList.toggle('open');
          document.getElementById('historyChevron').classList.toggle('open');
        });

        function createHistoryRow(request) {
          const row = document.createElement('div'); row.className = 'ticket-row';
          const statusClass = getStatusClass(request.status);
          const date = request.createdAt ? new Date(request.createdAt.toDate()).toLocaleDateString() : 'N/A';
          const ticketNum = request.ticketNumber || '';
          row.innerHTML = '<div class="ticket-row-header">' + (ticketNum ? '<span class="ticket-row-number"><i class="fas fa-ticket-alt" style="margin-right:4px;"></i>' + escapeHtml(ticketNum) + '</span>' : '') + '<span class="ticket-row-title">' + escapeHtml(request.title) + '</span><span class="ticket-row-status"><span class="project-status ' + statusClass + '">' + request.status + '</span></span><span class="ticket-row-date"><i class="fas fa-calendar" style="margin-right:4px;"></i>' + date + '</span><i class="fas fa-chevron-down ticket-row-chevron"></i></div><div class="ticket-row-details"><p class="ticket-detail-description">' + escapeHtml(request.description) + '</p><div class="ticket-detail-meta"><span><i class="fas fa-tag"></i> ' + escapeHtml(request.requestType) + '</span><span><i class="fas fa-flag"></i> ' + escapeHtml(request.priority) + '</span><span><i class="fas fa-calendar"></i> ' + date + '</span></div>' + (request.adminNotes ? '<div class="ticket-detail-notes"><h5><i class="fas fa-comment"></i> Admin Notes</h5><p>' + escapeHtml(request.adminNotes) + '</p></div>' : '') + '</div>';
          const header = row.querySelector('.ticket-row-header');
          const details = row.querySelector('.ticket-row-details');
          const chevron = row.querySelector('.ticket-row-chevron');
          header.addEventListener('click', () => { details.classList.toggle('open'); chevron.classList.toggle('open'); });
          return row;
        }

        function createRequestCard(request) {
          const card = document.createElement('div'); card.className = 'project-card';
          const statusClass = getStatusClass(request.status);
          const date = request.createdAt ? new Date(request.createdAt.toDate()).toLocaleDateString() : 'Just now';
          card.innerHTML = (request.ticketNumber ? '<span class="ticket-number"><i class="fas fa-ticket-alt" style="margin-right: 5px;"></i>' + escapeHtml(request.ticketNumber) + '</span>' : '') + '<h4>' + escapeHtml(request.title) + '</h4><p>' + escapeHtml(request.description.substring(0, 150)) + (request.description.length > 150 ? '...' : '') + '</p><div class="status-wrapper"><span class="project-status ' + statusClass + '">' + request.status + '</span></div><div class="request-meta"><span><i class="fas fa-tag"></i> ' + escapeHtml(request.requestType) + '</span><span><i class="fas fa-flag"></i> ' + escapeHtml(request.priority) + '</span><span><i class="fas fa-calendar"></i> ' + date + '</span></div>' + (request.adminNotes ? '<div class="admin-notes"><h5><i class="fas fa-comment"></i> Admin Notes</h5><p>' + escapeHtml(request.adminNotes) + '</p></div>' : '');
          return card;
        }

        function getStatusClass(status) {
          return { 'Pending': 'status-pending', 'Accepted': 'status-accepted', 'In Progress': 'status-in-progress', 'Completed': 'status-completed', 'Rejected': 'status-rejected' }[status] || 'status-pending';
        }

        function escapeHtml(text) { if (!text) return ''; const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

        function generateTicketNumber() {
          const timestamp = Date.now().toString(36).toUpperCase();
          const random = Math.random().toString(36).substring(2, 5).toUpperCase();
          return 'SS-' + timestamp + random;
        }

        function showError(msg) { const el = document.getElementById('loginError'); el.textContent = msg; el.style.display = 'block'; }

        function getErrorMessage(code) {
          return { 'auth/invalid-email': 'Invalid email address', 'auth/user-disabled': 'This account has been disabled', 'auth/user-not-found': 'No account found with this email', 'auth/wrong-password': 'Incorrect password', 'auth/invalid-credential': 'Invalid email or password' }[code] || 'An error occurred. Please try again.';
        }

        document.getElementById('clientLoginForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = document.getElementById('loginEmail').value;
          const password = document.getElementById('loginPassword').value;
          const errorEl = document.getElementById('loginError');
          const loginBtn = document.getElementById('loginBtn');
          loginBtn.disabled = true; loginBtn.textContent = 'Signing in...'; errorEl.style.display = 'none';
          try { await signInWithEmailAndPassword(clientAuth, email, password); }
          catch (error) { showError(getErrorMessage(error.code)); }
          finally { loginBtn.disabled = false; loginBtn.textContent = 'Sign In'; }
        });

        document.getElementById('logoutBtn').addEventListener('click', async () => {
          if (unsubscribeRequests) unsubscribeRequests();
          await signOut(clientAuth);
        });

        document.getElementById('forgotPasswordLink').addEventListener('click', async (e) => {
          e.preventDefault();
          const email = document.getElementById('loginEmail').value;
          if (!email) { alert('Please enter your email address first'); return; }
          try { await sendPasswordResetEmail(clientAuth, email); alert('Password reset email sent! Check your inbox.'); }
          catch (error) { alert(getErrorMessage(error.code)); }
        });

        document.getElementById('requestForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = document.getElementById('submitBtn');
          const successMsg = document.getElementById('successMessage');
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
          try {
            const ticketNumber = generateTicketNumber();
            await addDoc(collection(db, 'requests'), {
              ticketNumber, userId: currentUser.uid, userEmail: currentUser.email,
              userName: currentUser.displayName || currentUser.email.split('@')[0],
              requestType: document.getElementById('requestType').value,
              priority: document.getElementById('requestPriority').value,
              title: document.getElementById('requestTitle').value,
              description: document.getElementById('requestDescription').value,
              status: 'Pending', adminNotes: '', createdAt: serverTimestamp(), updatedAt: serverTimestamp()
            });
            document.getElementById('requestForm').reset();
            successMsg.innerHTML = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>Request submitted! Your ticket number is <strong>' + ticketNumber + '</strong>.';
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 8000);
          } catch (error) { alert('Error submitting request: ' + error.message); }
          finally { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Submit Request'; }
        });
      `}} />
    </>
  );
}
