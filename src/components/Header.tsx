'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold hover:text-blue-100 transition-colors">
            Privacy-First Password Generator
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-100 transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
