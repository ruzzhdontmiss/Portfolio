'use client';
import { motion } from 'framer-motion';

const toolCategories = [
  {
    title: 'Software Engineering',
    tools: ['TypeScript', 'Next.js/React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Git/CI'],
  },
  {
    title: 'Generative AI / NLP',
    tools: ['LLM (Mistral, OpenAI)', 'RAG Pipelines', 'LangGraph', 'Qdrant', 'FAISS', 'CLIP'],
  },
  {
    title: 'ML / Deep Learning',
    tools: ['scikit-learn', 'TensorFlow', 'Keras', 'CNN', 'LSTM', 'GANs', 'Transfer Learning'],
  },
  {
    title: 'Languages',
    tools: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
];

export default function Skills() {
  return (
    <section id="tools" style={{
      padding: '8rem 0',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ padding: '0 clamp(2rem, 10vw, 8rem)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '4rem' }}
        >
          Stack
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
        }}>
          {toolCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3 style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '1.2rem',
                paddingBottom: '0.8rem',
                borderBottom: '1px solid rgba(61,111,180,.12)',
              }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cat.tools.map((tool) => (
                  <span key={tool} style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    lineHeight: 1.5,
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
