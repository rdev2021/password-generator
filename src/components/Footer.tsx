"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              &copy; {currentYear} Privacy-First Password Generator
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/rdev2021/password-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
            {process.env.NEXT_PUBLIC_GIT_HASH?.slice(0, 7)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
