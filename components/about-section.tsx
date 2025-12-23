"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const [active, setActive] = useState<"profile" | "bg" | null>(null);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend Developer & Quality Assurance dengan fokus pada kualitas,
            keamanan, dan pengalaman pengguna
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ---------- KIRI ---------- */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Saya adalah <strong>fresh graduate Computer Science</strong> dari
              Telkom University dengan latar belakang{" "}
              <strong>Frontend Development, UI/UX Design, dan Quality Assurance</strong>.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Saya memiliki pengalaman dalam melakukan{" "}
              <strong>manual testing, API testing, usability testing</strong>,
              serta penyusunan <strong>test case</strong> dan dokumentasi QA pada
              aplikasi web dan mobile. Dengan pemahaman alur pengembangan
              aplikasi, saya mampu mengidentifikasi bug secara detail dari sisi
              pengguna maupun teknis.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Selain itu, saya juga aktif dalam{" "}
              <strong>bug bounty & web security testing</strong>, dengan fokus
              pada pencarian celah seperti <em>broken access control</em>,
              kebocoran data, dan konfigurasi yang tidak aman.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Experience
                </h3>
                <p className="text-muted-foreground">3+ Tahun</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Projects
                </h3>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Focus Area
                </h3>
                <p className="text-muted-foreground">
                  Frontend, QA, Web Security
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Bekasi, Jawa Barat
                </p>
              </div>
            </div>
          </div>

          {/* ---------- KANAN (TIDAK DIUBAH LOGIC-NYA) ---------- */}
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
                  <p className="text-muted-foreground font-medium">
                    Professional Photo
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
