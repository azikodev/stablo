import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <header>
      <nav className="flex gap-8 mx-auto">
        <Link href="/">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        image
        <Link href="#">Archive</Link>
        <Link href="#">Pro Version</Link>
        <Link href="#">Download</Link>
      </nav>
    </header>
  );
}
