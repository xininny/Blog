import Link from "next/link"

export default function Simple() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about/">About</Link>
        </li>
        <li>
          <Link href="/projects/">Projects</Link>
        </li>
        <li>
          <Link href="/publications/">Publications</Link>
        </li>
        <li>
          <Link href="/cv/">CV</Link>
        </li>
      </ul>
    </nav>
  )
}
