function PageLayout({ accent = '#c9a227', accentGlow = 'rgba(201, 162, 39, 0.2)', children }) {
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
