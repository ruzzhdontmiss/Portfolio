'use client';
import { motion } from 'framer-motion';
import SectionHead from './SectionHead';

const achievements = [
  {
    title: 'Best Technical Implementation Award',
    desc: 'Technovate, Amity University (2026) — Awarded for the AI Content-Originality Engine (MineCast).',
  },
  {
    title: 'Publication: PEIS 2026 (Paper #485)',
    desc: '"MineCast: A Blockchain-Based AI-Driven Video Platform for Watch-to-Earn and Passive Mining" — Accepted; publication indexing in progress.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '8rem 0', position: 'relative', zIndex: 10 }}>
      <div className="section-inner">
        <SectionHead
          title="Recognition"
          desc="Awards and published research from academic and industry events."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                paddingBottom: '3rem',
                borderBottom: index < achievements.length - 1 ? '1px solid rgba(61,111,180,.12)' : 'none',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: '1.3rem',
                color: '#2d4a73',
                marginBottom: '0.8rem',
                letterSpacing: '-0.01em',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#4a6a8f', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
