import { motion } from 'motion/react';

export default function AboutBlurb() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto px-6 mb-15 text-center"
    >
      <p className="font-plex text-xl text-parchment-text leading-relaxed font-light">
        This is where I put things I've built — trackers, tools, small things.
        All of them started becuase I was wanted to explore something and becuase
        <span className="font-garamond italic mx-1.5 text-parchment-accent decoration-parchment-accent/30 underline underline-offset-4 decoration-2">
          building is fun.
        </span>
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <div className="h-px bg-parchment-border grow max-w-15" />
        <div className="w-1.5 h-1.5 rounded-full bg-parchment-accent/40" />
        <div className="h-px bg-parchment-border grow max-w-15" />
      </div>
    </motion.div>
  );
}
