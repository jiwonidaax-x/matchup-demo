"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl font-black italic text-gray-800"
              style={{
                fontFamily: "Noto Sans Extra Condensed, sans-serif",
                fontWeight: "900",
                letterSpacing: "-0.05em",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              MATCH UP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
            >
              소개
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
            >
              문의하기
            </a>
            <Link
              href="/freelancer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
            >
              프리랜서라면?
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="btn-small bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-300">
              출시 기다리기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium px-4 py-2"
              >
                소개
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium px-4 py-2"
              >
                문의하기
              </a>
              <Link
                href="/freelancer"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium px-4 py-2"
              >
                프리랜서라면?
              </Link>
              <div className="px-4 pt-4 border-t border-gray-200">
                <button className="btn-small bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-300 w-full">
                  출시 기다리기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
