import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
            <Link href="/">Silhoutte</Link>
        </div>

        <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/contacts">Contacts</Link>
        </div>
    </nav>
  );
}
