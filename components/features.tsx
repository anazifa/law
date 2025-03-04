import { CheckCircle, Shield, Scale, Clock, Globe, CreditCard } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why choose LAWCO?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers unique advantages for both legal service seekers and law firms.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Precise Matching</h3>
            </div>
            <p className="text-muted-foreground">
              Our intelligent system matches you with legal professionals specialized in your specific case
              requirements.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Secure Communication</h3>
            </div>
            <p className="text-muted-foreground">
              End-to-end encrypted messaging ensures your sensitive legal information remains confidential.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Verified Professionals</h3>
            </div>
            <p className="text-muted-foreground">
              All law firms on our platform undergo strict verification process to ensure legitimacy and credentials.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Efficient Case Management</h3>
            </div>
            <p className="text-muted-foreground">
              Track your case progress, upcoming appointments, and document submissions all in one place.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Multilingual Support</h3>
            </div>
            <p className="text-muted-foreground">
              Use our platform in English or Arabic, with more languages coming soon to serve a diverse client base.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Secure Payments</h3>
            </div>
            <p className="text-muted-foreground">
              Process payments and retainers securely through our trusted banking partners with complete transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

