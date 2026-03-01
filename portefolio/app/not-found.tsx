export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-white">
      <div className="rounded-xl border border-white/10 bg-panel px-8 py-6 shadow-card">
        <p className="text-sm text-white/70">404</p>
        <h1 className="mt-1 text-2xl font-semibold">Page introuvable</h1>
        <p className="mt-2 text-white/70">Le contenu demandé n&apos;existe pas.</p>
      </div>
    </main>
  );
}
