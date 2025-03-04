import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to transform your legal journey?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of clients and firms already benefiting from our platform
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

