import React from "react"

export default function SimplePage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Simple Test Page</h1>
      <p>If you can see this, Next.js is working!</p>
      <p>This page has no Notion dependencies.</p>

      <h2>Navigation Test</h2>
      <ul>
        <li>
          <a href="/about">About (static page)</a>
        </li>
        <li>
          <a href="/projects">Projects (static page)</a>
        </li>
        <li>
          <a href="/publications">Publications (static page)</a>
        </li>
        <li>
          <a href="/cv">CV (static page)</a>
        </li>
      </ul>

      <p>
        <strong>Time:</strong> {new Date().toLocaleString()}
      </p>
    </div>
  )
}
