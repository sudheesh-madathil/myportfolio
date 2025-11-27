import React, { useState, useEffect } from "react";
import "./Navbar.css";

/**
 * Simple accessible navbar with desktop links and a mobile hamburger.
 * - Uses smooth scroll to sections by id
 * - Closes mobile menu when link clicked or on Escape
 * - Adds aria attributes for screen readers
 */

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Close on Escape
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    // Add shadow when page scrolled
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="brand" onClick={() => handleNav("home")} role="button" tabIndex={0} aria-label="Go to home">
          &lt;MERN /&gt;
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary navigation">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className="nav-link" onClick={() => handleNav(n.id)}>
              {n.label}
            </button>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => { e.preventDefault(); handleNav("contact"); }}>
          Contact Me
          </a>
        </nav>

        {/* Mobile */}
        <div className="nav-mobile">
          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-panel ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-panel-inner">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className="mobile-link" onClick={() => handleNav(n.id)}>
              {n.label}
            </button>
          ))}
          <a href="#contact" className="btn btn-primary mobile-cta" onClick={(e) => { e.preventDefault(); handleNav("contact"); }}>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
