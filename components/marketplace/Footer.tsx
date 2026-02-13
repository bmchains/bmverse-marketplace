export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} BMverse</div>
          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
