"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");
  const [showQuickBookAlert, setShowQuickBookAlert] = useState(false);

  const reasons = [
    "Specialist in Root Canal Treatments",
    "Modern dental equipment and digital X-rays",
    "Strict sterilization and hygiene standards",
    "Comfortable and pain-free procedures",
    "Affordable dental care for families",
    "Friendly and patient-focused approach",
  ];

  const servicesList = [
    "Root Canal Treatment",
    "Cosmetic Dentistry & Smile Design",
    "Orthodontics (Braces & Aligners)",
    "Preventive Dentistry",
    "Restorative Dentistry",
    "Pediatric Dentistry",
  ];

  const services = [
    {
      title: "Endodontics / Root Canal Treatment",
      desc: "Root canal treatment removes infection from the inner part of a tooth and restores its strength and function.",
      link: "/services#ENDODONTICS",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Cosmetic Dentistry & Smile Design",
      desc: "Smile designing enhances the appearance of teeth and creates a confident smile.",
      link: "/services#COSMETIC",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Orthodontics (Braces & Aligners)",
      desc: "Orthodontic treatments help correct crooked teeth and bite problems.",
      link: "/services#Orthodontics",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 01.3-.7l7-7a1 1 0 011.4 0l7 7a1 1 0 01.3.7v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10M8 8h8M8 12h8" />
        </svg>
      )
    },
    {
      title: "Preventive Dentistry",
      desc: "Focuses on regular checkups, cleaning, and early detection to keep your teeth and gums healthy and problem-free.",
      link: "/services#Preventive",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Restorative Dentistry",
      desc: "Repairs damaged or decayed teeth using fillings, crowns, and other treatments to restore strength and function.",
      link: "/services#Restorative",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle and friendly dental care designed specifically for children, ensuring a positive and comfortable experience.",
      link: "/services#Pediatric",
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12a4 4 0 018 0" />
        </svg>
      )
    }
  ];

  const facilityHighlights = [
    {
      title: "Modern Care, Designed Around You",
      desc: "Built with one purpose — to make your dental experience safe, comfortable, and worry-free.",
      image: "/images/empty-professional-dentistry-stomatology-hospital-2026-01-08-02-12-42-utc.webp"
    },
    {
      title: "Advanced Dental Technology",
      desc: "We use modern dental equipment to ensure accurate diagnosis and efficient treatment.",
      image: "/images/dental-teeth-model-with-dentist-tool-for-dentistry-2026-01-09-11-53-21-utc.webp"
    },
    {
      title: "Sterilization & Hygiene",
      desc: "We follow strict sterilization protocols to maintain a clean and controlled clinical environment.",
      image: "/images/false-teeth-2026-01-08-05-40-32-utc.webp"
    }
  ];

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService) {
      setShowQuickBookAlert(true);
      setTimeout(() => setShowQuickBookAlert(false), 2000);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. UPGRADED HERO SECTION */}
      <section className="relative bg-gradient-to-b from-bg-light-blue via-bg-light-blue/20 to-white py-20 lg:py-28 relative">
        {/* Glow backdrop halos */}
        <div className="absolute top-10 right-[15%] w-[32rem] h-[32rem] bg-primary-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 left-5 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>

        {/* Quick booking Toast alert overlay */}
        {showQuickBookAlert && (
          <div className="fixed top-24 right-5 bg-white border-l-4 border-primary-teal text-navy-blue py-3.5 px-6 rounded-2xl shadow-2xl z-50 animate-fade-in-up flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal text-xs font-bold">✓</span>
            <span className="text-xs font-bold">Preferred slot locked for: {selectedService}!</span>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headings & Selector */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-fade-in-up">
              <span className="inline-block text-primary-teal font-extrabold text-xs tracking-widest uppercase bg-primary-teal/15 py-2 px-5 rounded-full">
                ✨ 100% Painless & Trusted Family Clinic
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-blue leading-tight">
                Your Smile Deserves <br />
                <span className="bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">Expert Care</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-soft-gray leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to Happy Tooth Dental Care & Root Canal Centre, a trusted dental clinic in Kallambalam, Varkala, where modern dentistry meets genuinely gentle care.
              </p>

              {/* Clean trust checkmarks row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-2 text-xs font-bold text-navy-blue">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px]">✓</span>
                  <span>Specialist Doctors</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px]">✓</span>
                  <span>Modern Facilities</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal text-[10px]">✓</span>
                  <span>Gentle Family Care</span>
                </span>
              </div>

              {/* Interactive Feature: Quick Treatment selector widget */}
              <div className="bg-white p-4 sm:p-5 rounded-[2rem] shadow-xl border border-gray-100 max-w-lg mx-auto lg:mx-0">
                <form onSubmit={handleQuickBook} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full text-xs font-bold py-3.5 px-4 bg-gray-50 border border-gray-200 focus:border-primary-teal rounded-xl outline-none text-navy-blue transition"
                    >
                      <option value="">Select Treatment Needed...</option>
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary-teal hover:bg-navy-blue text-white text-xs font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-sm shrink-0"
                  >
                    Quick Book Slot
                  </button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-navy-blue hover:bg-primary-teal text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md text-center transform hover:-translate-y-0.5 active:scale-98"
                >
                  Make Appointment
                </Link>
                <a
                  href="tel:+918714470808"
                  className="w-full sm:w-auto text-center font-bold text-sm text-navy-blue hover:text-primary-teal transition py-4 px-8"
                >
                  Or Call +91 87144 70808
                </a>
              </div>
            </div>

            {/* Right Column: 3D Overlapping Image Collage */}
            <div className="lg:col-span-6 relative flex justify-center items-center lg:justify-end animate-fade-in py-8">
              <div className="relative w-full max-w-md sm:max-w-lg h-[28rem] md:h-[32rem]">
                {/* 1. Main Background Image (Real Clinic Treatment Room) */}
                <div className="absolute top-4 left-6 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-3 z-10 transform hover:scale-[1.01] transition duration-500">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/happytooth-varkala11.jpg"
                      alt="Clinic interior treatment cabin"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 2. Overlapping Card (Real Doctor Profile) */}
                <div className="absolute bottom-4 right-4 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2.5 z-20 transform hover:rotate-1 hover:scale-102 transition duration-500">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/Doctors-1.webp"
                      alt="Doctor Profile Dr. Thushara Sudhakaran"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 3. Floating Card (Real Clinic Chair Setup) */}
                <div className="absolute top-16 left-0 w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 z-20 transform hover:-rotate-1 hover:scale-102 transition duration-500 hidden sm:block">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/happytooth-varkala12.jpg"
                      alt="Clinic dental chair facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating trust overlay badge */}
                <div className="absolute bottom-28 left-0 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-30 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy-blue leading-none">Trusted Care</span>
                    <span className="block text-[10px] text-soft-gray mt-0.5">10k+ Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary-teal rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary-teal rounded-br-2xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
                <Image
                  src="/images/happytooth-side.webp"
                  alt="Healthy Smiles at Happy Tooth"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                About The Clinic
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Healthy Smiles Begin at <br />
                <span className="text-primary-teal bg-gradient-to-r from-primary-teal to-accent-teal bg-clip-text text-transparent">Happy Tooth Dental Care</span>
              </h2>
              
              <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                <p>
                  At Happy Tooth, we believe that dental treatment should be comfortable, transparent, and effective. Our clinic provides comprehensive dental services using modern equipment and safe sterilization protocols.
                </p>
                <p className="border-l-4 border-primary-teal pl-4 py-1.5 font-semibold text-navy-blue bg-bg-light-blue/40 rounded-r-xl">
                  Our chief doctor specializes in Endodontics (Root Canal Treatment) and is dedicated to saving natural teeth using advanced techniques and painless procedures.
                </p>
                <p>
                  We proudly serve families across Kallambalam, Varkala, and Trivandrum, helping patients maintain long-lasting oral health.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-block bg-navy-blue hover:bg-primary-teal text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  About More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 bg-bg-light-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-white/80 py-1.5 px-4 rounded-full inline-block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                Reason to Choose Happy Tooth
              </h2>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                Choosing the right dental clinic is about more than just treatment — it’s about trust, comfort, and confidence in the care you receive. At Happy Tooth Dental Care, we focus on delivering reliable, patient-friendly treatments using modern techniques, while making sure every visit feels calm, clear, and reassuring.
              </p>

              {/* Grid bullet list with improved design cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {reasons.map((reason, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-teal/15 flex items-center justify-center text-primary-teal mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-xs md:text-sm font-bold text-navy-blue leading-snug">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm border border-white/50 bg-white p-3">
                <Image
                  src="/images/Why-Choose-Us-1.webp"
                  alt="Happy Tooth Reason to Choose Photo"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUMMARY GRID */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
              Our Comprehensive Dental Services
            </h2>
            <p className="text-soft-gray text-sm md:text-base leading-relaxed">
              We offer a full range of treatments using modern techniques, ensuring every procedure is safe, effective, and as comfortable as possible.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-gradient-to-b hover:from-white hover:to-bg-light-blue/20 rounded-3xl p-7 border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-navy-blue/5 transition-all duration-500 flex flex-col justify-between group transform hover:-translate-y-2 hover:border-primary-teal/20"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-bg-light-blue group-hover:bg-primary-teal rounded-2xl flex items-center justify-center shadow-xs transition-colors duration-500">
                    {svc.iconPath}
                  </div>
                  <h3 className="text-lg font-bold text-navy-blue group-hover:text-primary-teal transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-soft-gray leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={svc.link}
                    className="text-xs font-bold text-primary-teal hover:text-navy-blue inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-1.5 duration-300"
                  >
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-primary-teal hover:bg-navy-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              More Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MODERN CARE / FACILITIES HIGHLIGHTS */}
      <section className="py-20 bg-bg-light-blue/50 relative">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
              Smile Makeovers That Change Lives
            </h2>
            <p className="text-soft-gray text-sm md:text-base leading-relaxed">
              At Happy Tooth Dental Care, every detail of our clinic is built with one purpose —to make your dental experience safe, comfortable, and worry-free.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {facilityHighlights.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-navy-blue/5 transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1.5"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-navy-blue">
                      {fac.title}
                    </h3>
                    <p className="text-sm text-soft-gray leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-50 mt-4">
                    <Link
                      href="/facilities"
                      className="text-xs font-bold text-primary-teal hover:text-navy-blue transition-colors flex items-center gap-1"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/facilities"
              className="inline-block bg-navy-blue hover:bg-primary-teal text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              More Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="relative bg-navy-blue py-20 text-white overflow-hidden">
        {/* Graphics accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,136,110,0.2),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to transform your dental experience?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                At Happy Tooth, we focus on delivering reliable, patient-friendly treatments using modern techniques, while making sure every visit feels calm, clear, and reassuring.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-primary-teal hover:bg-white hover:text-navy-blue text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md text-center transform hover:-translate-y-0.5"
                >
                  Book Appointment Now
                </Link>
                <a
                  href="tel:+918714470808"
                  className="w-full sm:w-auto border border-white/20 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 text-center transform hover:-translate-y-0.5"
                >
                  Call +91 87144 70808
                </a>
              </div>
            </div>

            {/* Sidebar checkmarks/highlights */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xs space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Clinic Hours</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">By Appointment</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 text-center text-xs text-gray-400">
                Locations: Murukkumpuzha & Kallambalam
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
