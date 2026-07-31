"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2E63] via-[#15458A] to-[#1E63C4] text-white py-28">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-400 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-5">
              AXIS DESIGN TEAM
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">

              Engineering &
              <br />
              Architectural
              <span className="text-[#F57C00]"> Services</span>

            </h1>

            <p className="text-xl leading-10 text-gray-200 max-w-3xl">

              We provide complete engineering, architectural,
              structural design and government approval services
              for residential, commercial and industrial projects.

              With over <strong>25+ years of experience</strong>,
              Axis Design Team delivers reliable, innovative and
              regulation-compliant solutions from concept to completion.

            </p>

            <div className="flex flex-wrap gap-6 mt-12">

              <a
                href="tel:9441228889"
                className="inline-flex items-center gap-3 bg-[#F57C00] hover:bg-orange-600 px-8 py-5 rounded-full font-semibold text-lg transition duration-300 shadow-xl"
              >
                <Phone size={22} />
                Call +91 94412 28889
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border-2 border-white hover:bg-white hover:text-[#0B2E63] px-8 py-5 rounded-full font-semibold text-lg transition duration-300"
              >
                Get Free Consultation
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-[#F57C00] font-bold">
              OUR EXPERTISE
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-5">

              Complete Engineering
              <br />
              Solutions Under One Roof

            </h2>

            <div className="w-28 h-1.5 bg-[#F57C00] rounded-full mx-auto mt-7"></div>

          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
                alt="Engineering Services"
                className="rounded-[35px] shadow-2xl w-full object-cover"
              />

            </div>

            <div>

              <h3 className="text-4xl font-bold text-gray-900 mb-8">

                Planning Every Project with Precision

              </h3>

              <p className="text-gray-600 text-lg leading-9 mb-8">

                Every successful building begins with proper planning,
                technical expertise and regulatory compliance.

                Our multidisciplinary team of architects, engineers and
                consultants ensures every project is aesthetically
                appealing, structurally sound and fully compliant with
                government regulations.

              </p>

              <div className="space-y-5">

                {[
                  "25+ Years of Industry Experience",
                  "Government Approval Specialists",
                  "Architectural & Structural Experts",
                  "Residential, Commercial & Industrial Projects",
                  "End-to-End Project Consultancy",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={26}
                    />

                    <span className="text-lg text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICE 1 ================= */}

      <section className="py-24 bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/5_20260722_172137_0000.png"
                alt="Building Plan Approval"
                className="w-72 mx-auto"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">

                SERVICE 01

              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Online Building
                <br />
                Plan Approvals

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Navigating government approval procedures can be complex
                and time-consuming. Our experienced professionals handle
                the complete approval process—from preparing technical
                drawings and documentation to coordinating with the
                relevant authorities—ensuring a smooth and hassle-free
                experience.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                We assist with approvals from GVMC, VMRDA, VK-PCPIR
                and other statutory bodies while ensuring your project
                complies with all applicable building regulations and
                development norms.

              </p>
                            <div className="grid md:grid-cols-2 gap-5 mb-12">

                {[
                  "GVMC Building Approvals",
                  "VMRDA Approvals",
                  "VK-PCPIR Approvals",
                  "Building Permit Drawings",
                  "Layout Approvals",
                  "Government Liaison",
                  "Documentation Support",
                  "Site Verification",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md"
                  >
                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <a
                href="tel:9441228889"
                className="inline-flex items-center gap-3 bg-[#F57C00] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
              >
                <Phone size={20} />
                Talk to Our Expert
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICE 02 ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">

                SERVICE 02

              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Architectural
                <br />
                Design

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Great architecture is more than just attractive
                buildings—it's about creating spaces that are functional,
                sustainable and timeless. At Axis Design Team, we combine
                creativity with technical expertise to deliver designs that
                perfectly match your vision, lifestyle and budget.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Whether it's an individual residence, villa, apartment,
                commercial complex or industrial project, every design is
                carefully planned to maximize aesthetics, space utilization,
                natural lighting and long-term value.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Residential Design",
                  "Commercial Buildings",
                  "Luxury Villas",
                  "Apartment Planning",
                  "Office Buildings",
                  "3D Elevation Design",
                  "Interior Space Planning",
                  "Vastu Consultation",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#fafafa] rounded-2xl p-5 border border-gray-100"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <img
                src="ICON_LINK_2"
                alt="Architectural Design"
                className="w-80 mx-auto"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= SERVICE 03 ================= */}

      <section className="py-24 bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src="ICON_LINK_3"
                alt="Structural Design"
                className="w-80 mx-auto"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">
                SERVICE 03
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Structural
                <br />
                Design

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Every building deserves a strong foundation and a safe
                structural system. Our structural engineering team
                develops economical, durable and earthquake-resistant
                designs that comply with the latest Indian Standards
                and engineering practices.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                From residential homes to commercial complexes,
                industrial buildings and high-rise structures,
                we deliver structural solutions that ensure
                safety, stability and long-term performance.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "RCC Structural Design",
                  "Steel Structure Design",
                  "Industrial Buildings",
                  "Foundation Design",
                  "Structural Analysis",
                  "Retrofitting Solutions",
                  "Detailed Structural Drawings",
                  "BOQ Preparation",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICE 04 ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">

                SERVICE 04

              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Fire &
                <br />
                Safety Consultancy

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Fire safety is an essential requirement for
                commercial, industrial and high-rise developments.
                Our experts provide comprehensive consultancy to
                ensure your project meets all fire safety norms
                and statutory regulations.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                From fire protection system planning to obtaining
                Fire NOC approvals, we guide you through every
                stage with technically sound and compliant
                engineering solutions.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Fire NOC Approvals",
                  "Fire Fighting Systems",
                  "Hydrant System Design",
                  "Sprinkler Systems",
                  "Fire Alarm Systems",
                  "Fire Safety Drawings",
                  "Compliance Reports",
                  "Technical Consultancy",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#fafafa] rounded-2xl p-5 border border-gray-100"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <img
                src="ICON_LINK_4"
                alt="Fire & Safety Consultancy"
                className="w-80 mx-auto"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= SERVICE 05 ================= */}

      <section className="py-24 bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src="ICON_LINK_5"
                alt="Mixed Development"
                className="w-80 mx-auto"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">
                SERVICE 05
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Mixed
                <br />
                Development

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Mixed-use developments require careful planning,
                coordination and technical expertise. We provide
                complete architectural, engineering and approval
                services for projects that combine residential,
                commercial, retail and recreational spaces into one
                integrated development.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Our team focuses on efficient land utilization,
                sustainable planning, traffic circulation,
                infrastructure integration and regulatory compliance
                to create vibrant developments that offer long-term
                value for developers, investors and communities.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Township Planning",
                  "Commercial Complexes",
                  "Shopping Malls",
                  "High-Rise Developments",
                  "Residential Communities",
                  "Master Planning",
                  "Infrastructure Planning",
                  "Government Approvals",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICE 06 ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">
                SERVICE 06
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                CRZ Clearance
                <br />
                (NOC)

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Construction projects located near coastal regions
                require approvals under the Coastal Regulation Zone
                (CRZ) guidelines. Our experienced consultants provide
                complete assistance in securing CRZ permissions while
                ensuring compliance with environmental regulations.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                We coordinate with the concerned authorities,
                prepare all required documentation and support
                clients throughout the approval process, reducing
                delays and helping projects move forward smoothly.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "CRZ Mapping",
                  "CRZ Documentation",
                  "Environmental Compliance",
                  "Coastal Authority Approvals",
                  "NOC Assistance",
                  "Technical Reports",
                  "Project Coordination",
                  "Approval Support",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#fafafa] rounded-2xl p-5 border border-gray-100"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <img
                src="ICON_LINK_6"
                alt="CRZ Clearance"
                className="w-80 mx-auto"
              />

            </div>

          </div>

        </div>

      </section>

            {/* ================= SERVICE 07 ================= */}

      <section className="py-24 bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Ishanvi-logo_20260722_172304_0000.png"
                alt="Transferable Development Rights"
                className="w-80 mx-auto"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">
                SERVICE 07
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                Transferable
                <br />
                Development Rights (TDR)

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Transferable Development Rights (TDR) allow property
                owners and developers to utilize or transfer development
                potential as permitted by planning authorities. Our
                specialists provide complete guidance throughout the
                entire TDR process, ensuring transparency and regulatory
                compliance.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                From documentation and bond processing to valuation,
                transfer and coordination with government authorities,
                we simplify every step so you can complete transactions
                efficiently and confidently.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "TDR Applications",
                  "Bond Processing",
                  "Sale Documentation",
                  "Purchase Documentation",
                  "Government Liaison",
                  "Legal Coordination",
                  "Approval Assistance",
                  "Complete Consultancy",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICE 08 ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#F57C00] font-bold mb-4">
                SERVICE 08
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">

                STP
                <br />
                Sewage Treatment Plant

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Efficient wastewater treatment is essential for modern
                residential, commercial and industrial developments.
                We provide complete planning, design and consultancy
                services for Sewage Treatment Plants (STPs) that meet
                environmental standards and operational requirements.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Our engineers develop customized STP solutions that
                maximize efficiency, reduce operational costs and
                ensure long-term environmental sustainability while
                complying with all applicable pollution control norms.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "STP Planning & Design",
                  "Capacity Calculation",
                  "Equipment Selection",
                  "Process Design",
                  "Technical Consultancy",
                  "Pollution Control Compliance",
                  "Operation Guidance",
                  "Environmental Solutions",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#fafafa] rounded-2xl p-5 border border-gray-100"
                  >

                    <CheckCircle
                      className="text-[#F57C00]"
                      size={22}
                    />

                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <img
                src="ICON_LINK_8"
                alt="STP"
                className="w-80 mx-auto"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= OUR PROCESS ================= */}

      <section className="py-24 bg-[#0B2E63] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-orange-300 font-semibold">
              OUR PROCESS
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Simple. Transparent.
              <br />
              Professional.
            </h2>

          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

            {[
              {
                no: "01",
                title: "Consultation",
                desc: "Understanding your project requirements and objectives.",
              },
              {
                no: "02",
                title: "Site Assessment",
                desc: "Technical inspection and feasibility evaluation.",
              },
              {
                no: "03",
                title: "Design",
                desc: "Preparation of architectural and engineering drawings.",
              },
              {
                no: "04",
                title: "Approvals",
                desc: "Government permissions and statutory approvals.",
              },
              {
                no: "05",
                title: "Support",
                desc: "Complete assistance until project completion.",
              },
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10"
              >

                <div className="text-5xl font-extrabold text-[#F57C00] mb-5">
                  {step.no}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-200 leading-8">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-[#F57C00] font-bold">
              WHY AXIS DESIGN TEAM
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-5">

              Why Clients
              <br />
              Choose Us

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              "25+ Years of Experience",
              "Experienced Architects & Engineers",
              "Government Approval Specialists",
              "Complete Project Consultancy",
              "Transparent Process",
              "Timely Delivery",
              "Client-Centric Approach",
              "Trusted Across Andhra Pradesh",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#fafafa] rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition"
              >

                <CheckCircle
                  className="mx-auto text-[#F57C00] mb-5"
                  size={42}
                />

                <h3 className="text-xl font-semibold text-gray-900">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="py-28 bg-gradient-to-r from-[#F57C00] to-orange-600 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Ready to Build
            <br />
            Your Dream Project?

          </h2>

          <p className="text-xl leading-9 text-orange-100 max-w-3xl mx-auto mb-12">

            From planning and architectural design to structural
            engineering and government approvals, Axis Design Team
            is your trusted partner for every stage of construction.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="tel:9441228889"
              className="bg-white text-[#F57C00] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition shadow-xl"
            >
              📞 +91 94412 28889
            </a>

            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-[#F57C00] px-10 py-5 rounded-full font-bold text-lg transition"
            >
              Get Free Consultation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
