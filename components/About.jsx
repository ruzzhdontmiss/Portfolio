'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{
      padding: '8rem 0',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ padding: '0 clamp(2rem, 10vw, 8rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>Education</h2>
              <h3 style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--foreground)',
              }}>
                Amity University
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginTop: '0.4rem' }}>
                B.Tech, Computer Science
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.2rem' }}>
                2022 – 2026
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>About</h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}>
              I am a Full-Stack Engineer with a strong foundation in modern
              web technologies and applied Machine Learning. I have extensive
              production experience working across TypeScript/Next.js and
              Python/FastAPI, shipping multi-service systems end-to-end.
            </p>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--foreground)',
            }}>
              Whether it&apos;s building vector search pipelines, diagnosing issues
              on memory-constrained cloud deployments, or using AI coding
              agents to accelerate implementation, I bring a systematic approach
              to testing, debugging, and product development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
