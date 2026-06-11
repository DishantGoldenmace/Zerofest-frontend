import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#059669" />
              <path d="M2 17l10 5 10-5" stroke="#059669" strokeWidth="2" fill="none" />
              <path d="M2 12l10 5 10-5" stroke="#34d399" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className={styles.brandName}>ZeroFest</span>
        </div>

        <nav className={styles.nav}>
          <a href="#live-detection" className={`${styles.navLink} ${styles.active}`}>
            Live Detection
          </a>
          <a href="#progress" className={styles.navLink}>
            Progress
          </a>
          <a href="#impact" className={styles.navLink}>
            Impact
          </a>
        </nav>

        <a href="#join" className={styles.joinBtn}>
          Join Event
        </a>
      </div>
    </header>
  );
}
