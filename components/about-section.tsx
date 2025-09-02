"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const [active, setActive] = useState<"profile" | "bg" | null>(null);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bersemangat dalam menciptakan pengalaman pengguna yang luar biasa
            melalui kode yang bersih dan desain yang bijaksana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ---------- KIRI ---------- */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Saya adalah fresh graduate dari Telkom University dengan keahlian
              utama di bidang UI/UX Design dan Frontend Development, serta
              kemampuan tambahan di Backend Development.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Saya telah berpengalaman membuat desain UI/UX sekaligus
              mengembangkan frontend untuk berbagai proyek, termasuk aplikasi
              e-commerce yang telah dipublikasikan. Dalam prosesnya, saya
              menggabungkan prinsip desain yang user-friendly dengan
              implementasi kode yang rapi, responsif, dan optimal.
              <br />
              <br />
              Dengan pemahaman di sisi desain dan pengembangan, saya mampu
              menjembatani kebutuhan pengguna dengan solusi digital yang
              fungsional dan menarik secara visual.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">3+ Tahun</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Projects</h3>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Bekasi, Jawa Barat</p>
              </div>
            </div>
          </div>

          {/* ---------- KANAN ---------- */}
<Card className="p-8 bg-card border-border overflow-hidden relative">
  <div
    onMouseDown={() => setActive("bg")}
    onMouseUp={() => setActive(null)}
    onMouseLeave={() => setActive(null)}
    onTouchStart={() => setActive("bg")}
    onTouchEnd={() => setActive(null)}
    className={`aspect-square rounded-lg flex items-center justify-center bg-cover bg-center cursor-pointer transition-transform duration-300 ${
      active === "bg" ? "scale-110" : "scale-100"
    }`}
    style={{ backgroundImage: "url('/fikri.jpeg')" }}
  >
    {/* Profile muncul hanya kalau background tidak ditekan */}
    {active !== "bg" && (
      <div className="text-center bg-white/70 rounded-xl p-4 shadow-md">
        <img
          src="/profile.jpeg"
          alt="Profile Photo"
          onMouseDown={(e) => {
            e.stopPropagation();
            setActive("profile");
          }}
          onMouseUp={() => setActive(null)}
          onMouseLeave={() => setActive(null)}
          onTouchStart={(e) => {
            e.stopPropagation();
            setActive("profile");
          }}
          onTouchEnd={() => setActive(null)}
          className={`w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg cursor-pointer transition-transform duration-300 ${
            active === "profile" ? "scale-150" : "scale-100"
          }`}
        />
        <p className="text-muted-foreground font-medium">Professional Photo</p>
      </div>
    )}
  </div>
</Card>

        </div>
      </div>
    </section>
  );
}
