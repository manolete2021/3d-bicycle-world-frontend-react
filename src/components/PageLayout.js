// Reusable page wrapper with neon accent defaults from the reference design.
function PageLayout({
  accent = '#22d3ee',
  accentGlow = 'rgba(34, 211, 238, 0.22)',
  children,
}) {
  return (
    <main
      className="bw-page"
      style={{
        '--bw-accent': accent,
        '--bw-accent-glow': accentGlow,
      }}
    >
      <div className="bw-page__veil" aria-hidden="true" />
      <div className="bw-page__inner">{children}</div>
    </main>
  );
}

export default PageLayout;
