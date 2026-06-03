import React from "react";
import Link from "next/link";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = {
  title: "HappyTooth Smile Studio – Murukkumpuzha",
  description: "Clinic details for HappyTooth Smile Studio in Murukkumpuzha.",
};

export default function MurukkumpuzhaClinic() {
  return (
    <div>
      <BreadcrumbHero
        title="Murukkumpuzha Studio"
        currentPage="Murukkumpuzha"
        bgImage="/images/happytooth-varkala13.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            
            {/* Header Accent */}
            <div className="p-8 md:p-10 bg-navy-blue text-white space-y-4">
              <span className="text-[10px] font-black text-accent-teal uppercase tracking-widest bg-white/10 py-1.5 px-4 rounded-full inline-block">
                Murukkumpuzha · Opening Shortly
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                HappyTooth Smile Studio
              </h2>
            </div>

            {/* Content Details */}
            <div className="p-8 md:p-10 space-y-8">
              
              {/* Introduction */}
              <p className="text-soft-gray text-sm md:text-base leading-relaxed font-medium">
                We have two clinics in Thiruvananthapuram. If you're in the Murukkumpuzha or Kazhakoottam area, our new specialist clinic is opening very soon. Both are headed by Dr. Thushara Sudhakaran, a specialist in endodontics — so you're in the same hands, either way.
              </p>

              {/* Details List */}
              <div className="border-t border-gray-100 pt-8 space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5">📍</span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Address</span>
                    <span className="text-sm md:text-base text-navy-blue font-semibold">
                      Ground Floor, Mangalasseri Tower, Murukkumpuzha, Thiruvananthapuram – 695302
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5">📞</span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Phone</span>
                    <a href="tel:+917356100602" className="text-sm md:text-base text-primary-teal font-extrabold hover:underline">
                      +91 73561 00602
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5">🕐</span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Working Hours</span>
                    <span className="text-sm md:text-base text-navy-blue font-semibold">
                      All 7 days including Sunday · 9:30 AM – 6:30 PM
                    </span>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5">🚗</span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Parking</span>
                    <span className="text-sm md:text-base text-navy-blue font-semibold">
                      Ample parking — fits 6+ cars comfortably
                    </span>
                  </div>
                </div>

                {/* Lead Dentist */}
                <div className="flex items-start gap-4 border-t border-gray-100 pt-6">
                  <span className="text-xl shrink-0 mt-0.5">👩‍⚕️</span>
                  <div>
                    <span className="block text-[10px] font-bold text-soft-gray uppercase tracking-wider mb-1">Lead Dentist</span>
                    <span className="block text-sm md:text-base text-navy-blue font-extrabold">
                      Dr. Thushara Sudhakaran BDS, MDS
                    </span>
                    <span className="block text-xs text-soft-gray">
                      Specialist Endodontist · Lead Dentist
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Actions */}
            <div className="p-8 md:p-10 pt-0 bg-slate-50 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917356100602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-xl transition duration-300 shadow-sm flex items-center justify-center gap-2 text-sm"
              >
                💬 Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex-1 text-center border border-navy-blue/20 hover:border-navy-blue text-navy-blue font-bold py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-2 text-sm"
              >
                📅 Book Appointment
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
