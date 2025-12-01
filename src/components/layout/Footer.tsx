import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-8 text-xs flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} Perfect Art Match Zürich. All rights reserved. | Est. 2017
        </p>
        <p>
          Supporting{" "}
          <Link href="/nph-awareness" className="underline-offset-4 hover:underline">
            NPH Awareness
          </Link>
        </p>
      </div>
    </footer>
  );
}
