export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-parchment-border py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center bg-parchment-surface/50">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-mono font-semibold text-[11px] text-parchment-muted uppercase tracking-widest">
          play.sidelower.in
        </span>
        <span className="font-mono text-[10px] text-parchment-muted/60">
          © {currentYear} Soham · Small things built slowly.
        </span>
      </div>

      <a
        href="https://www.sidelower.in"
        target="_blank"
        rel="noopener noreferrer"
        className="font-plex text-sm text-parchment-text hover:text-parchment-accent transition-all duration-300 border-b border-parchment-border hover:border-parchment-accent pb-0.5"
      >
        ← Return to sidelower.in
      </a>
    </footer>
  );
}
