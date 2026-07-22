
"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Clock3,
  Menu,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">

      {/* ================= TOP BAR ================= */}


      {/* ================= HERO SECTION ================= */}

      <section
        className="relative min-h-screen bg-cover bg-center pt-36"
        style={{
          backgroundImage:
            "url('https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_00000000cae87208a5c541bdaced9bac.png')",
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60"></div>

        {/* ================= HEADER ================= */}

        <header className="fixed top-0 left-0 w-full z-[100]">

          <div className="max-w-7xl mx-auto px-6 pt-6">

            <div className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-full shadow-xl">

              <div className="flex items-center justify-between px-10 py-5">

                {/* LOGO */}

                <Link href="/" className="flex items-center">

                  <img
                    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Ishanvi-logo_20260721_134437_0000.png"
                    alt="Axis Infra"
                    className="h-14 w-auto"
                  />

                </Link>

                {/* DESKTOP MENU */}

                <nav className="hidden lg:flex items-center gap-10 text-white text-[16px] font-semibold">

                  <Link
                    href="/"
                    className="hover:text-[#F57C00] transition"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="hover:text-[#F57C00] transition"
                  >
                    About
                  </Link>

                  <Link
                    href="/services"
                    className="hover:text-[#F57C00] transition"
                  >
                    Services
                  </Link>

                  <Link
                    href="/projects"
                    className="hover:text-[#F57C00] transition"
                  >
                    Projects
                  </Link>

                  <Link
                    href="/founder"
                    className="hover:text-[#F57C00] transition"
                  >
                    Founder
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-[#F57C00] transition"
                  >
                    Contact
                  </Link>

                </nav>

                {/* RIGHT SIDE */}

                <div className="flex items-center gap-4">

                  <button className="hidden lg:flex bg-[#F57C00] hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold text-white items-center gap-2">

                    Get Quote

                    <ArrowRight size={18} />

                  </button>

                  {/* MOBILE MENU */}

                  <button className="lg:hidden text-white">

                    <Menu size={30} />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </header>

        {/* ================= HERO CONTENT STARTS HERE ================= */}

        {/* ================= HERO CONTENT STARTS HERE ================= */}

<div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

    {/* ================= LEFT CONTENT ================= */}

    <div>

      <span className="inline-block bg-[#F57C00]/20 border border-[#F57C00] text-[#F57C00] px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
        Axis Infra Design Team
      </span>

      <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
        Building Spaces
        <br />
        That Inspire
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#F57C00]">
        Architecture • Interiors • Construction
      </h2>

      <p className="mt-8 text-lg text-gray-200 leading-8 max-w-2xl">
        We design premium residential, commercial and luxury interior
        spaces with innovative architecture, quality construction and
        timeless aesthetics. Every project is crafted with precision,
        creativity and excellence.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          href="/projects"
          className="bg-[#F57C00] hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
        >
          View Projects
          <ArrowRight size={20} />
        </Link>

        <Link
          href="/contact"
          className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold"
        >
          Contact Us
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6">

          <h3 className="text-4xl font-bold text-[#F57C00]">
            250+
          </h3>

          <p className="text-white mt-2">
            Projects Completed
          </p>

        </div>

        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6">

          <h3 className="text-4xl font-bold text-[#F57C00]">
            25+
          </h3>

          <p className="text-white mt-2">
            Years Experience
          </p>

        </div>

        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6">

          <h3 className="text-4xl font-bold text-[#F57C00]">
            100%
          </h3>

          <p className="text-white mt-2">
            Quality Assurance
          </p>

        </div>

      </div>

    </div>

    {/* ================= RIGHT BIG TRANSPARENT LOGO ================= */}

    <div className="hidden lg:flex justify-center items-center relative">

      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#F57C00]/10 blur-3xl animate-pulse"></div>

      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Ishanvi-logo_20260722_174614_0000.png"
        alt="Axis Infra Design Team"
        className="relative w-[520px] xl:w-[650px] opacity-90 drop-shadow-[0_0_40px_rgba(245,124,0,0.35)] animate-float-logo"
      />

    </div>

  </div>

</div>

      </section>

      {/* ================= ABOUT US STARTS HERE ================= */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {/* ================= ABOUT US ================= */}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <section className="bg-white py-24">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="max-w-7xl mx-auto px-6">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {/* Left Image */}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="relative">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="absolute -top-5 -left-5 w-full h-full border-4 border-[#F57C00] rounded-3xl"></div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <img
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG_20260722_165447.jpg"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        alt="Axis Infra"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[650px]"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {/* Right Content */}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="uppercase tracking-[4px] text-[#F57C00] font-bold mb-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              About Axis Infra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        We Build Better Spaces
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            With Smart Engineering

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </h2>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="w-24 h-1 bg-[#F57C00] mt-6 mb-8 rounded-full"></div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-gray-600 text-lg leading-9">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Axis Infra is a trusted engineering and construction consultancy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        delivering innovative architectural planning, structural design,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  building permissions and project execution.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Our experienced professionals focus on quality, transparency and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      timely delivery while transforming ideas into exceptional spaces.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="grid grid-cols-2 gap-6 mt-12">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-4xl font-bold text-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          25+

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="mt-2 text-gray-700 font-medium">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Years Experience

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-4xl font-bold text-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          1000+

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="mt-2 text-gray-700 font-medium">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Projects Delivered

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-4xl font-bold text-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          100%

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="mt-2 text-gray-700 font-medium">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Approval Support

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-4xl font-bold text-[#F57C00]">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          24/7

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="mt-2 text-gray-700 font-medium">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Client Assistance

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <button className="mt-12 bg-[#F57C00] hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Learn More

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </section>
           {/* ================= OUR SERVICES ================= */}

<section className="py-24 bg-[#fafafa]">

<div className="max-w-7xl mx-auto px-6">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-[#F57C00] font-semibold">
      WHAT WE OFFER
    </p>

    <h2 className="text-5xl font-bold text-gray-900 mt-3">
      Our Services
    </h2>

    <div className="w-24 h-1 bg-[#F57C00] mx-auto rounded-full mt-5 mb-6"></div>

    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
      Comprehensive engineering, architectural and approval solutions for
      residential, commercial and industrial developments.
    </p>

  </div>

  <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">

    {/* Card 1 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/5_20260722_172137_0000.png" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Online Building Plan Approvals
      </h3>

      <p className="text-gray-600 leading-8">
        Complete building plan approval services for all types of projects
        from <strong>GVMC, VMRDA, VK-PCPIR</strong> and other local
        authorities.
      </p>

    </div>

    {/* Card 2 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_2" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Architectural Design
      </h3>

      <p className="text-gray-600 leading-8">
        Creative, functional and Vastu-compliant architectural designs
        tailored to your vision and project requirements.
      </p>

    </div>

    {/* Card 3 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_3" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Structural Design
      </h3>

      <p className="text-gray-600 leading-8">
        Safe, durable and cost-effective structural engineering solutions
        for residential, commercial and industrial buildings.
      </p>

    </div>

    {/* Card 4 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_4" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Fire & Safety Consultancy
      </h3>

      <p className="text-gray-600 leading-8">
        Fire safety design, system planning, installation guidance and Fire
        NOC approvals for all types of buildings.
      </p>

    </div>

    {/* Card 5 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_5" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Mixed Development
      </h3>

      <p className="text-gray-600 leading-8">
        Planning, design and approval services for mixed-use developments,
        townships and high-rise residential & commercial buildings.
      </p>

    </div>

    {/* Card 6 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_6" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        CRZ Clearance (NOC)
      </h3>

      <p className="text-gray-600 leading-8">
        Professional assistance in obtaining CRZ (Coastal Regulation Zone)
        NOC approvals within applicable coastal regulations.
      </p>

    </div>

    {/* Card 7 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Ishanvi-logo_20260722_172304_0000.png" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Transferable Development Rights (TDR)
      </h3>

      <p className="text-gray-600 leading-8">
        End-to-end assistance for TDR applications, bond processing, sales
        and purchase documentation.
      </p>

    </div>

    {/* Card 8 */}

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">

      <img src="ICON_LINK_8" className="w-16 h-16 mb-6" alt="" />

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        STP (Sewage Treatment Plant)
      </h3>

      <p className="text-gray-600 leading-8">
        Design and consultancy for Sewage Treatment Plants (STP), ensuring
        efficient wastewater treatment and environmental compliance.
      </p>

    </div>

  </div>

</div>

</section>
                {/* View All Services Button */}

<div className="flex justify-center mt-16">

<a
  href="/services"
  className="inline-flex items-center gap-3 bg-[#F57C00] hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
>
  View All Services

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>

</a>

</div>
{/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}

      <div>

        <p className="uppercase tracking-[5px] text-[#F57C00] font-semibold">
          WHY CHOOSE AXIS INFRA
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mt-3">
          Building Excellence
          <br />
          With Trust & Quality
        </h2>

        <div className="w-24 h-1 bg-[#F57C00] rounded-full mt-6 mb-10"></div>

        <div className="space-y-6">

          {[
            "Planning & Designing",
            "Structural & Architectural Excellence",
            "Premium Quality Materials & Workmanship",
            "Timely Project Delivery",
            "Budget-Friendly Solutions",
            "Customer Satisfaction is Our Priority",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-lg p-5 border border-orange-100 hover:shadow-2xl transition duration-300"
            >

              <div className="w-14 h-14 rounded-full bg-[#F57C00] flex items-center justify-center text-white text-2xl font-bold">

                ✓

              </div>

              <h3 className="text-xl font-semibold text-gray-800">

                {item}

              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Right Image */}

      <div>

        <img
          src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Screenshot_2026-07-22-16-58-37-59_c37d74246d9c81aa0bb824b57eaf7062.jpg"
          alt="Why Choose Axis Infra"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />

      </div>

    </div>

  </div>

</section>
{/* ================= TESTIMONIALS ================= */}

<section className="py-24 bg-gradient-to-br from-orange-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#F57C00] font-semibold">
        CLIENT TESTIMONIALS
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mt-3">
        What Our Clients Say
      </h2>

      <div className="w-24 h-1 bg-[#F57C00] rounded-full mx-auto mt-5 mb-6"></div>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Customer satisfaction is the foundation of everything we build.
      </p>

    </div>

    {/* Cards */}

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#F57C00] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl text-[#F57C00] mb-5">
          ❝
        </div>

        <p className="text-gray-600 leading-8 italic">
          Axis Infra provided outstanding architectural planning and building
          approval support. The entire process was smooth and professional.
        </p>

        <div className="mt-8 text-[#F57C00] text-xl">
          ★★★★★
        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-[#F57C00] rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl mb-5">
          ❝
        </div>

        <p className="leading-8 italic">
          Excellent structural design, transparent communication and timely
          approvals. Highly recommended for residential and commercial
          projects.
        </p>

        <div className="mt-8 text-yellow-300 text-xl">
          ★★★★★
        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#F57C00] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="text-5xl text-[#F57C00] mb-5">
          ❝
        </div>

        <p className="text-gray-600 leading-8 italic">
          Their engineering expertise and commitment to quality helped us
          complete our project successfully within budget.
        </p>

        <div className="mt-8 text-[#F57C00] text-xl">
          ★★★★★
        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= CALL TO ACTION ================= */}

<section className="py-24 px-6">

  <div
    className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative bg-cover bg-center"
    style={{
      backgroundImage:
        "url('CTA_BACKGROUND_IMAGE_LINK')",
    }}
  >

    {/* Overlay */}

    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative z-10 px-10 lg:px-20 py-20 text-center">

      <p className="uppercase tracking-[5px] text-[#F57C00] font-semibold">

        START YOUR PROJECT TODAY

      </p>

      <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 leading-tight">

        Ready To Build Your
        <br />

        Dream Space?

      </h2>

      <p className="text-gray-200 text-lg max-w-3xl mx-auto mt-8 leading-8">

        From Building Plan Approvals and Architectural Design to Structural
        Engineering and Construction Consultancy, Axis Infra provides complete
        engineering solutions under one roof.

      </p>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

        <a
          href="tel:+919876543210"
          className="bg-[#F57C00] hover:bg-orange-600 transition px-10 py-5 rounded-full text-white font-bold shadow-xl"
        >

          📞 Call Now

        </a>

      

                      Customer Support

                              

                                        </div>

                                              </div>

                                                  </div>

                                      

                                                    </section>
    {/* ================= FAQ ================= */}

<section className="py-24 bg-[#fafafa]">

<div className="max-w-5xl mx-auto px-6">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-[#F57C00] font-semibold">
      FREQUENTLY ASKED QUESTIONS
    </p>

    <h2 className="text-5xl font-bold text-gray-900 mt-3">
      Got Questions?
    </h2>

    <div className="w-24 h-1 bg-[#F57C00] rounded-full mx-auto mt-5 mb-6"></div>

    <p className="text-gray-600 text-lg">
      Find answers to the most common questions about our engineering and
      construction services.
    </p>

  </div>

  <div className="space-y-5">

    <details className="bg-white rounded-2xl shadow-lg p-6 group">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you provide building plan approvals?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We provide complete building plan approval services through
        GVMC, VMRDA, VK-PCPIR and other local authorities.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you offer architectural and structural design?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We deliver customized architectural planning, structural
        engineering and Vastu-compliant designs.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Can you help with Fire NOC approvals?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We assist in fire safety design, documentation and obtaining
        Fire Department NOC approvals.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you handle CRZ clearance?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We provide consultancy and documentation support for CRZ NOC
        approvals.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you work on residential and commercial projects?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We undertake residential, commercial, industrial and mixed-use
        developments.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you provide TDR services?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We assist with TDR applications, documentation, bond sales and
        purchase processes.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        Do you design STP systems?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Yes. We provide design and consultancy for Sewage Treatment Plants
        that comply with environmental standards.
      </p>
    </details>

    <details className="bg-white rounded-2xl shadow-lg p-6">
      <summary className="font-semibold text-lg cursor-pointer">
        How can I get a consultation?
      </summary>
      <p className="mt-4 text-gray-600 leading-8">
        Simply call us, send a WhatsApp message, or use the Contact Form to
        schedule your consultation.
      </p>
    </details>

  </div>

</div>

</section> 
  {/* ================= FOOTER ================= */}

  <footer className="bg-[#111827] text-white pt-20">

    <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

              {/* Company */}

                    <div>

                            <img
                                      src="https://axisinfradesignteam.com/wp-content/uploads/2026/07/1_20260710_121127_0000.png"
                                                alt="Axis Infra Logo"
                                                          className="h-20 w-auto mb-6"
                                                                  />

                                                                          <h3 className="text-2xl font-bold text-white">
                                                                                    Let's Build Your Dream Space
                                                                                            </h3>

                                                                                                    <p className="text-gray-300 mt-5 leading-8">
                                                                                                              Axis Infra delivers complete engineering solutions including
                                                                                                                        Building Plan Approvals, Architectural Design, Structural Design,
                                                                                                                                  Fire & Safety Consultancy, CRZ Clearance, TDR Services and STP
                                                                                                                                            Consultancy with quality and commitment.
                                                                                                                                                    </p>

                                                                                                                                                            {/* Social */}

                                                                                                                                                                    <div className="flex gap-4 mt-8">

                                                                                                                                                                              <a href="#" className="w-11 h-11 rounded-full bg-[#F57C00] hover:bg-orange-600 flex items-center justify-center transition">FB</a>

                                                                                                                                                                                        <a href="#" className="w-11 h-11 rounded-full bg-[#F57C00] hover:bg-orange-600 flex items-center justify-center transition">IG</a>

                                                                                                                                                                                                  <a href="#" className="w-11 h-11 rounded-full bg-[#F57C00] hover:bg-orange-600 flex items-center justify-center transition">IN</a>

                                                                                                                                                                                                            <a href="#" className="w-11 h-11 rounded-full bg-[#F57C00] hover:bg-orange-600 flex items-center justify-center transition">YT</a>

                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                {/* Quick Links */}

                                                                                                                                                                                                                                      <div>

                                                                                                                                                                                                                                              <h3 className="text-2xl font-bold mb-6 text-white">
                                                                                                                                                                                                                                                        Quick Links
                                                                                                                                                                                                                                                                </h3>

                                                                                                                                                                                                                                                                        <ul className="space-y-4 text-gray-300">

                                                                                                                                                                                                                                                                                  <li><a href="/" className="hover:text-[#F57C00] transition">Home</a></li>

                                                                                                                                                                                                                                                                                            <li><a href="/about" className="hover:text-[#F57C00] transition">About Us</a></li>

                                                                                                                                                                                                                                                                                                      <li><a href="/services" className="hover:text-[#F57C00] transition">Services</a></li>

                                                                                                                                                                                                                                                                                                                <li><a href="/projects" className="hover:text-[#F57C00] transition">Projects</a></li>

                                                                                                                                                                                                                                                                                                                          <li><a href="/contact" className="hover:text-[#F57C00] transition">Contact Us</a></li>

                                                                                                                                                                                                                                                                                                                                  </ul>

                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                              {/* Services */}

                                                                                                                                                                                                                                                                                                                                                    <div>

                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-2xl font-bold mb-6 text-white">
                                                                                                                                                                                                                                                                                                                                                                      Our Services
                                                                                                                                                                                                                                                                                                                                                                              </h3>

                                                                                                                                                                                                                                                                                                                                                                                      <ul className="space-y-4 text-gray-300">

                                                                                                                                                                                                                                                                                                                                                                                                <li>Building Plan Approvals</li>

                                                                                                                                                                                                                                                                                                                                                                                                          <li>Architectural Design</li>

                                                                                                                                                                                                                                                                                                                                                                                                                    <li>Structural Design</li>

                                                                                                                                                                                                                                                                                                                                                                                                                              <li>Fire & Safety Consultancy</li>

                                                                                                                                                                                                                                                                                                                                                                                                                                        <li>Mixed Development</li>

                                                                                                                                                                                                                                                                                                                                                                                                                                                  <li>CRZ Clearance</li>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li>TDR Services</li>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <li>STP Consultancy</li>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </ul>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {/* Contact */}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3 className="text-2xl font-bold mb-6 text-white">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Contact Us
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="space-y-5 text-gray-300 leading-7">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        📍 Visakhapatnam,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Andhra Pradesh
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                📞 +91 98765 43210
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ✉️ info@axisinfra.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                🕒 Mon - Sat
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        9:00 AM - 6:30 PM
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {/* Bottom Line */}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="border-t border-gray-700 mt-16 pt-8 pb-8">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-gray-400 text-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    © 2026 <span className="text-white font-semibold">Axis Infra.</span> All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-gray-400 text-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Designed & Developed by{" "}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    href="https://lookuptrendz.com"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                target="_blank"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="text-[#F57C00] font-semibold hover:text-orange-400 transition"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Lookuptrendz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </footer>                                            
          </main>
            );
            }
