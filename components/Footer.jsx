'use client';

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-inner">
        {/* Eyebrow */}
        <div className="footer-eyebrow">( Contact )</div>

        {/* Main heading */}
        <h2 className="footer-heading">Let&apos;s build something intelligent.</h2>

        {/* Gallery-style desc */}
        <p style={{ fontSize: '1.15rem', color: '#4a6a8f', marginBottom: '2rem', maxWidth: '44ch', lineHeight: 1.6 }}>
          Open to full-time roles, internships, and interesting builds.
        </p>

        {/* Large email link */}
        <a
          href="mailto:rushaty02@gmail.com"
          className="footer-email"
        >
          rushaty02@gmail.com
        </a>

        {/* Socials */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/rushat-yadav-037512256/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ruzzhdontmiss"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            GitHub
          </a>
          <a href="https://twitter.com/ruzzhx"
            target="_blank" rel="noreferrer"
            className="footer-social-link">
            Twitter
          </a>
        </div>

        {/* Fine print */}
        <p className="footer-fine">
          &copy; 2026 Rushat Yadav &middot; Delhi, India &middot; Designed &amp; engineered with intent.
        </p>
      </div>
    </footer>
  );
}
