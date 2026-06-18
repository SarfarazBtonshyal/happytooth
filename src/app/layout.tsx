import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://happytoothdental.in"),
  title: {
    default: "Happy Tooth Dental Clinics | Murukkumpuzha & Kallambalam",
    template: "%s | Happy Tooth Dental Clinics",
  },
  description: "Experience modern, patient-friendly specialized dental care at Happy Tooth. Featuring clinic locations in Murukkumpuzha and Kallambalam, Thiruvananthapuram. Led by specialist Endodontist Dr. Thushara Sudhakaran (BDS, MDS).",
  keywords: [
    "dentist Thiruvananthapuram",
    "dental clinic Kallambalam",
    "dental clinic Murukkumpuzha",
    "root canal specialist Kerala",
    "best dental clinic Trivandrum",
    "Dr. Thushara Sudhakaran",
    "Endodontist Thiruvananthapuram",
    "smile designing clinic Varkala",
    "clear aligners Trivandrum",
    "dental implants Thiruvananthapuram",
    "pediatric dentist Kallambalam",
    "painless root canal treatment",
    "cosmetic dentistry Kerala",
    "hygienic dental clinic Trivandrum"
  ],
  authors: [{ name: "Dr. Thushara Sudhakaran", url: "https://happytoothdental.in" }],
  creator: "Happy Tooth Clinics",
  publisher: "Happy Tooth Clinics",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Happy Tooth Dental Clinics | Murukkumpuzha & Kallambalam",
    description: "Experience modern, patient-friendly specialized dental care at Happy Tooth. Featuring clinic locations in Murukkumpuzha and Kallambalam, Thiruvananthapuram. Led by specialist Endodontist Dr. Thushara Sudhakaran (BDS, MDS).",
    url: "https://happytoothdental.in",
    siteName: "Happy Tooth Dental Clinics",
    images: [
      {
        url: "/images/happytooth-logo-1.png",
        width: 800,
        height: 600,
        alt: "Happy Tooth Dental Clinics Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Tooth Dental Clinics | Murukkumpuzha & Kallambalam",
    description: "Experience modern, patient-friendly specialized dental care at Happy Tooth. Featuring clinic locations in Murukkumpuzha and Kallambalam, Thiruvananthapuram. Led by specialist Endodontist Dr. Thushara Sudhakaran (BDS, MDS).",
    images: ["/images/happytooth-logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/happytooth-favicon-1-300x300.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Data for search engines & LLM AI crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://happytoothdental.in/#organization",
        "name": "Happy Tooth Dental Clinics",
        "url": "https://happytoothdental.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://happytoothdental.in/images/happytooth-logo-1.png",
          "caption": "Happy Tooth Dental Clinics Logo"
        },
        "image": "https://happytoothdental.in/images/happytooth-varkala12-1.jpg",
        "description": "Premium specialist dental clinics in Murukkumpuzha and Kallambalam, Thiruvananthapuram, Kerala.",
        "telephone": "+91 73561 00602",
        "email": "smile@happytoothdental.in"
      },
      {
        "@type": "Dentist",
        "@id": "https://happytoothdental.in/#clinic-kallambalam",
        "name": "Happy Tooth Dental Care & Root Canal Centre (Kallambalam)",
        "parentOrganization": {
          "@id": "https://happytoothdental.in/#organization"
        },
        "image": "https://happytoothdental.in/images/happytooth-varkala10.jpg",
        "telephone": "+91 87144 70808",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mavinmoodu, Kallambalam–Varkala Road, Kallambalam",
          "addressLocality": "Thiruvananthapuram",
          "addressRegion": "Kerala",
          "postalCode": "695605",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.7610,
          "longitude": 76.7946
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          }
        ],
        "medicalSpecialty": "Endodontics",
        "founder": {
          "@type": "Person",
          "name": "Dr. Thushara Sudhakaran",
          "jobTitle": "Clinical Director & Root Canal Specialist"
        }
      },
      {
        "@type": "Dentist",
        "@id": "https://happytoothdental.in/#clinic-murukkumpuzha",
        "name": "Happy Tooth Smile Studio (Murukkumpuzha)",
        "parentOrganization": {
          "@id": "https://happytoothdental.in/#organization"
        },
        "image": "https://happytoothdental.in/images/happytooth-varkala12-1.jpg",
        "telephone": "+91 73561 00602",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ground Floor, Mangalasseri Tower, Murukkumpuzha",
          "addressLocality": "Thiruvananthapuram",
          "addressRegion": "Kerala",
          "postalCode": "695302",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.6186,
          "longitude": 76.8407
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          }
        ],
        "medicalSpecialty": [
          "Endodontics",
          "Orthodontics",
          "CosmeticDentistry",
          "Implantology"
        ],
        "founder": {
          "@type": "Person",
          "name": "Dr. Thushara Sudhakaran",
          "jobTitle": "Clinical Director & Root Canal Specialist"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${rubik.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins text-dark-text bg-white">
        {/* Structured JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
