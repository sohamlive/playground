export default function Hero() {
  return (
    <section className="pt-10 pb-10 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-45 bg-[radial-gradient(circle,var(--color-parchment-accent)_0%,transparent_70%)] -z-10 blur-3xl opacity-10" />

      <h1 className="font-garamond italic text-6xl md:text-8xl text-parchment-text mb-6 tracking-tight relative">
        Sidelower's Playground
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-parchment-accent/20 rounded-full blur-[1px]" />
      </h1>
      <p className="font-plex font-light text-xl md:text-2xl text-parchment-accent tracking-wide opacity-90">
        Where curiosity ships.
      </p>
    </section>
  );
}
