import Link from "next/link";
import InstagramIcon from "./icons/instagram";

const INSTAGRAM_URL = "https://www.instagram.com/carolineandrusko/";

export function InstagramLink() {
  return (
    <Link
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-stone-600 hover:text-stone-900 transition-colors w-fit"
    >
      <InstagramIcon />
    </Link>
  );
}
