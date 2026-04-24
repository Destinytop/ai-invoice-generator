"use client";

import { useState } from "react";
import { 
  FileText, 
  Zap, 
  Shield, 
  Download, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Mail,
  Building2,
  DollarSign,
  Calendar,
  CreditCard
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-dark-50">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-primary-400 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="blob bg-purple-400 w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 animation-delay-2000"></div>
        <div className="blob bg-pink-400 w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Invoice Generator</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">How It Works</a>
              <a href="#pricing" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">Pricing</a>
              <a href="#faq" className="text-dark-600 hover:text-dark-900 transition-colors font-medium">FAQ</a>
              <a href="#generator" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:scale-105">
                Try Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-primary-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-dark-700 font-medium">Free & No Signup Required</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-dark-950">
            Create Professional
            <span className="gradient-text block">Invoices with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Generate stunning, professional invoices in seconds. Perfect for freelancers, 
            small businesses, and entrepreneurs. Get paid faster with AI-powered invoice creation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#generator" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all transform hover:scale-105 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Create Invoice Free
            </a>
            <button className="px-8 py-4 glass text-dark-700 rounded-full font-semibold hover:bg-white transition-all flex items-center border border-dark-200">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              See Examples
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-dark-500 mt-1 text-sm">Invoices Created</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-dark-500 mt-1 text-sm">User Rating</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-dark-500 mt-1 text-sm">Free to Start</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift border border-dark-100">
              <div className="text-3xl font-bold gradient-text">&lt;30s</div>
              <div className="text-dark-500 mt-1 text-sm">Creation Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-950">Try It Now</h2>
            <p className="text-dark-600 text-lg">Generate your first professional invoice in seconds</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 glow border border-dark-200">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Invoice Form Preview */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-dark-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-5 h-5 text-primary-500" />
                      <span className="font-semibold text-dark-800">Your Business</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">INVOICE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-dark-50 rounded-lg">
                      <Mail className="w-4 h-4 text-dark-400" />
                      <span className="text-sm text-dark-600">client@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-dark-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-dark-400" />
                      <span className="text-sm text-dark-600">Invoice Date: {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-dark-50 rounded-lg">
                      <DollarSign className="w-4 h-4 text-dark-400" />
                      <span className="text-sm text-dark-600">Amount: $1,250.00</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-dark-100">
                    <div className="flex justify-between items-center">
                      <span className="text-dark-600">Total Due:</span>
                      <span className="text-2xl font-bold text-dark-900">$1,250.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-dark-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI will generate a professional PDF invoice</span>
                </div>
              </div>

              {/* CTA Side */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-dark-900">What You Get</h3>
                  <ul className="space-y-3">
                    {[
                      "Professional PDF invoice",
                      "Customizable templates",
                      "Tax calculation included",
                      "Payment terms & methods",
                      "Company branding",
                      "Instant download"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-dark-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 border border-primary-100">
                  <p className="text-sm text-dark-600 mb-4">
                    Enter your email to get started. No credit card required.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                      Start Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">Why Choose AI Invoice Generator?</h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              Professional-grade invoice creation powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-7 h-7 text-primary-500" />,
                title: "Lightning Fast",
                desc: "Create professional invoices in under 30 seconds. No more manual formatting or calculations."
              },
              {
                icon: <Shield className="w-7 h-7 text-primary-500" />,
                title: "100% Secure",
                desc: "Your data is encrypted and never stored. We prioritize your business privacy and security."
              },
              {
                icon: <Download className="w-7 h-7 text-primary-500" />,
                title: "PDF Export",
                desc: "Download your invoices as professional PDFs ready to send to clients immediately."
              },
              {
                icon: <CreditCard className="w-7 h-7 text-primary-500" />,
                title: "Payment Integration",
                desc: "Add payment links for Stripe, PayPal, or bank transfer. Get paid faster."
              },
              {
                icon: <Clock className="w-7 h-7 text-primary-500" />,
                title: "Auto-Calculations",
                desc: "Automatic tax calculations, subtotals, and totals. No more math errors."
              },
              {
                icon: <Building2 className="w-7 h-7 text-primary-500" />,
                title: "Business Branding",
                desc: "Add your logo, company colors, and custom fields. Make it truly yours."
              }
            ].map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover-lift border border-dark-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-900">{feature.title}</h3>
                <p className="text-dark-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">How It Works</h2>
            <p className="text-dark-600 text-lg">Three simple steps to professional invoices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Enter Details",
                desc: "Fill in your business info, client details, and invoice items. AI handles the formatting."
              },
              {
                num: "2",
                title: "AI Generation",
                desc: "Our AI creates a professional, beautifully formatted invoice in seconds."
              },
              {
                num: "3",
                title: "Download & Send",
                desc: "Download your PDF invoice or send directly to your client via email."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="glass rounded-2xl p-8 text-center hover-lift border border-dark-100">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">{step.title}</h3>
                  <p className="text-dark-600">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-dark-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">Simple, Transparent Pricing</h2>
            <p className="text-dark-600 text-lg">Start free, upgrade when you need more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="glass rounded-2xl p-8 border border-dark-100 hover-lift">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Free</h3>
                <div className="text-4xl font-bold text-dark-900">$0</div>
                <div className="text-dark-500 text-sm">Forever free</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "3 invoices per month",
                  "Basic templates",
                  "PDF export",
                  "Email support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-dark-200 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-all">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass rounded-2xl p-8 border-2 border-primary-500 relative transform scale-105 glow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Pro</h3>
                <div className="text-4xl font-bold gradient-text">$9</div>
                <div className="text-dark-500 text-sm">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited invoices",
                  "Premium templates",
                  "Custom branding",
                  "Payment integration",
                  "Priority support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Upgrade to Pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="glass rounded-2xl p-8 border border-dark-100 hover-lift">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-dark-900">Business</h3>
                <div className="text-4xl font-bold text-dark-900">$29</div>
                <div className="text-dark-500 text-sm">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Pro",
                  "Team collaboration",
                  "API access",
                  "Advanced analytics",
                  "Dedicated support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-dark-200 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-950">Loved by Freelancers</h2>
            <p className="text-dark-600 text-lg">Join thousands of satisfied users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Freelance Designer",
                content: "This tool saved me hours every month. Invoices look professional and clients pay faster!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Consultant",
                content: "The AI-generated invoices are perfect. Clean, professional, and includes everything I need.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Small Business Owner",
                content: "Best invoice generator I've used. The free tier is generous and the Pro features are worth every penny.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass rounded-2xl p-8 border border-dark-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-dark-900">{testimonial.name}</div>
                    <div className="text-sm text-dark-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark-950">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is AI Invoice Generator really free?",
                a: "Yes! Our free plan includes 3 invoices per month with no credit card required. Upgrade to Pro for unlimited invoices and premium features."
              },
              {
                q: "Can I add my company logo?",
                a: "Absolutely! Pro and Business plans allow you to upload your logo and customize colors to match your brand."
              },
              {
                q: "What payment methods can I add?",
                a: "You can add Stripe, PayPal, bank transfer details, or any custom payment instructions to your invoices."
              },
              {
                q: "Are the invoices legally compliant?",
                a: "Yes, our invoices include all required fields like invoice numbers, dates, itemized lists, and tax calculations. Always consult your local tax authority for specific requirements."
              }
            ].map((faq, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-dark-100">
                <details className="group">
                  <summary className="w-full px-8 py-6 text-left flex justify-between items-center cursor-pointer hover:bg-dark-50 transition-colors">
                    <span className="font-semibold text-dark-900">{faq.q}</span>
                    <span className="transform group-open:rotate-180 transition-transform">
                      <ArrowRight className="w-5 h-5 text-dark-400 rotate-90" />
                    </span>
                  </summary>
                  <div className="px-8 pb-6 text-dark-600">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 glow border border-dark-200">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-950">Ready to Create Invoices?</h2>
            <p className="text-xl text-dark-600 mb-8">Join 50,000+ freelancers and businesses using AI Invoice Generator</p>
            <a href="#generator" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Create Free Invoice Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold gradient-text">AI Invoice Generator</span>
            </div>
            <div className="flex space-x-6 text-sm text-dark-500">
              <a href="#" className="hover:text-dark-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-dark-700 transition-colors">Terms</a>
              <a href="#" className="hover:text-dark-700 transition-colors">Contact</a>
            </div>
            <p className="text-dark-400 text-sm mt-4 md:mt-0">
              © 2026 AI Invoice Generator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
