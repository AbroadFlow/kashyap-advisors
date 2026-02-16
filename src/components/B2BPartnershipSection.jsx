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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white font-sans overflow-hidden">
      <style>{`
       

        
       
      `}</style>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

     

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 py-20 noise">
        <div className="text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Strategic B2B Partnership Proposal</span>
          </div>
          
          <h2 className="text-6xl font-bold serif-heading mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            Partner with
            <br />
            <span className="gradient-text">Kashyap Advisors</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
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
        <div className="grid grid-cols-4 gap-6 mt-20 px-16 animate-scaleIn" style={{animationDelay: '0.5s'}}>
          {[
            { value: "€8,200", label: "Annual Stipend", sublabel: "Regional Scholarships" },
            { value: "2.6+", label: "Min CGPA", sublabel: "Bachelor's Eligibility" },
            { value: "10 Years", label: "Academic Gap", sublabel: "Master's Programs" },
            { value: "Sept", label: "Main Intake", sublabel: "Application Cycle" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 text-center hover:bg-white/10 transition-all" style={{animationDelay: `${0.6 + idx * 0.1}s`}}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-300">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative max-w-7xl mx-auto px-16 py-12">
        <div className="flex gap-4 border-b border-white/10">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'advantages', label: 'Italy Advantages' },
            { id: 'commitment', label: 'Our Commitment' },
            { id: 'technology', label: 'CRM Technology' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-all relative ${
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
      <section className="relative max-w-7xl mx-auto px-16 pb-20">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-12 animate-fadeInUp">
            <div>
              <h3 className="text-3xl font-bold serif-heading mb-6">Why Partner With Us?</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Kashyap Advisors operates with <span className="text-blue-400 font-semibold">structured expertise</span> in Italian public university admissions, regional scholarship processing, and embassy compliant visa documentation.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our Italy division maintains <span className="text-purple-400 font-semibold">defined workflows, compliance protocols, and dedicated case management</span> to ensure accuracy, transparency, and high visa success standards.
              </p>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Long-Term Institutional Partnership
                </h4>
                <p className="text-sm text-slate-400">
                  Our objective is not transactional engagement, but a sustained collaboration built on reliability, systemization, and trust.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6">Partnership Benefits</h4>
              <div className="space-y-4">
                {[
                  "Backend processing infrastructure",
                  "Compliance & risk management",
                  "Dedicated coordination team",
                  "Transparent case tracking",
                  "Lifetime CRM subscription (valued separately)",
                  "Operational scaling support"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advantages' && (
          <div className="animate-fadeInUp">
            <h3 className="text-4xl font-bold serif-heading mb-4 text-center">Strategic Advantage: Study in Italy</h3>
            <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
              Italy remains one of the most suitable destinations for Nepali students, considering the combination of tuition-free public universities, regional scholarships with living stipends, and strong post-study mobility across Europe. Our partnership model allows you to leverage these advantages without operational overhead.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {advantages.map((adv, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredCard === idx ? 'scale-110' : ''}`}>
                    {React.cloneElement(adv.icon, { className: 'w-7 h-7 text-blue-300' })}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
                  <p className="text-slate-400">{adv.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 serif-heading">Eligibility Framework</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-sm text-blue-400 font-semibold mb-2">BACHELOR'S PROGRAMS</div>
                  <div className="text-2xl font-bold mb-2">2.6 CGPA</div>
                  <div className="text-slate-400">Minimum requirement</div>
                  <div className="text-slate-400 mt-4">Up to <span className="text-white font-semibold">5 years</span> academic gap accepted</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="text-sm text-purple-400 font-semibold mb-2">MASTER'S PROGRAMS</div>
                  <div className="text-2xl font-bold mb-2">60% Marks</div>
                  <div className="text-slate-400">Minimum requirement</div>
                  <div className="text-slate-400 mt-4">Up to <span className="text-white font-semibold">10 years</span> academic gap accepted</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commitment' && (
          <div className="animate-fadeInUp">
            <h3 className="text-4xl font-bold serif-heading mb-4 text-center">Our Commitment as Your Backend Partner</h3>
            <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
              Comprehensive support infrastructure for seamless Italy admissions and visa processing
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {commitments.map((commitment, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all animate-scaleIn"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="font-semibold text-lg leading-relaxed">{commitment}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass-card rounded-2xl p-10 text-center border-2 border-blue-500/30">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h4 className="text-2xl font-bold mb-4 serif-heading">Compliance & Quality Assurance</h4>
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Every case undergoes structured compliance checks to reduce risk and ensure embassy-aligned documentation. Our systematic approach prioritizes accuracy, transparency, and high visa success rates.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="animate-fadeInUp">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">Exclusive Technology Advantage</span>
              </div>
              <h3 className="text-4xl font-bold serif-heading mb-4">Consult PRO CRM</h3>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Complimentary <span className="text-purple-400 font-semibold">lifetime subscription</span> for all B2B partners, proprietary consultancy management system developed by Kashyap Tech
              </p>
            </div>

            <div className="grid grid-cols-5 gap-6 mb-12">
              {crmFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105 cursor-pointer animate-scaleIn"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                    {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-purple-300' })}
                  </div>
                  <p className="text-sm font-semibold">{feature.label}</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-10">
              <h4 className="text-2xl font-bold mb-6 serif-heading">System Capabilities</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-lg mb-4 text-blue-300">Operational Excellence</h5>
                  <ul className="space-y-3">
                    {[
                      "Lead lifecycle automation",
                      "Centralized student database",
                      "Document checklist systems",
                      "Workflow standardization"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-4 text-purple-300">Strategic Insights</h5>
                  <ul className="space-y-3">
                    {[
                      "Performance analytics dashboards",
                      "Team productivity monitoring",
                      "Conversion tracking metrics",
                      "Operational transparency reports"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-400/20">
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-bold text-white">Technology integration ensures</span> your consultancy operates with enhanced efficiency, accountability, and scalability  creating a strong competitive advantage in Nepal's evolving education consultancy landscape.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="relative max-w-7xl mx-auto px-16 pb-20">
        <div className="glass-card rounded-3xl p-12 text-center border-2 border-blue-500/30 shimmer">
         <Handshake className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold serif-heading mb-4">Ready to Build a Strategic Partnership?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
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
            <div className="max-w-md mx-auto">
              <p className="text-blue-200 mb-3 text-sm font-medium">For B2B Partnership Inquiries</p>
              <a 
                href="mailto:partners@kashyapadvisors.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">partners@kashyapadvisors.com</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
        </div>
      </section>

    
    </div>
  );
}