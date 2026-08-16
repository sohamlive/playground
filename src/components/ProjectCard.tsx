import { motion } from 'motion/react';
import { Project } from '../types';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isWip = project.status === 'wip';
  const link = isWip ? '#' : `/${project.slug}/`;

  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      className="group flex flex-col bg-parchment-surface border border-parchment-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-parchment-accent/10 hover:border-parchment-accent/40 transition-all duration-150"
    >
      <div className="aspect-video w-full bg-parchment-border/30 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-garamond italic text-4xl text-parchment-muted/40">
            {project.title.charAt(0)}
          </div>
        )}
        {isWip && (
          <div className="absolute top-3 right-3 bg-parchment-accent text-parchment-bg font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded shadow-sm">
            WIP
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="font-plex font-medium text-lg text-parchment-text mb-2 group-hover:text-parchment-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-plex text-sm text-parchment-muted mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] text-parchment-accent bg-amber-600/30 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="font-mono text-[10px] text-parchment-muted uppercase tracking-tighter">
          Updated · {formatDate(project.lastUpdated)}
        </div>
      </div>
    </motion.a>
    // bg-parchment-accent-light
  );
}
