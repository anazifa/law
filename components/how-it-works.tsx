import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Process</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How LAWCO Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to connect with legal expertise
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2">
          <div className="grid gap-8">
            <h3 className="text-xl font-bold text-center mb-4">For Legal Service Seekers</h3>
            <div className="grid gap-2">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">1</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Create an account</h4>
                  <p className="text-sm text-muted-foreground">
                    Sign up with your details and verify your email to access the platform.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">2</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Describe your legal needs</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill out our detailed questionnaire about your legal situation and requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">3</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Get matched with law firms</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive a list of qualified law firms that match your specific legal needs.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">4</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Connect and proceed</h4>
                  <p className="text-sm text-muted-foreground">
                    Communicate directly with your chosen law firm and manage your case through our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <h3 className="text-xl font-bold text-center mb-4">For Law Firms</h3>
            <div className="grid gap-2">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">1</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Register your firm</h4>
                  <p className="text-sm text-muted-foreground">
                    Create a professional profile with your firm's credentials, specialties, and team information.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">2</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Complete verification</h4>
                  <p className="text-sm text-muted-foreground">
                    Submit necessary documentation to verify your firm's legitimacy and professional standing.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">3</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Receive client matches</h4>
                  <p className="text-sm text-muted-foreground">
                    Get connected with potential clients whose legal needs match your firm's expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                  <span className="text-sm">4</span>
                </div>
                <div className="grid gap-1">
                  <h4 className="text-lg font-semibold">Manage cases efficiently</h4>
                  <p className="text-sm text-muted-foreground">
                    Use our platform tools to manage client communications, documents, and billing all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

