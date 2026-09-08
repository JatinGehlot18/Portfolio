export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-xs text-muted">
        © {year} Jatin Gehlot. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
