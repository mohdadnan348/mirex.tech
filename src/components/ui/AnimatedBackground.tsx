export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-violet-950/20 to-pink-950/30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}