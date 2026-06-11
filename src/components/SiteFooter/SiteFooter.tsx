import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>ZeroFest</span>
          <p className={styles.tagline}>
            Pioneering sustainable events through technology and community action.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Share">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22,4 12,13 2,4" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Links</h4>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Terms of Service</a>
          <a href="#" className={styles.link}>Contact Us</a>
          <a href="#" className={styles.link}>Sponsorship</a>
        </div>

        <div className={styles.copy}>
          <p className={styles.copyright}>
            &copy; 2024 ZeroFest by Eco Champions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
