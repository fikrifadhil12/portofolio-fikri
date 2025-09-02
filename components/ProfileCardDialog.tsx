"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ProfileCardDialog() {
  return (
    <div className="flex gap-6 justify-center items-center p-6">
      {/* FOTO BACKGROUND */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/background.jpg" // ganti sesuai path background
              alt="Background"
              width={250}
              height={150}
              className="object-cover"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
          <Image
            src="/background.jpg"
            alt="Background Full"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      {/* FOTO PROFILE */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer rounded-full overflow-hidden shadow-md hover:scale-110 transition">
            <Image
              src="/profile.jpg" // ganti sesuai path foto profile
              alt="Profile"
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>My Profile</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Profile Large"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary shadow-md"
            />
            <h2 className="text-xl font-semibold">Fikri Fadhil Mustofa</h2>
            <p className="text-center text-muted-foreground">
              Fullstack Developer | React, Next.js, Tailwind, Golang
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
