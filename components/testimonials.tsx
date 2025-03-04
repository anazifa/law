import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from both clients and law firms who have used our platform successfully
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    width={70}
                    height={70}
                    alt="Sarah J."
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Sarah J.</h3>
                    <p className="text-sm text-muted-foreground">Legal Service Seeker</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "After struggling to find an attorney who specializes in intellectual property for my small business,
                  LAWCO connected me with the perfect firm within 48 hours. The process was seamless."
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    width={70}
                    height={70}
                    alt="Ahmed M."
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Ahmed M.</h3>
                    <p className="text-sm text-muted-foreground">Legal Service Seeker</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The bilingual support made all the difference. I was able to explain my case in Arabic and still get
                  matched with an excellent firm that had Arabic-speaking staff. Very impressed!"
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    width={70}
                    height={70}
                    alt="Rashid & Partners Law Firm"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Rashid & Partners</h3>
                    <p className="text-sm text-muted-foreground">Law Firm</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Our firm has seen a 30% increase in qualified client leads since joining LAWCO. The platform's
                  matching algorithm ensures we only connect with clients who truly need our specific expertise."
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < 4 ? "currentColor" : "none"}
                      stroke={i < 4 ? "none" : "currentColor"}
                      strokeWidth={i < 4 ? "0" : "2"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

