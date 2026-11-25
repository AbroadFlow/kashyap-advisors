import React, { useState } from 'react';
import { CheckCircle, Globe, TrendingUp, Award, Users, FileText, BarChart3, ArrowRight, Sparkles, GraduationCap, Target, Shield, Handshake  } from 'lucide-react';

export default function KashyapPartnershipProposal() {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState(null);

  const advantages = [
    { icon: <GraduationCap />, title: "Tuition-Free Education", desc: "Public universities with scholarship schemes" },
    { icon: <Award />, title: "€8,200 Annual Stipend", desc: "Regional scholarships with living support" },
    { icon: <Globe />, title: "EU Mobility", desc: "Strong post-study opportunities across Europe" },
    { icon: <Target />, title: "Flexible Eligibility", desc: "Bachelor's: 2.6 CGPA | Master's: 60%" }
  ];

  const commitments = [
    "End-to-end university application management",
    "Pre-enrollment and scholarship advisory",
    "Embassy-aligned visa documentation",
    "Structured compliance checks",
    "Dedicated case tracking & reporting",
    "Transparent operational clarity"
  ];

  const crmFeatures = [
    { icon: <Users />, label: "Lead Lifecycle Management" },
    { icon: <FileText />, label: "Centralized Case Tracking" },
    { icon: <CheckCircle />, label: "Document Standardization" },
    { icon: <BarChart3 />, label: "Performance Analytics" },
    { icon: <Shield />, label: "Team Workflow Monitoring" }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'advantages', label: 'Italy Advantages' },
    { id: 'commitment', label: 'Our Commitment' },
    { id: 'technology', label: 'CRM Technology' }
  ];

  return (
    <div className="b2b-partnership min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 font-sans text-white">
      <style>{`
        .b2b-tabs {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .b2b-tabs::-webkit-scrollbar {
          display: none;
        }

        .b2b-partnership .serif-heading {
          letter-spacing: -0.02em;
        }

        @media (prefers-reduced-motion: reduce) {
          .b2b-partnership *,
          .b2b-partnership *::before,
          .b2b-partnership *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-24 top-10 h-64 w-64 animate-float rounded-full bg-blue-500/10 opacity-60 blur-3xl sm:right-10 sm:top-20 sm:h-80 sm:w-80 sm:opacity-100 lg:right-20 lg:h-96 lg:w-96"></div>
        <div className="absolute -bottom-10 -left-24 h-64 w-64 animate-float rounded-full bg-purple-500/10 opacity-60 blur-3xl sm:bottom-20 sm:left-10 sm:h-80 sm:w-80 sm:opacity-100 lg:left-20 lg:h-96 lg:w-96" style={{animationDelay: '2s'}}></div>
        <div className="absolute left-1/4 top-1/2 h-64 w-64 animate-float rounded-full bg-pink-500/10 opacity-40 blur-3xl sm:h-80 sm:w-80 sm:opacity-100 lg:h-96 lg:w-96" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="noise relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="animate-fadeInUp text-center">
          <div className="mx-auto inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1.5 text-center sm:px-4 sm:py-2">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-yellow-300 sm:h-4 sm:w-4" />
            <span className="text-[11px] font-medium leading-snug sm:text-sm">Strategic B2B Partnership Proposal</span>
          </div>

          <h2 className="animate-fadeInUp mb-5 mt-6 break-words text-3xl font-bold leading-[1.15] tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl" style={{animationDelay: '0.1s'}}>
            Partner with
            <br />
            <span className="gradient-text">Kashyap Advisors</span>
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-xl">
            Partner with Nepal's specialized Italian education consultancy for end-to-end admissions, visa processing, and complimentary enterprise CRM technology.
          </p>

          {/* schedule a meeting */}
          {/* <div className="flex justify-center gap-4 mt-10 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <button 
              onClick={() => setActiveTab('advantages')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Partnership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-card rounded-xl font-semibold hover:bg-white/10 transition-all">
              Schedule Meeting
            </button>
          </div> */}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 grid animate-scaleIn grid-cols-2 gap-3 px-0 sm:mt-14 sm:gap-4 sm:px-4 md:px-8 lg:mt-20 lg:grid-cols-4 lg:gap-6 lg:px-8 xl:px-16" style={{ animationDelay: '0.5s' }}>
          {[
            { value: "€8,200", label: "Annual Stipend", sublabel: "Regional Scholarships" },
            { value: "2.6+", label: "Min CGPA", sublabel: "Bachelor's Eligibility" },
            { value: "10 Years", label: "Academic Gap", sublabel: "Master's Programs" },
            { value: "Sept", label: "Main Intake", sublabel: "Application Cycle" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-card min-w-0 rounded-xl p-4 text-center transition-all hover:bg-white/10 sm:rounded-2xl sm:p-5 lg:p-6"
              style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
            >
              <div className="gradient-text mb-1 break-words text-xl font-bold leading-tight sm:mb-2 sm:text-2xl lg:text-3xl">{stat.value}</div>
              <div className="text-xs font-semibold leading-snug text-slate-300 sm:text-sm">{stat.label}</div>
              <div className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div role="tablist" aria-label="Partnership proposal sections" className="b2b-tabs -mx-4 flex gap-1.5 overflow-x-auto border-b border-white/10 px-4 sm:-mx-6 sm:gap-2 sm:px-6 lg:-mx-8 lg:gap-4 lg:px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={activeTab === tab.id ? `panel-${tab.id}` : undefined}
              onClick={() => setActiveTab(tab.id)}
              className={`relative shrink-0 whitespace-nowrap px-3 py-2.5 text-xs font-semibold transition-all sm:px-4 sm:py-3 sm:text-sm lg:px-6 lg:text-base ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        {activeTab === 'overview' && (
          <div className="grid animate-fadeInUp grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="serif-heading mb-5 text-2xl font-bold sm:mb-6 sm:text-3xl">Why Partner With Us?</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300 sm:mb-6 sm:text-base">
                Kashyap Advisors operates with <span className="font-semibold text-blue-400">structured expertise</span> in Italian public university admissions, regional scholarship processing, and embassy com pliant visa documentation.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-300 sm:mb-6 sm:text-base">
                Our Italy division maintains <span className="font-semibold text-purple-400">defined workflows, compliance protocols, and dedicated case management</span> to ensure accuracy, transparency, and high visa success standards.
              </p>
              <div className="glass-card rounded-xl border-l-4 border-blue-500 p-5 sm:rounded-2xl sm:p-6">
                <h4 className="mb-2 flex items-center gap-2 text-base font-bold sm:text-lg">
                  <TrendingUp className="h-5 w-5 shrink-0 text-blue-400" />
                  Long-Term Institutional Partnership
                </h4>
                <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                  Our objective is not transactional engagement, but a sustained collaboration built on reliability, systemization, and trust.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-8">
              <h4 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">Partnership Benefits</h4>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Backend processing infrastructure",
                  "Compliance & risk management",
                  "Dedicated coordination team",
                  "Transparent case tracking",
                  "Lifetime CRM subscription (valued separately)",
                  "Operational scaling support"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                    <span className="text-sm text-slate-300 sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advantages' && (
          <div className="animate-fadeInUp">
            <h3 className="serif-heading mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">Strategic Advantage: Study in Italy</h3>
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-400 sm:mb-12 sm:text-base">
              Italy remains one of the most suitable destinations for Nepali students, considering the combination of tuition-free public universities, regional scholarships with living stipends, and strong post-study mobility across Europe. Our partnership model allows you to leverage these advantages without operational overhead.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
              {advantages.map((adv, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setHoveredCard(idx)}
                  onBlur={() => setHoveredCard(null)}
                  tabIndex={0}
                  className="glass-card cursor-pointer rounded-xl p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:rounded-2xl sm:p-6 lg:p-8"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-300 sm:mb-6 sm:h-14 sm:w-14 ${hoveredCard === idx ? 'scale-110' : ''}`}>
                    {React.cloneElement(adv.icon, { className: 'h-6 w-6 text-blue-300 sm:h-7 sm:w-7' })}
                  </div>
                  <h4 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">{adv.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-8">
              <h4 className="serif-heading mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">Eligibility Framework</h4>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                  <div className="mb-2 text-[11px] font-semibold text-blue-400 sm:text-sm">BACHELOR'S PROGRAMS</div>
                  <div className="mb-2 text-xl font-bold sm:text-2xl">2.6 CGPA</div>
                  <div className="text-xs text-slate-400 sm:text-sm">Minimum requirement</div>
                  <div className="mt-3 text-xs text-slate-400 sm:mt-4 sm:text-sm">Up to <span className="font-semibold text-white">5 years</span> academic gap accepted</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                  <div className="mb-2 text-[11px] font-semibold text-purple-400 sm:text-sm">MASTER'S PROGRAMS</div>
                  <div className="mb-2 text-xl font-bold sm:text-2xl">60% Marks</div>
                  <div className="text-xs text-slate-400 sm:text-sm">Minimum requirement</div>
                  <div className="mt-3 text-xs text-slate-400 sm:mt-4 sm:text-sm">Up to <span className="font-semibold text-white">10 years</span> academic gap accepted</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commitment' && (
          <div className="animate-fadeInUp">
            <h3 className="serif-heading mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">Our Commitment as Your Backend Partner</h3>
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-400 sm:mb-12 sm:text-base">
              Comprehensive support infrastructure for seamless Italy admissions and visa processing
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {commitments.map((commitment, idx) => (
                <div
                  key={idx}
                  className="glass-card animate-scaleIn rounded-xl p-5 transition-all hover:bg-white/10 sm:rounded-2xl sm:p-6 lg:p-8"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 sm:h-12 sm:w-12">
                    <CheckCircle className="h-5 w-5 text-green-400 sm:h-6 sm:w-6" />
                  </div>
                  <p className="text-base font-semibold leading-relaxed sm:text-lg">{commitment}</p>
                </div>
              ))}
            </div>

            <div className="glass-card mt-8 rounded-xl border-2 border-blue-500/30 p-6 text-center sm:mt-12 sm:rounded-2xl sm:p-8 lg:p-10">
              <Shield className="mx-auto mb-4 h-12 w-12 text-blue-400 sm:mb-6 sm:h-16 sm:w-16" />
              <h4 className="serif-heading mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">Compliance & Quality Assurance</h4>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Every case undergoes structured compliance checks to reduce risk and ensure embassy-aligned documentation. Our systematic approach prioritizes accuracy, transparency, and high visa success rates.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="animate-fadeInUp">
            <div className="mb-8 text-center sm:mb-12">
              <div className="mx-auto mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1.5 text-center sm:mb-6 sm:px-4 sm:py-2">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-yellow-300 sm:h-4 sm:w-4" />
                <span className="text-[11px] font-medium leading-snug sm:text-sm">Exclusive Technology Advantage</span>
              </div>
              <h3 className="serif-heading mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">Consult PRO CRM</h3>
              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Complimentary <span className="font-semibold text-purple-400">lifetime subscription</span> for all B2B partners, proprietary consultancy management system developed by Kashyap Tech
              </p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-6">
              {crmFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="glass-card animate-scaleIn cursor-pointer rounded-xl p-4 text-center transition-all hover:-translate-y-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 sm:rounded-2xl sm:p-6"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 sm:mb-4 sm:h-12 sm:w-12">
                    {React.cloneElement(feature.icon, { className: 'h-5 w-5 text-purple-300 sm:h-6 sm:w-6' })}
                  </div>
                  <p className="break-words text-[11px] font-semibold leading-snug sm:text-sm">{feature.label}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-8 lg:p-10">
              <h4 className="serif-heading mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">System Capabilities</h4>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <h5 className="mb-3 text-base font-bold text-blue-300 sm:mb-4 sm:text-lg">Operational Excellence</h5>
                  <ul className="space-y-3">
                    {[
                      "Lead lifecycle automation",
                      "Centralized student database",
                      "Document checklist systems",
                      "Workflow standardization"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 sm:text-sm">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="mb-3 text-base font-bold text-purple-300 sm:mb-4 sm:text-lg">Strategic Insights</h5>
                  <ul className="space-y-3">
                    {[
                      "Performance analytics dashboards",
                      "Team productivity monitoring",
                      "Conversion tracking metrics",
                      "Operational transparency reports"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 sm:text-sm">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-purple-400/20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-4 sm:mt-8 sm:p-6">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <span className="font-bold text-white">Technology integration ensures</span> your consultancy operates with enhanced efficiency, accountability, and scalability  creating a strong competitive advantage in Nepal's evolving education consultancy landscape.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="glass-card shimmer rounded-2xl border-2 border-blue-500/30 p-6 text-center sm:rounded-3xl sm:p-8 lg:p-12">
          <Handshake className="mx-auto mb-4 h-12 w-12 sm:mb-6 sm:h-16 sm:w-16" />
          <h3 className="serif-heading mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">Ready to Build a Strategic Partnership?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mb-8 sm:text-base">
            Let's discuss partnership structure, operational alignment, and mutual growth strategy at your convenience.
          </p>
          {/* <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2 group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-card rounded-xl font-semibold hover:bg-white/10 transition-all">
              Download Proposal PDF
            </button>
          </div> */}

          {/* Contact Email Highlight */}
          <div className="mx-auto max-w-md">
            <p className="mb-3 text-xs font-medium text-blue-200 sm:text-sm">For B2B Partnership Inquiries</p>
            <a
              href="mailto:partners@kashyapadvisors.com"
              className="group inline-flex w-full max-w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-center font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-base sm:hover:scale-[1.02] lg:text-lg"
            >
              <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="min-w-0 break-words text-xs sm:text-base lg:text-lg">partners@kashyapadvisors.com</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
