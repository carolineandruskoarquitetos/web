"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, Suspense } from "react";
import { InstagramLink } from "./instagram-link";

const navigation = [
  { name: "EQUIPE", href: "/equipe" },
  { name: "RESIDENCIAL", href: "/projetos?categoria=residencial" },
  {
    name: "COMERCIAL/CORPORATIVO",
    href: "/projetos?categoria=comercial_e_corporativo",
  },
  { name: "MOSTRAS", href: "/projetos?categoria=mostras" },
  { name: "CONTATO", href: "/contato" },
];

// Split the header content into a separate client component
function HeaderContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria");

  const getLinkClassName = useCallback(
    (href: string) => {
      // For links with query parameters (e.g., /projetos?categoria=residencial)
      if (href.includes("?")) {
        const [, queryString] = href.split("?");
        const linkParams = new URLSearchParams(queryString);
        const linkCategoria = linkParams.get("categoria");

        // Link is active if:
        // 1. We're on the same base path (/projetos)
        // 2. The categoria parameter matches
        const isActive =
          pathname === "/projetos" && categoria === linkCategoria;

        return `${isActive ? "font-semibold" : "font-normal"}`;
      }

      // For regular links without query parameters
      const isActive = pathname === href;
      return `${isActive ? "font-semibold" : "font-normal"}`;
    },
    [categoria, pathname]
  );

  return (
    <header className="bg-stone-50 fixed top-0 z-50 w-full border-b font">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="pe-4">
            <Image
              src="/logos/caroline-andrusko.png"
              alt="Caroline Andrusko"
              width={140}
              height={140}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="text-xs hidden md:flex items-center gap-2 lg:gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`md:tracking-[.2em] lg:tracking-[.3em] xl:tracking-[.4em] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-current transition-all after:duration-500 after:ease-out hover:after:w-full after:w-0 after:content-[''] ${getLinkClassName(
                    item.href
                  )}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <InstagramLink />
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation */}
          <>
            {/* Backdrop with blur */}
            <div
              className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{ top: "4rem" }} // Adjust based on your header height
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Navigation Menu */}
            <div
              className={`absolute top-16 left-0 right-0 bg-slate-50 border-b md:hidden transform transition-all duration-300 ease-in-out z-50 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col px-4 py-2">
                {navigation.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link
                      href={item.href}
                      className={`text-md relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-current transition-all after:duration-500 after:ease-out hover:after:w-full after:w-0 after:content-[''] ${getLinkClassName(
                        item.href
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="w-full py-5 flex justify-start">
                  <InstagramLink />
                </li>
              </ul>
            </div>
          </>
        </nav>
      </div>
    </header>
  );
}

// Main Header component that includes the Suspense boundary
export function Header() {
  return (
    <Suspense
      fallback={
        // You can customize this loading state
        <header className="bg-stone-50 fixed top-0 z-50 w-full border-b font">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <nav className="flex h-16 items-center justify-between">
              <div className="text-xl font-semibold uppercase tracking-widest">
                Caroline Andrusko
              </div>
            </nav>
          </div>
        </header>
      }
    >
      <HeaderContent />
    </Suspense>
  );
}
