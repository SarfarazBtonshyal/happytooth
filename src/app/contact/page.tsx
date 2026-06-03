import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Contact Us & Locations | Happy Tooth Dental Care",
  description: "Get in touch with Happy Tooth Dental Care & Root Canal Centre. Find clinic directions, maps, timings, and phone details for Murukkumpuzha & Kallambalam.",
};

export default function Contact() {
  const clinics = [
    {
      name: "HappyTooth Smile Studio",
      branch: "Murukkumpuzha",
      badge: "Flagship Studio · Open Daily",
      status: "Open All 7 Days",
      address: "Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram – 695302",
      phone: "+91 73561 00602",
      telLink: "tel:+917356100602",
      waLink: "https://wa.me/917356100602",
      timings: "9:30 AM – 6:30 PM (All 7 Days)",
      parking: "Ample private parking (fits 6+ cars)",
      dentist: "Dr. Thushara Sudhakaran BDS, MDS",
      dentistRole: "Specialist Endodontist · Lead Dentist",
      mapUrl: "https://maps.google.com/?q=Ground+Floor,+Mangalasseri+Tower,+Murukkumpuzha,+Thiruvananthapuram",
    },
    {
      name: "Happy Tooth Dental Care & Root Canal Centre",
      branch: "Kallambalam",
      badge: "Established Clinic · 5+ Years",
      status: "Closed on Sundays",
      address: "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
      phone: "+91 87144 70808",
      telLink: "tel:+918714470808",
      waLink: "https://wa.me/918714470808",
      timings: "9:00 AM – 6:30 PM (Monday to Saturday)",
      parking: "Street parking available near front",
      dentist: "Dr. Thushara Sudhakaran BDS, MDS",
      dentistRole: "Specialist Endodontist · Lead Dentist",
      mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
    }
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Contact & Locations" currentPage="Contact" bgImage="/images/happytooth-varkala10.jpg" />

      {/* Main layout grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
              Two Clinics in Thiruvananthapuram
            </h2>
            <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
              We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Find the specific hours, phone lines, and locations for each branch below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Clinics separate spaces (Left Column) */}
            <div className="lg:col-span-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clinics.map((clinic, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    
                    {/* Header accent */}
                    <div className="p-6 md:p-8 bg-navy-blue text-white space-y-3">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-[10px] font-black text-accent-teal uppercase tracking-widest bg-white/10 py-1 px-3 rounded-full">
                          {clinic.branch}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-wider py-1 px-2.5 rounded-full ${
                          clinic.status.includes("Closed") ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"
                        }`}>
                          {clinic.status}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-black leading-tight h-14 flex items-center">{clinic.name}</h3>
                      <p className="text-xs text-gray-300 font-medium">{clinic.badge}</p>
                    </div>

                    {/* Details content */}
                    <div className="p-6 md:p-8 flex-grow space-y-6">
                      
                      {/* Clinical Lead */}
                      <div className="p-4 bg-bg-light-blue/40 border border-primary-teal/10 rounded-2xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-teal font-extrabold text-sm border border-gray-100 shadow-xs shrink-0">
                          👩‍⚕️
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider">Clinical Lead</span>
                          <span className="block text-xs font-extrabold text-navy-blue">{clinic.dentist}</span>
                          <span className="block text-[10px] text-soft-gray">{clinic.dentistRole}</span>
                        </div>
                      </div>

                      {/* Location Details */}
                      <div className="space-y-4 text-xs md:text-sm text-soft-gray">
                        
                        {/* Address */}
                        <div className="flex items-start gap-3">
                          <span className="text-base shrink-0 mt-0.5">📍</span>
                          <div>
                            <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Address</strong>
                            <span className="text-xs leading-relaxed">{clinic.address}</span>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                          <span className="text-base shrink-0 mt-0.5">📞</span>
                          <div>
                            <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Phone Line</strong>
                            <a href={clinic.telLink} className="text-xs font-bold text-primary-teal hover:underline">
                              {clinic.phone}
                            </a>
                          </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-3">
                          <span className="text-base shrink-0 mt-0.5">⏰</span>
                          <div>
                            <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Working Hours</strong>
                            <span className="text-xs leading-relaxed">{clinic.timings}</span>
                          </div>
                        </div>

                        {/* Parking */}
                        <div className="flex items-start gap-3">
                          <span className="text-base shrink-0 mt-0.5">🚗</span>
                          <div>
                            <strong className="block text-navy-blue text-xs uppercase tracking-wider mb-0.5">Parking</strong>
                            <span className="text-xs leading-relaxed">{clinic.parking}</span>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Footer/Map button */}
                    <div className="p-6 md:p-8 pt-0 border-t border-gray-50 bg-slate-50/50 flex flex-col gap-2">
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-primary-teal hover:bg-navy-blue text-white font-bold text-xs py-3 rounded-xl transition duration-300 shadow-sm flex items-center justify-center gap-1.5"
                      >
                        📍 Open Google Maps
                      </a>
                      <a
                        href={clinic.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center border border-green-500 text-[#25D366] hover:bg-green-50/50 font-bold text-xs py-3 rounded-xl transition duration-300 flex items-center justify-center gap-1.5"
                      >
                        💬 Chat on WhatsApp
                      </a>
                    </div>

                  </div>
                ))}
              </div>

              {/* Extra Help Area */}
              <div className="bg-bg-light-blue/20 rounded-3xl p-6 md:p-8 border border-gray-150 space-y-4">
                <h4 className="font-extrabold text-navy-blue text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary-teal rounded-full"></span>
                  Centralized Email & Record Submission
                </h4>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed">
                  For administrative matters, digital dental X-ray/records submission, international case evaluations, or general dental tourism feedback, please email our centralized team:
                </p>
                <div className="bg-white py-3.5 px-6 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs">
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider">Email Address</span>
                    <a href="mailto:smile@happytoothdental.in" className="text-sm font-extrabold text-navy-blue hover:text-primary-teal transition-colors">
                      smile@happytoothdental.in
                    </a>
                  </div>
                  <a
                    href="mailto:smile@happytoothdental.in"
                    className="inline-block bg-navy-blue hover:bg-primary-teal text-white font-bold text-xs py-2.5 px-5 rounded-xl transition duration-300 text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>

            </div>

            {/* Appointment Form (Right Column) */}
            <div className="lg:col-span-4">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
