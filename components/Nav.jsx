'use client';
import { motion } from 'framer-motion';

const links = [
  { label: 'Work',    href: '#work' },
  { label: 'About',  href: '#about' },
  { label: 'Stack',  href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <motion.nav
      className="nav-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {/* Logo — sans-serif 400, matching Sreenidhi reference */}
      <a href="#" className="nav-logo">Rushat Yadav</a>

      {/* Bracket pill links */}
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="nav-pill">
            [ {link.label} ]
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
