import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect with the right legal expertise, on your terms
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                LAWCO bridges the gap between those seeking legal services and qualified law firms. Get matched with the
                right legal expertise for your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/find-lawyer">Find a Lawyer</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/law-firm-signup">Register as a Law Firm</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Legal professionals consulting with clients"
              className="aspect-square rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

