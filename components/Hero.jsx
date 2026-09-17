'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="silk-hero">
      <div className="hero-inner">
        {/* Hero headline — single h1, FIX 4 text */}
        <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
          <motion.h1
            className="hero-headline"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Intelligence is the product. 
            <em>I engineer it end-to-end.</em>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          I&apos;m Rushat &mdash; a full-stack engineer building production AI systems.
          From LLM retrieval pipelines and vector search to multi-tenant SaaS, I design,
          ship, and debug the whole stack across TypeScript/Next.js, Python/FastAPI, and
          applied ML.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#contact" className="hero-cta-talk">
            ↳ Let&apos;s Talk
          </a>
          <a href="#work" className="hero-cta-work">
            [ View work ]
          </a>
        </motion.div>
      </div>
    </section>
  );
}
