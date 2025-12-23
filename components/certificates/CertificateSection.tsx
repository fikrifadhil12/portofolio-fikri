// components/certificates/CertificateSection.tsx
import { CertificateCard } from "./CertificateCard"

const certificates = [
  {
    title: "Bug Bounty Penprov Bali",
    issuer: "Pemerintah Provinsi Bali",
    year: "Des-2025",
    image: "/certificates/Bounty_penprov_Bali.jpg",
    link: "https://drive.google.com/file/d/1OiDzNIk2EOhwMn2JFQDM_foH89Fu6r_T/view?usp=drive_link",
  },
]

export function CertificateSection() {
  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
