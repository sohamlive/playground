import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment-bg flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Ghost number */}
      <span className="absolute font-garamond italic text-[260px] font-semibold text-parchment-border leading-none select-none tracking-[-0.05em] pointer-events-none">
        404
      </span>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center gap-0"
      >
        <span className="font-mono text-[11px] text-parchment-accent bg-parchment-accent-light px-3 py-1 rounded-full uppercase tracking-widest mb-6">
          page not found
        </span>
        <h1 className="font-garamond italic text-4xl md:text-5xl text-parchment-text mb-4 leading-snug">
          This one wandered off.
        </h1>
        <p className="font-plex font-light text-parchment-muted text-[15px] leading-relaxed max-w-sm mb-8">
          The page you're looking for doesn't exist — or maybe it{' '}
          <em className="font-garamond italic text-lg not-italic inline" style={{ fontStyle: 'italic' }}>
            never quite shipped.
          </em>{' '}
          Either way, there's nothing here right now.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="/" 
            className="font-plex font-medium text-sm text-parchment-bg bg-parchment-accent px-6 py-3 rounded-md hover:scale-[1.02] hover:opacity-90 transition-all duration-150 shadow-sm"
          >
            ← Back to the playground
          </a>
          <a 
            href="https://sidelower.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-plex text-sm text-parchment-muted border border-parchment-border px-6 py-3 rounded-md hover:border-parchment-accent hover:text-parchment-accent hover:scale-[1.02] transition-all duration-150"
          >
            Visit sidelower.in
          </a>
        </div>
        <p className="font-mono text-[10px] text-parchment-border tracking-widest mt-16 uppercase">
          play.sidelower.in · 404
        </p>
      </motion.div>
    </div>
  );
}
