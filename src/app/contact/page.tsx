import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Happy Tooth Dental Care & Root Canal Centre. Find clinic locations in Murukkumpuzha & Kallambalam, phone details, and book appointments.",
};

export default function Contact() {
  const locations = [
    {
      name: "Murukkumpuzha Clinic",
      address: "Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram, 695302",
      mapUrl: "https://maps.google.com/?q=Mangalasseri+Tower,+Murukkumpuzha,+Thiruvananthapuram",
      bgPos: "bg-teal-50"
    },
    {
      name: "Kallambalam Clinic",
      address: "Alinmoodu, Kallambalam- Varkala road, Kallambalam, Thiruvananthapuram",
      mapUrl: "https://maps.google.com/?q=Alinmoodu,+Kallambalam-Varkala+road,+Kallambalam",
      bgPos: "bg-blue-50"
    }
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Contact Us" currentPage="Contact" bgImage="/images/happytooth-varkala10.jpg" />

      {/* Main layout grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
              <div className="space-y-4">
                <span className="text-primary-teal font-extrabold text-sm tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue leading-tight">
                  Get In Touch With Us
                </h2>
                <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                  Whether you’re planning a routine checkup or need immediate dental care, we’re here to help. Reach out to Happy Tooth Dental Care and our team will guide you through the next steps with clarity and care.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Phone Card */}
                <div className="bg-bg-light-blue/40 rounded-2xl p-6 border border-gray-50 flex items-start gap-4 shadow-xs hover:shadow-md transition duration-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Call us any time</span>
                    <a href="tel:+918714470808" className="text-base font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      +91 87144 70808
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-bg-light-blue/40 rounded-2xl p-6 border border-gray-50 flex items-start gap-4 shadow-xs hover:shadow-md transition duration-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-teal shadow-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Email address</span>
                    <a href="mailto:smile@happytoothdental.com" className="text-base font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      smile@happytoothdental.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Timing Box */}
              <div className="bg-navy-blue rounded-3xl p-6 text-white space-y-4 shadow-lg">
                <h3 className="text-lg font-bold">Clinic Working Hours</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-xs sm:text-sm text-gray-300">
                  <div>
                    <span className="block text-white font-bold mb-1">Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-1">Saturday</span>
                    <span>By Appointment Only</span>
                  </div>
                  <div>
                    <span className="block text-red-400 font-bold mb-1">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map Locations Grid */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                <h3 className="text-xl font-bold text-navy-blue">Our Clinic Locations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {locations.map((loc, idx) => (
                    <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md flex flex-col group h-full">
                      {/* Stylized Mock Map Graphic Area */}
                      <div className="relative h-44 bg-slate-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                        {/* Abstract grid lines pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                        
                        {/* Glow halo */}
                        <div className="w-10 h-10 rounded-full bg-primary-teal/20 flex items-center justify-center text-primary-teal animate-ping duration-1000 absolute"></div>
                        <div className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-teal shadow-md border border-gray-100 z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-bold text-primary-teal mt-3 z-10 bg-white py-1 px-3 rounded-full border shadow-xs">
                          Map Coordinates Loaded
                        </span>
                      </div>

                      {/* Info Area */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-bold text-navy-blue text-sm">
                            {loc.name}
                          </h4>
                          <p className="text-xs text-soft-gray leading-relaxed">
                            {loc.address}
                          </p>
                        </div>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center inline-block bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-2.5 rounded-xl transition duration-300 shadow-xs hover:shadow-md"
                        >
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Appointment Form (Right Column) */}
            <div className="lg:col-span-5">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
