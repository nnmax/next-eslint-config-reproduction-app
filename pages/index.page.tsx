/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2em',
        margin: '5em 0 0',
      }}
    >
      <h1>Home</h1>
      {/* 👇 This should work in ESLint */}
      <a href="/about">About</a>
      {/* 👇 This should not work in ESLint */}
      <a href="/about.page">About.page</a>
    </div>
  )
}
