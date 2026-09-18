'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHead from './SectionHead';

const projects = [
  {
    title: 'Multi-tenant RAG knowledge engine',
    meta: 'RAG PIPELINE · 2026',
    image: '/projects/rag.png',
    bg: '#0d1117',
    github: 'https://github.com/ruzzhdontmiss/Enterprise-RAG',
    demo: 'https://enterprise-rag-frontend-8miq.onrender.com',
  },
  {
    title: 'AI-powered resume screening',
    meta: 'LLM · NLP · 2026',
    image: '/projects/resumeiq.png',
    bg: '#111118',
    github: 'https://github.com/ruzzhdontmiss/resume-ai',
    demo: 'https://resume-ai-opal-seven.vercel.app/',
  },
  {
    title: 'Web3 short-video platform with AI rarity',
    meta: 'CLIP · WEB3 · 2026',
    image: '/projects/minecast.png',
    bg: '#12141c',
    github: 'https://github.com/ruzzhdontmiss/Minecast',
    demo: 'https://minecast.vercel.app/',
  },
  {
    title: 'Streaming platform with persistent state',
    meta: 'FULL-STACK · 2026',
    image: '/projects/raine.png',
    bg: '#d8dde8',
    github: 'https://github.com/ruzzhdontmiss/raine',
    demo: 'https://raine.onrender.com',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: '6px',
          marginBottom: '1rem',
          backgroundColor: project.bg ?? '#dce3ed',
          border: '1px solid rgba(61,111,180,.10)',
        }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      </a>

      {/* Title + Meta row — .work-row */}
      <div className="work-row">
        <h3>
          <a href={project.demo} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexShrink: 0 }}>
          <span className="work-meta">{project.meta}</span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="work-github"
          >
            [ GitHub ]
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="projects-section">
      <div className="section-inner">
        <SectionHead
          title="Work"
          desc="Shipped systems across AI infrastructure, LLM pipelines, and full-stack products — designed, built, and debugged end-to-end."
        />

        {/* 2-column project grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
