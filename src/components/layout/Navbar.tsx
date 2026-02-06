import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] opacity-90 h-12">
      <nav>
        <div className="flex flex-wrap justify-center items-center p-4">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-white hover:text-blue-500 hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#sobre"} className="text-white hover:text-blue-500 hover:underline underline-offset-4">
                Sobre
              </Link>
            </li>
            <li>
              <Link href={"#contato"} className="text-white hover:text-blue-500 hover:underline underline-offset-4">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}