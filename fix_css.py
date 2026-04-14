.navbar {
  position: relative;
  background: rgba(255,255,255,0.96);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 clamp(20px,4vw,48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-logo { flex-shrink: 0; }
.logo-link { display: flex; align-items: center; text-decoration: none; }
.logo-svg { height: 38px; width: auto; }

.nav-menu {
=======
css_file = 'src/app/styles.css'
with open(css_file, 'r') as f:
    content = f.read()

anchor = '::selection {\n  background: rgba(37,99,235,0.3);\n  color: var(--text-primary);\n}'
anchor_pos = content.find(anchor)
good_end = anchor_pos + len(anchor) + 1

sep_pos = content.find('\n=======\n')
new_start = sep_pos + len('\n=======\n')

result = content[:good_end] + '\n' + content[new_start:]
with open(css_file, 'w') as f:
    f.write(result)

lines = result.split('\n')
print(f"Done. Lines: {len(lines)}")
for i, line in enumerate(lines[213:222], start=214):
    print(f"{i}: {line}")
   ============================================================ */
.navbar {
  position: relative;
  background: rgba(255,255,255,0.96);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 clamp(20px,4vw,48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-logo { flex-shrink: 0; }
.logo-link { display: flex; align-items: center; text-decoration: none; }
.logo-svg { height: 38px; width: auto; }

.nav-menu {
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
}

.nav-item { position: relative; }

.nav-link {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  transition: all var(--transition-fast);
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(37,99,235,0.06);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px; left: 50%;
  width: 0; height: 2px;
  background: var(--primary);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform: translateX(-50%);
}

.nav-link:hover::after,
.dropdown-toggle[aria-expanded='true']::after {
  width: 60%;
}

.nav-item-dropdown { position: relative; }

.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.dropdown-caret {
  font-size: 0.74rem;
  transition: transform var(--transition-fast);
}

.dropdown-caret.open { transform: rotate(180deg); }

.services-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  list-style: none;
  margin: 0;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12);
  z-index: 1100;
}

.dropdown-link {
  display: block;
  padding: 10px 12px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 7px;
  font-size: 0.88rem;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.dropdown-link:hover {
  background: rgba(37,99,235,0.14);
  color: var(--text-primary);
}

/* Hamburger */
.hamburger {
  display: none;
  cursor: pointer;
  padding: 8px;
  border: 0;
  background: transparent;
  border-radius: 8px;
  transition: background var(--transition-fast);
}
.hamburger:hover { background: rgba(37,99,235,0.07); }

.bar {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px 0;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.active .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 7px); }
.hamburger.active .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.active .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -7px); }

@media (max-width: 768px) {
  .hamburger { display: block; }
  .nav-menu { display: none; }
}

/* ============================================================
   MOBILE FULL-SCREEN MENU
   ============================================================ */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 72px;
  border-bottom: 1px solid var(--border-subtle);
  flex-shrink: 0;
}

.mobile-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  background: transparent;
  cursor: pointer;
  font-size: 1.4rem;
  color: var(--text-primary);
  line-height: 1;
  transition: all var(--transition-fast);
}
.mobile-close-btn:hover {
  background: rgba(37,99,235,0.08);
  border-color: var(--primary);
  color: var(--primary);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  flex: 1;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Archivo', sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  padding: 18px 0;
  border-bottom: 1px solid var(--border-subtle);
  transition: color var(--transition-fast);
  letter-spacing: -0.01em;
}
.mobile-nav-link:last-child { border-bottom: none; }
.mobile-nav-link:hover { color: var(--primary); }
.mobile-nav-link .link-arrow {
  font-size: 1rem;
  color: var(--text-muted);
  transition: transform var(--transition-fast), color var(--transition-fast);
}
.mobile-nav-link:hover .link-arrow {
  transform: translateX(4px);
  color: var(--primary);
}

.mobile-nav-divider {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 20px 0 8px;
}

.mobile-portal-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-subtle);
  transition: color var(--transition-fast);
}
.mobile-portal-link:last-child { border-bottom: none; }
.mobile-portal-link:hover { color: var(--primary); }

.mobile-overlay-footer {
  padding: 24px;
  border-top: 1px solid var(--border-subtle);
  flex-shrink: 0;
}

/* ============================================================
   HERO SECTION
   ============================================================ */
.hero {
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 80px;
  position: relative;
  overflow: hidden;
}

"""

result = before + new_section + after
with open(css_file, 'w') as f:
    f.write(result)

lines = result.split('\n')
print(f"Done. Total lines: {len(lines)}")
for i, line in enumerate(lines[210:220], start=211):
    print(f"{i}: {line}")