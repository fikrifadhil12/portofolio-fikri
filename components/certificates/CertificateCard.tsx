// components/certificates/CertificateCard.tsx
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CertificateCardProps {
  title: string
  issuer: string
  year: string
  image: string
  link: string
}

export function CertificateCard({
  title,
  issuer,
  year,
  image,
  link,
}: CertificateCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden rounded-2xl">
      {/* IMAGE */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* CONTENT */}
      <CardContent className="flex flex-col flex-1 p-5">
        <div className="mb-4 space-y-1">
          <h3 className="font-semibold text-base line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <p className="text-xs text-muted-foreground">{year}</p>
        </div>

        {/* BUTTON */}
        <Button asChild className="mt-auto w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
