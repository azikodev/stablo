import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 ">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="mr-8">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-8">About</a>
          </Link>
          <Link href="/contact">
            <a className="mr-8">Contact</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <img
                src="/logo.svg"
                width={100}
                height={100}
                alt="Logo"
                className="h-auto"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/archive">
            <a className="mr-8">Archive</a>
          </Link>
          <Link href="/pro">
            <a className="mr-8">Pro Version</a>
          </Link>
          <Link href="/download">
            <a>Download</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
