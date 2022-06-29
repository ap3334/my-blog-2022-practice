import { Link } from "gatsby"
import React from "react"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <div style={{display: "flex", gap:10}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
        <Link to="/test-space">Test Space</Link>
      </div>

      <h1>Home Page</h1>
    </main>
  )
} 


export default IndexPage
