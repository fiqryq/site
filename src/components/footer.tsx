export function Footer() {
  return (
    <footer className="mx-auto max-w-screen-2xl px-6 sm:px-12">
      <div className="divider-dotted" />
      <div className="flex items-center justify-between py-4">
        <span className="fig-label">© {new Date().getFullYear()} Fiqry Choerudin</span>
        <a
          href="https://github.com/fiqryq"
          target="_blank"
          rel="noreferrer"
          className="fig-label hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
