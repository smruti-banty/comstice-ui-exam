import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <div>
          <Image src="/images/logo.svg" alt="..." width="142" height="30" />
        </div>

        <nav className="max-md:hidden">
          <ul className="flex gap-8">
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Use cases</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div className="max-md:hidden">
          <button className="ring-2 ring-gray-200 rounded py-2 px-4 duration-200 hover:bg-primary hover:text-white">
            Request Demo &rarr;
          </button>
        </div>

        <div className="md:hidden">
          <button className="grid gap-2">
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
