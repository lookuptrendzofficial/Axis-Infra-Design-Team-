"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= TOP BAR ================= */}

      <div className="bg-[#F57C00] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between">

          <div className="flex flex-wrap items-center gap-6">

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              <span>Mon - Sat : 9:00 AM - 6:30 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@axisinfra.com</span>
            </div>

          </div>

          <div className="flex items-center gap-2 font-semibold">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>

        </div>
      </div>

      {/* ================= HERO ================= */}

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
          linear-gradient(
          rgba(0,0,0,.72),
          rgba(0,0,0,.55),
          rgba(0,0,0,.75)),
          url('https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260708-WA0203.jpg')
          `,
        }}
      >

        {/* Floating Blur */}

        <div className="absolute inset-0 backdrop-[1px]"></div>

        {/* Decorative Blur Circle */}

        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

        {/* ================= NAVBAR ================= */}

        <header className="absolute top-0 left-0 w-full z-50">

          <div className="max-w-7xl mx-auto px-6 pt-8">

            <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

              <div className="flex items-center justify-between px-8 py-4">

                {/* LOGO */}

                <Link href="/">

                  <img
                    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000008b7482089b081bbdce860ea8.png"
                    alt="Axis Infra"
                    className="h-20 w-auto hover:scale-105 transition duration-500"
                  />

                </Link>

                {/* MENU */}

                <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

                  <Link href="/" className="hover:text-[#F57C00] transition">
                    Home
                  </Link>

                  <Link href="/about" className="hover:text-[#F57C00] transition">
                    About Us
                  </Link>

                  <Link href="/services" className="hover:text-[#F57C00] transition">
                    Our Services
                  </Link>

                  <Link href="/projects" className="hover:text-[#F57C00] transition">
                    Projects
                  </Link>

                  <Link href="/contact" className="hover:text-[#F57C00] transition">
                    Contact Us
                  </Link>

                </nav>

                {/* BUTTON */}

                <button className="hidden lg:flex items-center gap-2 bg-[#F57C00] hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-full font-semibold text-white shadow-xl">

                  Get Quote

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </header>

        {/* ================= HERO CONTENT ================= */}

        <div className="relative z-20 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="grid lg:grid-cols-2 items-center gap-12">

              {/* LEFT */}

              <div className="animate-fadeIn">

                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm text-orange-300 tracking-wide">

                  Premium Architecture & Construction

                </span>

                <h1 className="mt-7 text-6xl lg:text-8xl font-black leading-tight text-white">

                  Building

                  <span className="block text-[#F57C00]">
                    Dream Spaces
                  </span>

                  That Inspire

                </h1>

                <p className="mt-8 text-gray-200 text-xl leading-9 max-w-2xl">

                  We specialize in Architecture, Interior Design,
                  Planning, Construction and Turnkey Solutions with
                  creativity, precision and premium quality.

                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <button className="bg-[#F57C00] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-2xl">

                    Explore Projects

                  </button>

                  <button className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">

                    Contact Us

                  </button>

                </div>

              </div>
                            {/* RIGHT SIDE */}

              <div className="relative hidden lg:flex justify-end">

                {/* Floating Founder Card */}

                <div className="absolute -top-8 -left-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-2xl animate-float">

                  <div className="flex items-center gap-4">

                    <img
                      src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260715-WA0272.jpg"
                      alt="Founder"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#F57C00]"
                    />

                    <div>

                      <h3 className="text-white text-xl font-bold">
                        Kali Prasad
                      </h3>

                      <p className="text-orange-300 text-sm">
                        Founder & Principal Architect
                      </p>

                      <div className="mt-2 flex gap-2">

                        <span className="bg-[#F57C00]/20 text-orange-200 text-xs px-3 py-1 rounded-full">
                          Architect
                        </span>

                        <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                          Planner
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Main Architecture Image */}

                <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.45)] border border-white/10">

                  <img
                    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260708-WA0203.jpg"
                    className="w-[520px] h-[650px] object-cover hover:scale-105 duration-700"
                    alt="Architecture"
                  />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                </div>

              </div>

            </div>

            {/* Floating Statistics */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 hover:-translate-y-2 duration-500">

                <h2 className="text-5xl font-black text-[#F57C00]">
                  500+
                </h2>

                <p className="text-gray-200 mt-2">
                  Completed Projects
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 hover:-translate-y-2 duration-500">

                <h2 className="text-5xl font-black text-[#F57C00]">
                  15+
                </h2>

                <p className="text-gray-200 mt-2">
                  Years Experience
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 hover:-translate-y-2 duration-500">

                <h2 className="text-5xl font-black text-[#F57C00]">
                  98%
                </h2>

                <p className="text-gray-200 mt-2">
                  Client Satisfaction
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 hover:-translate-y-2 duration-500">

                <h2 className="text-5xl font-black text-[#F57C00]">
                  24/7
                </h2>

                <p className="text-gray-200 mt-2">
                  Project Support
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll Down */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

          <ChevronDown
            size={38}
            className="text-white opacity-80"
          />

        </div>

      </section>
      {/* ================= ABOUT US ================= */}

<section className="py-28 bg-white relative overflow-hidden">

  {/* Background Decoration */}

  <div className="absolute -left-32 top-20 w-96 h-96 bg-orange-100 rounded-full blur-[140px]"></div>

  <div className="absolute right-0 bottom-0 w-80 h-80 bg-gray-100 rounded-full blur-[120px]"></div>

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Images */}

      <div className="relative">

        <img
          src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260708-WA0203.jpg"
          className="rounded-[35px] shadow-2xl w-full h-[650px] object-cover hover:scale-[1.02] duration-700"
          alt="Architecture"
        />

        {/* Founder Card */}

        <div className="absolute -bottom-10 -right-6 bg-white rounded-3xl shadow-2xl p-5 border border-orange-100 animate-float">

          <div className="flex items-center gap-4">

            <img
              src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260715-WA0272.jpg"
              className="w-20 h-20 rounded-2xl object-cover"
              alt="Founder"
            />

            <div>

              <h3 className="font-bold text-xl">
                Kali Prasad
              </h3>

              <p className="text-gray-500 text-sm">
                Founder & Principal Architect
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Content */}

      <div>

        <span className="text-[#F57C00] uppercase tracking-[4px] font-semibold">
          About Axis Infra
        </span>

        <h2 className="mt-4 text-5xl font-black text-gray-900 leading-tight">

          Designing Spaces...

          <span className="block text-[#F57C00]">
            Building Trust.
          </span>

        </h2>

        <p className="mt-8 text-gray-600 leading-9 text-lg">

          Axis Infra Design Team delivers innovative architecture,
          interior design, planning and construction solutions with
          a commitment to quality, creativity and timely execution.

          We transform ideas into elegant residential,
          commercial and institutional spaces that reflect
          functionality and modern aesthetics.

        </p>

        {/* Feature Cards */}

        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="bg-orange-50 rounded-3xl p-6 hover:shadow-xl duration-300">

            <h3 className="text-4xl font-black text-[#F57C00]">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Completed Projects
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-6 hover:shadow-xl duration-300">

            <h3 className="text-4xl font-black text-[#F57C00]">
              15+
            </h3>

            <p className="mt-2 text-gray-600">
              Years Experience
            </p>

          </div>

          <div className="bg-gray-100 rounded-3xl p-6 hover:shadow-xl duration-300">

            <h3 className="text-4xl font-black text-[#F57C00]">
              98%
            </h3>

            <p className="mt-2 text-gray-600">
              Happy Clients
            </p>

          </div>

          <div className="bg-orange-50 rounded-3xl p-6 hover:shadow-xl duration-300">

            <h3 className="text-4xl font-black text-[#F57C00]">
              24/7
            </h3>

            <p className="mt-2 text-gray-600">
              Project Support
            </p>

          </div>

        </div>

        <button className="mt-10 bg-[#F57C00] text-white px-8 py-4 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300">

          Learn More →

        </button>

      </div>

    </div>

  </div>

</section>
{/* ================= SERVICES ================= */}

<section className="py-28 bg-[#fafafa] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="text-[#F57C00] uppercase tracking-[4px] font-semibold">
        Our Services
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
        End-to-End Design &
        <span className="text-[#F57C00]"> Construction Solutions</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        From concept to completion, Axis Infra Design Team delivers
        innovative, functional and elegant spaces tailored to your vision.
      </p>

    </div>

    {/* Cards */}

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

      {/* Card 1 */}

      <div className="group rounded-[30px] overflow-hidden bg-white shadow-xl hover:-translate-y-3 duration-500">

        <div className="overflow-hidden h-72">

          <img
            src="YOUR_ARCHITECTURE_IMAGE"
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
            alt=""
          />

        </div>

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

            {/* Replace with your icon image */}
            <img src="YOUR_ICON_1" className="w-8" />

          </div>

          <h3 className="text-2xl font-bold">
            Architecture Design
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Modern residential, commercial and institutional architectural
            planning with creative excellence.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[30px] overflow-hidden bg-white shadow-xl hover:-translate-y-3 duration-500">

        <div className="overflow-hidden h-72">

          <img
            src="YOUR_INTERIOR_IMAGE"
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
            alt=""
          />

        </div>

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

            <img src="YOUR_ICON_2" className="w-8" />

          </div>

          <h3 className="text-2xl font-bold">
            Interior Design
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Elegant interiors designed with premium materials, comfort and
            functionality.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[30px] overflow-hidden bg-white shadow-xl hover:-translate-y-3 duration-500">

        <div className="overflow-hidden h-72">

          <img
            src="YOUR_CONSTRUCTION_IMAGE"
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
            alt=""
          />

        </div>

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

            <img src="YOUR_ICON_3" className="w-8" />

          </div>

          <h3 className="text-2xl font-bold">
            Construction
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Complete turnkey construction with quality workmanship and
            timely project delivery.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    {/* ================= TESTIMONIALS ================= */}

<section className="py-28 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="text-[#F57C00] uppercase tracking-[4px] font-semibold">
        Testimonials
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
        What Our Clients
        <span className="text-[#F57C00]"> Say</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        We believe every successful project starts with trust and ends with customer satisfaction.
      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {/* Card 1 */}

      <div className="group bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

        <div className="text-[#F57C00] text-3xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic">
          "Axis Infra Design Team exceeded our expectations with their creative approach and quality workmanship. The entire process was smooth and professional."
        </p>

        <div className="flex items-center mt-8">

          <div className="w-14 h-14 rounded-full bg-[#F57C00] text-white flex items-center justify-center text-xl font-bold">
            R
          </div>

          <div className="ml-4">
            <h4 className="font-bold text-lg">
              Ramesh Kumar
            </h4>
            <p className="text-gray-500 text-sm">
              Home Owner
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

        <div className="text-[#F57C00] text-3xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic">
          "Professional planning, timely execution and excellent communication. We are extremely happy with the final outcome."
        </p>

        <div className="flex items-center mt-8">

          <div className="w-14 h-14 rounded-full bg-[#F57C00] text-white flex items-center justify-center text-xl font-bold">
            S
          </div>

          <div className="ml-4">
            <h4 className="font-bold text-lg">
              Sowjanya
            </h4>
            <p className="text-gray-500 text-sm">
              Interior Client
            </p>
          </div>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group bg-white border border-gray-100 rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

        <div className="text-[#F57C00] text-3xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-8 italic">
          "Their dedication, attention to detail and quality construction made our dream home a reality. Highly recommended."
        </p>

        <div className="flex items-center mt-8">

          <div className="w-14 h-14 rounded-full bg-[#F57C00] text-white flex items-center justify-center text-xl font-bold">
            V
          </div>

          <div className="ml-4">
            <h4 className="font-bold text-lg">
              Venkatesh Rao
            </h4>
            <p className="text-gray-500 text-sm">
              Residential Client
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= HOW WE WORK ================= */}

<section className="py-28 bg-[#0F172A] text-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="text-[#F57C00] uppercase tracking-[4px] font-semibold">
        Our Process
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black">
        How We
        <span className="text-[#F57C00]"> Work</span>
      </h2>

      <p className="mt-6 text-gray-300 leading-8">
        We follow a structured approach to ensure every project is
        delivered with quality, transparency and attention to detail.
      </p>

    </div>

    {/* Process */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {/* Step 1 */}

      <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 group">

        <div className="w-16 h-16 rounded-full bg-[#F57C00] group-hover:bg-white text-white group-hover:text-[#F57C00] flex items-center justify-center text-2xl font-black mb-6">
          01
        </div>

        <h3 className="text-2xl font-bold">
          Consultation
        </h3>

        <p className="mt-4 text-gray-300 group-hover:text-white leading-8">
          Understanding your vision, requirements, budget and project goals.
        </p>

      </div>

      {/* Step 2 */}

      <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 group">

        <div className="w-16 h-16 rounded-full bg-[#F57C00] group-hover:bg-white text-white group-hover:text-[#F57C00] flex items-center justify-center text-2xl font-black mb-6">
          02
        </div>

        <h3 className="text-2xl font-bold">
          Design & Planning
        </h3>

        <p className="mt-4 text-gray-300 group-hover:text-white leading-8">
          Creating architectural concepts, layouts and detailed planning for approval.
        </p>

      </div>

      {/* Step 3 */}

      <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 group">

        <div className="w-16 h-16 rounded-full bg-[#F57C00] group-hover:bg-white text-white group-hover:text-[#F57C00] flex items-center justify-center text-2xl font-black mb-6">
          03
        </div>

        <h3 className="text-2xl font-bold">
          Execution
        </h3>

        <p className="mt-4 text-gray-300 group-hover:text-white leading-8">
          Professional construction with quality materials and expert supervision.
        </p>

      </div>

      {/* Step 4 */}

      <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-[#F57C00] hover:border-[#F57C00] transition-all duration-500 group">

        <div className="w-16 h-16 rounded-full bg-[#F57C00] group-hover:bg-white text-white group-hover:text-[#F57C00] flex items-center justify-center text-2xl font-black mb-6">
          04
        </div>

        <h3 className="text-2xl font-bold">
          Handover
        </h3>

        <p className="mt-4 text-gray-300 group-hover:text-white leading-8">
          Final quality inspection and on-time project delivery with complete satisfaction.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ================= CALL TO ACTION ================= */}

<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-[40px]">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('YOUR_ARCHITECTURE_IMAGE')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#F57C00]/80" />

      {/* Decorative Blur */}

      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange-400/20 blur-[120px]" />

      <div className="relative z-10 px-8 md:px-16 py-20">

        <div className="max-w-3xl">

          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 font-medium">

            Let's Create Something Extraordinary

          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">

            Let's Build Your
            <span className="block text-[#F57C00]">
              Dream Space
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">

            Whether you're planning a dream home, a commercial space, or a complete interior transformation, our team is ready to turn your vision into reality with innovative design and quality construction.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-[#F57C00] hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-2xl">

              Get Free Consultation

            </button>

            <button className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full">

              View Our Services

            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
   {/* ================= FOOTER ================= */}

<footer className="bg-[#0B0B0B] text-white pt-20 pb-8">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

      {/* Company */}

      <div>

        <img
          src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000008b7482089b081bbdce860ea8.png"
          alt="Axis Infra Design Team"
          className="h-20 mb-6"
        />

        <p className="text-gray-400 leading-8">

          Axis Infra Design Team specializes in Architecture,
          Interior Design, Planning and Construction with
          innovative ideas, premium quality and timely delivery.

        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-bold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Our Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>

        </ul>

      </div>

      {/* Services */}

      <div>

        <h3 className="text-xl font-bold mb-6">
          Our Services
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>Architecture Design</li>
          <li>Interior Design</li>
          <li>Planning</li>
          <li>Construction</li>
          <li>Turnkey Projects</li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-bold mb-6">
          Contact Info
        </h3>

        <div className="space-y-5 text-gray-400">

          <p>📍 Visakhapatnam, Andhra Pradesh</p>

          <p>📞 +91 98765 43210</p>

          <p>✉ info@axisinfra.com</p>

          <p>🕒 Mon - Sat : 9:00 AM - 6:30 PM</p>

        </div>

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-500 text-sm">

        © {new Date().getFullYear()} Axis Infra Design Team. All Rights Reserved.

      </p>

      <div className="flex items-center gap-4">

        <a
          href="#"
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F57C00] duration-300 flex items-center justify-center"
        >
          FB
        </a>

        <a
          href="#"
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F57C00] duration-300 flex items-center justify-center"
        >
          IG
        </a>

        <a
          href="#"
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F57C00] duration-300 flex items-center justify-center"
        >
          IN
        </a>

        <a
          href="#"
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F57C00] duration-300 flex items-center justify-center"
        >
          WA
        </a>

      </div>

    </div>

  </div>

</footer>   
