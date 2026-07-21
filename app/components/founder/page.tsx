"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
} from "lucide-react";
import {
  Phone,
  Mail,
  Clock3,
  Menu,
  ArrowRight,
  Award,
  Building2,
} from "lucide-react";

// ================= IMAGES =================

const logo =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000008b7482089b081bbdce860ea8.png";

const founderImage =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260715-WA0272.jpg";

const architectImage =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260708-WA0203.jpg";

export default function FounderPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://axisinfradesignteam.com/wp-content/uploads/2026/07/Blog-Banner-for-Website-Content_20260710_105446_0000.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* ================= HEADER ================= */}

        <header className="fixed top-0 left-0 w-full z-50">

          <div className="max-w-7xl mx-auto px-6 pt-6">

            <div className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-full">

              <div className="flex justify-between items-center px-10 py-5">

                <Link href="/">
                  <img
                    src={logo}
                    alt="Axis Infra"
                    className="h-14 w-auto"
                  />
                </Link>

                <nav className="hidden lg:flex items-center gap-10 text-white font-semibold">

                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/architecture">Architecture</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/projects">Projects</Link>
                  <Link
                    href="/founder"
                    className="text-[#F57C00]"
                  >
                    Founder
                  </Link>
                  <Link href="/contact">Contact</Link>

                </nav>

                <Link
                  href="/contact"
                  className="hidden lg:flex bg-[#F57C00] px-6 py-3 rounded-full text-white font-semibold items-center gap-2 hover:bg-orange-600 transition"
                >
                  Get Quote
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </header>

        {/* ================= HERO CONTENT ================= */}

        <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT */}

            <div>

              <span className="inline-block px-5 py-2 rounded-full border border-[#F57C00] bg-[#F57C00]/20 text-[#F57C00] uppercase tracking-widest text-sm font-semibold">
                Meet Our Founder
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Kali Prasad
              </h1>

              <h2 className="mt-4 text-3xl text-[#F57C00] font-semibold">
                Founder & Principal Architect
              </h2>

              <p className="mt-8 text-gray-200 leading-8 text-lg max-w-xl">
                With over 25 years of experience in architecture,
                construction, and interior design, Kali Prasad has
                transformed countless ideas into inspiring spaces through
                innovation, precision, and uncompromising quality.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="bg-[#F57C00] hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
                >
                  Contact Founder
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/projects"
                  className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold"
                >
                  View Projects
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              <div className="absolute w-96 h-96 rounded-full bg-[#F57C00]/30 blur-3xl"></div>

              <img
                src={founderImage}
                alt="Founder"
                className="relative w-[430px] h-[550px] object-cover rounded-[35px] border-4 border-white shadow-2xl"
              />

              {/* EXPERIENCE */}

              <div className="absolute left-0 bottom-10 bg-white rounded-3xl shadow-2xl p-6">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#F57C00] flex items-center justify-center">

                    <Award className="text-white" />

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold text-[#F57C00]">
                      25+
                    </h3>

                    <p className="text-gray-600">
                      Years Experience
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOUNDER & ARCHITECT ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-[#F57C00] uppercase tracking-[4px] font-semibold">
              Leadership Team
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Visionaries Behind Axis Infra
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
              Our leadership combines decades of experience, innovative
              thinking, and a passion for creating timeless architecture
              and exceptional interiors.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Founder */}

            <div className="bg-white rounded-[30px] shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500">

              <img
                src={founderImage}
                alt="Kali Prasad"
                className="w-full h-[480px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-3 text-[#F57C00]">

                  <Building2 size={22} />

                  <span className="font-semibold">
                    Founder & Principal Architect
                  </span>

                </div>

                <h3 className="text-3xl font-bold mt-4">
                  Kali Prasad
                </h3>

                <p className="text-gray-600 leading-8 mt-5">
                  With over 25 years of expertise in architecture,
                  interiors and construction, Kali Prasad continues to
                  lead Axis Infra Design Team with innovation,
                  professionalism and uncompromising quality.
                </p>

              </div>

            </div>

            {/* Architect */}

            <div className="bg-white rounded-[30px] shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500">

              <img
                src={architectImage}
                alt="Ananya"
                className="w-full h-[480px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-3 text-[#F57C00]">

                  <Building2 size={22} />

                  <span className="font-semibold">
                    Architect
                  </span>

                </div>

                <h3 className="text-3xl font-bold mt-4">
                  Ananya
                </h3>

                <p className="text-gray-600 leading-8 mt-5">
                  Ananya brings creativity, modern design thinking and
                  meticulous planning to every project, ensuring that
                  every space is elegant, functional and built to the
                  highest standards.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    {/* ================= FOUNDER'S PHILOSOPHY ================= */}

<section className="py-24 bg-[#111111] relative overflow-hidden">

  <div className="absolute -top-20 -left-20 text-[220px] text-white/5 font-bold">
    "
  </div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

    <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
      Founder Philosophy
    </span>

    <h2 className="text-5xl font-bold text-white mt-6 leading-tight">
      Great Design Begins
      <br />
      With Great Thinking
    </h2>

    <p className="text-gray-300 text-xl leading-10 mt-10 italic">
      "Architecture is more than creating buildings.
      It is about creating experiences, improving lifestyles,
      and designing spaces that inspire people for generations."
    </p>

    <h4 className="mt-10 text-[#F57C00] text-2xl font-bold">
      — Kali Prasad
    </h4>

  </div>

</section>

{/* ================= ACHIEVEMENTS ================= */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
Achievements
</span>

<h2 className="text-5xl font-bold mt-5">
Our Journey In Numbers
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

<div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 transition">

<h3 className="text-6xl font-bold text-[#F57C00]">
250+
</h3>

<p className="mt-4 text-gray-600">
Projects Completed
</p>

</div>

<div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 transition">

<h3 className="text-6xl font-bold text-[#F57C00]">
25+
</h3>

<p className="mt-4 text-gray-600">
Years Experience
</p>

</div>

<div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 transition">

<h3 className="text-6xl font-bold text-[#F57C00]">
100%
</h3>

<p className="mt-4 text-gray-600">
Quality Commitment
</p>

</div>

<div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 transition">

<h3 className="text-6xl font-bold text-[#F57C00]">
500+
</h3>

<p className="mt-4 text-gray-600">
Happy Clients
</p>

</div>

</div>

</div>

</section>

{/* ================= LEADERSHIP VALUES ================= */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
Leadership Values
</span>

<h2 className="text-5xl font-bold mt-5">
What Drives Us
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{[
"Innovation",
"Client Satisfaction",
"Quality Construction",
"Creative Architecture",
"Integrity",
"Sustainable Design",
].map((item)=>(
<div
key={item}
className="rounded-3xl border p-10 hover:bg-[#F57C00] hover:text-white transition duration-300 shadow-lg"
>

<h3 className="text-2xl font-bold">
{item}
</h3>

<p className="mt-5 leading-8 text-gray-600 hover:text-white">
Delivering excellence through thoughtful planning,
premium execution and modern architectural solutions.
</p>

</div>
))}

</div>

</div>

</section>

{/* ================= JOURNEY TIMELINE ================= */}

<section className="py-24 bg-gray-50">

<div className="max-w-5xl mx-auto px-6">

<div className="text-center">

<span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
Our Journey
</span>

<h2 className="text-5xl font-bold mt-5">
Building Excellence Since Day One
</h2>

</div>

<div className="mt-20 space-y-10">

{[
"Founded Axis Infra Design Team",
"Expanded into Architecture & Interiors",
"Successfully Completed 250+ Projects",
"Recognized for Premium Quality Construction",
"Continuing to Build Landmark Projects",
].map((step,index)=>(
<div
key={index}
className="flex gap-6 items-start"
>

<div className="w-14 h-14 rounded-full bg-[#F57C00] text-white flex items-center justify-center font-bold text-xl">
{index+1}
</div>

<div className="bg-white shadow-xl rounded-3xl p-8 flex-1">

<h3 className="text-2xl font-bold">
{step}
</h3>

<p className="text-gray-600 mt-3 leading-8">
A milestone that reflects our commitment towards
quality, innovation and customer satisfaction.
</p>

</div>

</div>
))}

</div>

</div>

</section>
      {/* ================= CALL TO ACTION ================= */}

<section className="relative py-28 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#1b1b1b] to-[#F57C00]"></div>

  <div className="absolute -top-40 -right-32 w-[450px] h-[450px] rounded-full bg-[#F57C00]/20 blur-3xl"></div>

  <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-white/10 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 lg:p-20">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <div>

          <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
            Let's Build Together
          </span>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white mt-6 leading-tight">
            Your Dream Project
            <br />
            Starts Here.
          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9 max-w-xl">
            Whether you're planning a modern residence,
            luxury interiors or commercial development,
            our experienced team is ready to bring your
            vision to life with innovative design and
            uncompromising quality.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/contact"
              className="bg-[#F57C00] hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/projects"
              className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
            >
              Explore Projects
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src={founderImage}
            alt="Founder"
            className="w-[420px] rounded-[35px] shadow-2xl border-4 border-white object-cover"
          />

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CONTACT STRIP ================= */}

<section className="bg-[#F57C00] py-16">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-10 text-center text-white">

      <div>

        <Phone className="mx-auto mb-5" size={34} />

        <h3 className="text-2xl font-bold">
          Call Us
        </h3>

        <p className="mt-3 text-white/90">
          +91 98765 43210
        </p>

      </div>

      <div>

        <Mail className="mx-auto mb-5" size={34} />

        <h3 className="text-2xl font-bold">
          Email
        </h3>

        <p className="mt-3 text-white/90">
          info@axisinfra.com
        </p>

      </div>

      <div>

        <Clock3 className="mx-auto mb-5" size={34} />

        <h3 className="text-2xl font-bold">
          Working Hours
        </h3>

        <p className="mt-3 text-white/90">
          Monday – Saturday
          <br />
          9:00 AM – 6:30 PM
        </p>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}
{/* ================= END OF PAGE ================= */}
