'use client'

import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

interface SectionHeaderProps {
  kicker: string
  title: string
  accent?: string
  sub?: string
  right?: React.ReactNode
}

export default function SectionHeader({ kicker, title, accent, sub, right }: SectionHeaderProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 56,
        flexWrap: 'wrap',
        gap: 24,
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <motion.p variants={item} className="eyebrow" style={{ marginBottom: 22 }}>
          {kicker}
        </motion.p>
        <motion.h2
          variants={item}
          className="font-display"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 500,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            marginBottom: sub ? 16 : 0,
          }}
        >
          {title}
          {accent && <span style={{ color: 'var(--accent)' }}>{accent}</span>}
        </motion.h2>
        {sub && (
          <motion.p variants={item} style={{ fontSize: 16, color: 'var(--text-3)', maxWidth: 560 }}>
            {sub}
          </motion.p>
        )}
      </div>
      {right && (
        <motion.div variants={item} style={{ flexShrink: 0 }}>
          {right}
        </motion.div>
      )}
    </motion.div>
  )
}
