"use client";

import { AnimatedAurora } from "@/components/effects/AnimatedAurora";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapleLeaf } from "@/components/canadian/MapleLeaf";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="top"
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-northern-dark dark:via-northern-slate dark:to-northern-deep-forest overflow-hidden"
      >
        {/* Animated Aurora Background (dark mode only) */}
        <div className="hidden dark:block">
          <AnimatedAurora />
        </div>

        {/* Maple Leaf Watermark - Canadian Identity (Rotated Asymmetric) */}
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none z-0"
          style={{ paddingRight: "10%" }}
        >
          <MapleLeaf
            variant="outlined"
            size="xxl"
            color="red"
            opacity={0.05}
            className="text-canadian-red-dark transform rotate-[18deg]"
          />
        </div>

        {/* Background pattern overlay - subtle topographic lines */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C896' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-5xl mx-auto px-8 py-20 text-center relative z-10">
          <FadeIn delay={0.1} direction="down" initiallyVisible>
            <div className="inline-block px-4 py-2 mb-6 glass dark:glass backdrop-blur-sm bg-aurora-purple/10 dark:bg-aurora-purple/20 text-aurora-purple dark:text-aurora-purple border border-aurora-purple/30 text-sm font-medium rounded-full">
              Day One: building what works, starting in Atlantic Canada.
            </div>
          </FadeIn>

          <FadeIn delay={0.2} initiallyVisible>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-canadian-snow mb-6 leading-tight">
              <span className="text-gradient-canadian">We help small teams deliver outcomes</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} initiallyVisible>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              A public-interest technology organization helping under-resourced SMEs and social enterprises finish high-stakes
              administrative work fast, safely, and with proof. We start in Atlantic Canada and scale what works through partners.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} initiallyVisible>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white font-semibold rounded-lg border-2 border-canadian-red-dark dark:border-canadian-red-dark hover:shadow-glow-red transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:scale-105"
              >
                Join the founding list
              </a>
              <a
                href="#coming"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("coming")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-white/90 dark:bg-northern-surface dark:glass text-gray-900 dark:text-canadian-snow font-semibold rounded-lg border-2 border-gray-300 dark:border-aurora-blue/30 hover:border-aurora-blue dark:hover:border-aurora-green hover:shadow-glow-blue dark:hover:shadow-glow-aurora transition-all duration-300"
              >
                See what's coming
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Gap */}
      <section id="gap" className="py-20 bg-white dark:bg-northern-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">The Gap</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The work that matters gets stuck in forms, deadlines, reports, and compliance checklists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200">
              <p>
                For small teams, vendor portals, documentation requests, and inbox chaos turn a week of work into a month of
                waiting. Missed opportunities are common, not because teams do not care, but because the systems are heavy.
              </p>
              <p>
                The gap is the distance between paperwork and completed outcomes. Closing it takes practical support that makes
                high-stakes work finishable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-green/20">
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Forms and deadlines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Repeated data entry, shifting requirements, and tight timelines drain capacity.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-blue/20">
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Reporting and proof</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Teams spend more time assembling evidence than delivering results.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-purple/20">
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Vendor complexity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Multiple portals and contracts slow decisions and create risk.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-canadian-maple/20">
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Missed opportunities</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Funding windows close while work is still in draft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what" className="py-20 bg-gray-50 dark:bg-northern-slate">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We exist to help small teams complete high-stakes work reliably. Paperwork-to-outcome, with trust as a constraint,
              not an afterthought.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-blue dark:border-aurora-blue transition-all duration-300 hover:shadow-elevation-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow mb-3">Access</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Make the path to completion clear and reachable.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Shorten the path from form to approval.</li>
                <li>• Reduce repeat requests with shared templates and standards.</li>
                <li>• Deliver small digital services that remove steps.</li>
              </ul>
            </div>

            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-green dark:border-aurora-green transition-all duration-300 hover:shadow-elevation-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow mb-3">Agency</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Give teams the support to finish what they start.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Use workflows and cohorts that keep work moving.</li>
                <li>• Turn complex requirements into manageable milestones.</li>
                <li>• Provide playbooks teams can adapt and own.</li>
              </ul>
            </div>

            <div className="group p-8 bg-white dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-purple dark:border-aurora-purple transition-all duration-300 hover:shadow-elevation-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-canadian-snow mb-3">Assurance</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Build trust into every step.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Privacy, accessibility, and accountability built in.</li>
                <li>• Trust and safety rails that work under pressure.</li>
                <li>• Measurable outcomes with clear evidence.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how" className="py-20 bg-white dark:bg-northern-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A small-loop approach that keeps us honest and accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-aurora-blue/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-aurora-blue/15 dark:bg-aurora-blue/25 text-aurora-blue font-bold flex items-center justify-center">1</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Start small</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Pick one high-stakes workflow and make it finishable.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-aurora-green/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-aurora-green/15 dark:bg-aurora-green/25 text-aurora-green font-bold flex items-center justify-center">2</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Co-design</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Build with the teams who do the work every day.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-aurora-purple/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-aurora-purple/15 dark:bg-aurora-purple/25 text-aurora-purple font-bold flex items-center justify-center">3</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Ship</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Release a focused service quickly and learn in the open.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-canadian-maple/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-canadian-maple/15 dark:bg-canadian-maple/25 text-canadian-maple font-bold flex items-center justify-center">4</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Measure</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track completion rates, time saved, and outcomes.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-aurora-blue/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-aurora-blue/15 dark:bg-aurora-blue/25 text-aurora-blue font-bold flex items-center justify-center">5</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Publish</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Share playbooks and templates so others can replicate.
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:glass dark:bg-northern-surface/60 rounded-xl border border-gray-200 dark:border-aurora-green/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-aurora-green/15 dark:bg-aurora-green/25 text-aurora-green font-bold flex items-center justify-center">6</span>
                <h3 className="font-semibold text-gray-900 dark:text-canadian-snow">Replicate</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Scale through partners and local delivery that fits context.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-6 text-center">
            We design for standards and interoperability from day one. No lock-in.
          </p>
        </div>
      </section>

      {/* What's Coming */}
      <section id="coming" className="py-20 bg-gray-50 dark:bg-northern-slate">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">What's Coming</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Over the next year, we will prove what works and share it widely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-blue/20">
              <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Online course launch</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We start with the online course, then expand into pilot cohorts and office hours.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-green/20">
              <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Small measurable services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Focused digital services that remove friction from high-stakes administrative work.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-aurora-purple/20">
              <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Public playbooks and templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Open resources that partners can reuse, adapt, and improve.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:glass dark:bg-northern-surface/60 border border-gray-200 dark:border-canadian-maple/20">
              <h3 className="font-semibold text-gray-900 dark:text-canadian-snow mb-2">Partner-led delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Start in Atlantic Canada, expand only as results prove out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Progress */}
      <section id="progress" className="py-20 bg-white dark:bg-northern-dark">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-canadian-snow mb-4">Our Progress</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">We are early and transparent about where things stand.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-aurora-green to-canadian-pine rounded-full flex items-center justify-center text-white font-bold shadow-glow-aurora">
                ✓
              </div>
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-green dark:border-aurora-green">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">Established</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Mission and vision defined</li>
                  <li>• Core values established</li>
                  <li>• Clear problem thesis and national capability gap documented</li>
                  <li>• This website (v1)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-aurora-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-glow-blue">
                ⏳
              </div>
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface rounded-xl border-l-4 border-aurora-blue dark:border-aurora-blue">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">In Progress</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Small teams-focused course design</li>
                  <li>• Early product experiments</li>
                  <li>• Community building and early SME / social enterprise engagement</li>
                  <li>• Partnership conversations with local SMEs, social enterprises, and community organizations</li>
                  <li>• Lean founding governance and legal structure (small founding board; skills-based board to follow)</li>
                  <li>• Funding pathways for pilots and early cohorts</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                —
              </div>
              <div className="flex-1 p-6 bg-white/80 dark:glass dark:bg-northern-surface/50 rounded-xl border-l-4 border-gray-300 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-canadian-snow mb-2">Not Started</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Full platform build and broader product portfolio</li>
                  <li>• Education & government program tracks at scale</li>
                  <li>• Expanded national board structure and formal advisory councils</li>
                  <li>• Large-scale service delivery across Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="join" className="relative py-20 bg-gradient-to-br from-aurora-purple via-aurora-blue to-aurora-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-aurora-purple/20 to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-canadian-snow">Get Involved</h2>
          <p className="text-xl mb-8 text-gray-100">There is room to shape this work from the start.</p>
          <div className="inline-block glass bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-elevation-4 text-left">
            <ul className="space-y-3 text-lg text-gray-100 mb-6">
              <li>Join the founding list for updates and early invites.</li>
              <li>Partner with us for the online course launch, then pilot cohorts and workflow tests as we scale.</li>
              <li>Contribute expertise or explore board participation.</li>
            </ul>
            <p className="text-lg mb-2">
              Connect with us at{" "}
              <a
                href="mailto:hello@cognitivecommons.ca"
                className="underline hover:text-canadian-snow font-semibold transition-colors"
              >
                hello@cognitivecommons.ca
              </a>
            </p>
            <p className="text-sm text-gray-200">We will never ask for sensitive data by email. No spam.</p>
            <p className="text-sm text-gray-200">Updates coming soon. Work is underway now.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
