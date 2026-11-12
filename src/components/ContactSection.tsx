import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-200/80 bg-slate-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold mb-2">
            Get In Touch · Collaboration & Opportunities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Connect With Shikhar Mishra
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Currently open to Backend Developer, Java Engineer, and Software Engineering internships or entry-level roles. Let's discuss scalable software and algorithmic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/80 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-indigo-50 text-indigo-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  aria-label="Copy email address"
                  className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  {copiedKey === 'email' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/80 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-teal-50 text-teal-700">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Phone Number</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs font-semibold text-slate-800 hover:text-teal-700 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200/80">
                <div className="p-2 rounded bg-rose-50 text-rose-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">Location</div>
                  <div className="text-xs font-semibold text-slate-800">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Hub Links */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                Verified Developer Profiles
              </h3>

              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <Github className="h-4 w-4 text-slate-700" />
                    <span className="text-slate-800 font-semibold">GitHub</span>
                    <span className="text-slate-500">// @{PERSONAL_INFO.githubUsername}</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-800 font-semibold">LinkedIn</span>
                    <span className="text-slate-500">// {PERSONAL_INFO.linkedinUsername}</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <Code2 className="h-4 w-4 text-amber-600" />
                    <span className="text-slate-800 font-semibold">LeetCode</span>
                    <span className="text-slate-500">// @{PERSONAL_INFO.leetcodeUsername}</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2 mb-2">
                <MessageSquare className="h-4 w-4 text-indigo-600" />
                <span>Send a Message to Shikhar</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Have an inquiry or project proposal? Fill out the details below:
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/80 text-center space-y-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                    Your message has been dispatched. Shikhar will get back to you at{' '}
                    <span className="text-indigo-700 font-mono font-semibold">{formData.email}</span> as soon as possible.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 font-medium mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 font-medium mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 font-medium mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 font-medium mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project, or technical question..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm active:scale-95"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Transmit Message</span>
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="text-xs font-mono text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      Or open via email client ↗
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
