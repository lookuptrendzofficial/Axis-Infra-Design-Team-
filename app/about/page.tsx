"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Building2,
  Target,
} from "lucide-react";

// ================= IMAGES =================

const logo =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000008b7482089b081bbdce860ea8.png";

const founderImage =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260715-WA0272.jpg";

const architectImage =
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260708-WA0203.jpg";

export default function AboutPage() {
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

        {/* Floating Blur */}

        <div className="absolute top-24 left-10 w-72 h-72 bg-[#F57C00]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F57C00]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT */}

            <div
              className="opacity-0 animate-[fadeUp_.8s_ease_forwards]"
            >

              <span className="inline-block bg-[#F57C00]/20 border border-[#F57C00] text-[#F57C00] px-5 py-2 rounded-full uppercase tracking-widest text-sm font-semibold">

                About Axis Infra

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">

                Creating
                <br />

                Timeless Spaces

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-200 max-w-xl">

                Axis Infra Design Team has been transforming dreams
                into reality for over 25 years through premium
                architecture, innovative interiors and quality
                construction.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  href="/projects"
                  className="bg-[#F57C00] hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
                >

                  Our Projects

                  <ArrowRight size={20} />

                </Link>

                <Link
                  href="/contact"
                  className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold"
                >

                  Contact Us

                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              <div className="absolute w-96 h-96 bg-[#F57C00]/30 blur-3xl rounded-full animate-pulse"></div>

              <div className="overflow-hidden rounded-[35px] shadow-2xl">

                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-[430px] h-[560px] object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="absolute left-0 bottom-10 bg-white rounded-3xl shadow-2xl p-6 animate-bounce">

                <div className="flex items-center gap-4">

                  <Award className="text-[#F57C00]" size={36} />

                  <div>

                    <h3 className="text-4xl font-bold text-[#F57C00]">
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

      {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}

            <div className="relative">

              <div className="overflow-hidden rounded-[35px] shadow-2xl">

                <img
                  src={architectImage}
                  alt="Architect"
                  className="w-full h-[650px] object-cover transition duration-700 hover:scale-110"
                />

              </div>

            </div>

            {/* CONTENT */}

            <div>

              <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">

                Our Story

              </span>

              <h2 className="text-5xl font-bold mt-6">

                Designing Excellence
                <br />

                Since Day One

              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-9">

                Axis Infra Design Team is dedicated to delivering
                innovative architectural solutions, premium interior
                designs and high-quality construction services.
                Every project is carefully planned to combine beauty,
                functionality and long-lasting value.

              </p>

              <p className="mt-6 text-gray-600 text-lg leading-9">

                Guided by visionary leadership and a highly skilled
                team, we continue to create residential, commercial
                and luxury spaces that inspire trust and exceed
                client expectations.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="flex gap-3">

                  <CheckCircle2 className="text-[#F57C00]" />

                  <span>Architecture</span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="text-[#F57C00]" />

                  <span>Construction</span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="text-[#F57C00]" />

                  <span>Luxury Interiors</span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="text-[#F57C00]" />

                  <span>Project Management</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= MISSION & VISION ================= */}

<section className="py-24 bg-[#F8F8F8]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
        Our Purpose
      </span>

      <h2 className="text-5xl font-bold mt-5">
        Mission & Vision
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {/* Mission */}

      <div className="group bg-white rounded-[35px] shadow-xl p-10 border-t-4 border-[#F57C00] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

        <Target
          size={55}
          className="text-[#F57C00]"
        />

        <h3 className="text-3xl font-bold mt-8">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-9 mt-6 text-lg">

          To provide world-class architectural,
          construction and interior solutions through
          innovation, quality workmanship and complete
          customer satisfaction while delivering projects
          on time and within budget.

        </p>

      </div>

      {/* Vision */}

      <div className="group bg-white rounded-[35px] shadow-xl p-10 border-t-4 border-[#F57C00] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

        <Building2
          size={55}
          className="text-[#F57C00]"
        />

        <h3 className="text-3xl font-bold mt-8">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-9 mt-6 text-lg">

          To become one of India's most trusted
          infrastructure and design companies by creating
          inspiring spaces through sustainable architecture,
          modern technology and exceptional craftsmanship.

        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
        Why Choose Us
      </span>

      <h2 className="text-5xl font-bold mt-5">
        Excellence In Every Project
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">

        We combine experience, creativity and engineering
        excellence to deliver projects that exceed
        expectations.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {[
        "25+ Years Experience",
        "250+ Completed Projects",
        "Innovative Architecture",
        "Premium Interior Design",
        "Quality Construction",
        "On-Time Project Delivery",
      ].map((item) => (

        <div
          key={item}
          className="group bg-white rounded-[30px] shadow-xl p-10 hover:bg-[#F57C00] hover:text-white transition-all duration-500 hover:-translate-y-3"
        >

          <CheckCircle2
            size={40}
            className="text-[#F57C00] group-hover:text-white"
          />

          <h3 className="text-2xl font-bold mt-6">
            {item}
          </h3>

          <p className="mt-5 leading-8 text-gray-600 group-hover:text-white">

            Delivering excellence with thoughtful planning,
            innovative design and uncompromising quality.

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= COMPANY STATISTICS ================= */}

<section className="py-24 bg-[#111111]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="text-center">

        <h2 className="text-6xl font-bold text-[#F57C00]">
          250+
        </h2>

        <p className="text-white mt-4 text-lg">
          Projects Completed
        </p>

      </div>

      <div className="text-center">

        <h2 className="text-6xl font-bold text-[#F57C00]">
          25+
        </h2>

        <p className="text-white mt-4 text-lg">
          Years Experience
        </p>

      </div>

      <div className="text-center">

        <h2 className="text-6xl font-bold text-[#F57C00]">
          500+
        </h2>

        <p className="text-white mt-4 text-lg">
          Happy Clients
        </p>

      </div>

      <div className="text-center">

        <h2 className="text-6xl font-bold text-[#F57C00]">
          100%
        </h2>

        <p className="text-white mt-4 text-lg">
          Quality Commitment
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ================= OUR CORE VALUES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
        Core Values
      </span>

      <h2 className="text-5xl font-bold mt-5">
        Principles That Guide Every Project
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">
        Every structure we create is built on strong values that define
        our commitment to excellence.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          title: "Innovation",
          text: "Modern architectural ideas with practical execution.",
        },
        {
          title: "Integrity",
          text: "Transparency and honesty throughout every project.",
        },
        {
          title: "Quality",
          text: "Premium materials and uncompromising workmanship.",
        },
        {
          title: "Customer First",
          text: "Your satisfaction is our highest priority.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="group rounded-[30px] bg-white shadow-xl p-10 hover:bg-[#F57C00] hover:text-white transition-all duration-500 hover:-translate-y-4"
        >

          <h3 className="text-3xl font-bold">
            {item.title}
          </h3>

          <p className="mt-6 leading-8 text-gray-600 group-hover:text-white">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= CLIENT TESTIMONIAL ================= */}

<section className="py-24 bg-[#111111]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
      Client Experience
    </span>

    <h2 className="text-5xl font-bold text-white mt-5">
      What Our Clients Say
    </h2>

    <div className="mt-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-12">

      <p className="text-2xl italic text-gray-200 leading-10">
        "Axis Infra Design Team transformed our vision into reality.
        Their professionalism, creativity, and commitment to quality
        exceeded our expectations."
      </p>

      <h4 className="mt-10 text-[#F57C00] text-2xl font-bold">
        — Happy Client
      </h4>

    </div>

  </div>

</section>
      {/* ================= OUR CORE VALUES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
        Our Core Values
      </span>

      <h2 className="text-5xl font-bold mt-5">
        The Values That Define Us
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">
        Every project we undertake reflects our commitment to quality,
        innovation and customer satisfaction. These values inspire every
        decision we make and every space we create.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {[
        {
          title: "Innovation",
          desc: "We embrace modern ideas, creative thinking and advanced technologies to deliver exceptional architectural solutions.",
        },
        {
          title: "Quality",
          desc: "Every project is executed with premium materials, precision workmanship and uncompromising quality standards.",
        },
        {
          title: "Integrity",
          desc: "Transparency, honesty and ethical business practices are the foundation of every client relationship.",
        },
        {
          title: "Client Satisfaction",
          desc: "Understanding our clients' vision and exceeding expectations is at the heart of everything we do.",
        },
        {
          title: "Sustainability",
          desc: "We promote environmentally responsible designs that are efficient, durable and future-ready.",
        },
        {
          title: "Excellence",
          desc: "We continuously strive to deliver architectural and construction solutions that inspire confidence and admiration.",
        },
      ].map((value) => (

        <div
          key={value.title}
          className="group bg-white rounded-[35px] shadow-xl p-10 border border-gray-100 hover:bg-[#F57C00] hover:-translate-y-4 transition-all duration-500"
        >

          <div className="w-16 h-16 rounded-full bg-[#F57C00]/10 group-hover:bg-white flex items-center justify-center">

            <CheckCircle2
              size={32}
              className="text-[#F57C00] group-hover:text-[#F57C00]"
            />

          </div>

          <h3 className="text-3xl font-bold mt-8 group-hover:text-white">
            {value.title}
          </h3>

          <p className="mt-6 leading-8 text-gray-600 group-hover:text-white">
            {value.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* ================= CLIENT COMMITMENT ================= */}

<section className="py-24 bg-[#111111]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[4px] text-[#F57C00] font-semibold">
      Our Commitment
    </span>

    <h2 className="text-5xl font-bold text-white mt-6">
      Committed To Excellence
    </h2>

    <p className="mt-10 text-xl text-gray-300 leading-10">

      At Axis Infra Design Team, we believe every project is more than
      construction—it is a long-term relationship built on trust,
      transparency and quality. From concept to completion, our team is
      committed to delivering exceptional craftsmanship, innovative
      design and complete client satisfaction.

    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-4xl font-bold text-[#F57C00]">25+</h3>
        <p className="text-white mt-3">Years of Experience</p>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-4xl font-bold text-[#F57C00]">250+</h3>
        <p className="text-white mt-3">Projects Delivered</p>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-4xl font-bold text-[#F57C00]">100%</h3>
        <p className="text-white mt-3">Quality Commitment</p>
      </div>

    </div>

  </div>

</section>

     </main>
);
}
