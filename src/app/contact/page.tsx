import React from "react";
import BreadcrumbHero from "@/components/BreadcrumbHero";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicCard from "@/components/ClinicCard";

export const metadata = {
  title: "Contact HappyTooth Clinics | Book a Dentist Appointment",
  description: "Book a dental consultation or root canal appointment at HappyTooth. Find addresses, maps, phone numbers, WhatsApp links, and timings for Murukkumpuzha & Kallambalam.",
};

export default function Contact() {
  const clinics = [
    {
      name: "HappyTooth Smile Studio",
      branch: "Murukkumpuzha, Thiruvananthapuram",
      badge: "Flagship Studio · Open Daily",
      status: "Open All 7 Days",
      address: "Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram – 695302",
      phone: "+91 73561 00602",
      telLink: "tel:+917356100602",
      waLink: "https://wa.me/917356100602",
      timings: "9:30 AM – 6:30 PM (All 7 Days)",
      parking: "Ample private parking (fits 6+ cars)",
      dentist: "Dr. Thushara Sudhakaran BDS MDS",
      dentistRole: "Clinical Director & Root Canal Specialist",
      mapUrl: "https://maps.google.com/?q=HappyTooth+Smile+Studio,+Murukkumpuzha,+Thiruvananthapuram",
    },
    {
      name: "HappyTooth Dental Care & Root Canal Centre",
      branch: "Kallambalam, Thiruvananthapuram",
      badge: "Established Clinic · Serving since 2021",
      status: "Closed on Sundays",
      address: "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam, Thiruvananthapuram – 695605",
      phone: "+91 87144 70808",
      telLink: "tel:+918714470808",
      waLink: "https://wa.me/918714470808",
      timings: "9:30 AM – 6:30 PM (Monday to Saturday)",
      parking: "Street parking available near front",
      dentist: "Dr. Thushara Sudhakaran BDS MDS",
      dentistRole: "Clinical Director & Root Canal Specialist",
      mapUrl: "https://maps.app.goo.gl/ve3hNRyxmV5PFGxR7",
    }
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <BreadcrumbHero title="Contact & Locations" currentPage="Contact" bgImage="/images/happytooth-varkala10.jpg" />

      {/* Clinic Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-teal font-extrabold text-xs tracking-wider uppercase bg-primary-teal/10 py-1.5 px-4 rounded-full inline-block">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-blue">
              Two Clinics in Thiruvananthapuram
            </h2>
            <p className="text-soft-gray text-sm md:text-base leading-relaxed text-justify hyphens-auto max-w-2xl mx-auto">
              We operate two fully equipped dental offices headed by lead specialist Dr. Thushara Sudhakaran. Find the specific hours, phone lines, and locations for each branch below.
            </p>
          </div>

          {/* Clinics cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {clinics.map((clinic, idx) => (
              <ClinicCard
                key={idx}
                name={clinic.name}
                branch={clinic.branch}
                badge={clinic.badge}
                status={clinic.status}
                address={clinic.address}
                phone={clinic.phone}
                telLink={clinic.telLink}
                waLink={clinic.waLink}
                timings={clinic.timings}
                parking={clinic.parking}
                mapUrl={clinic.mapUrl}
              />
            ))}
          </div>

          {/* Appointment Form — full width, centred */}
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>

        </div>
      </section>
    </div>
  );
}
