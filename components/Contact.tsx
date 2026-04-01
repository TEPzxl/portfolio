"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const EMAIL = "tepzxl2002@outlook.com";
const GITHUB_URL = "https://github.com/tepzxl";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  }

  return (
    <section id="contact" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/3 p-8 backdrop-blur-sm md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Get in touch
            </p>

            <h2 className="mt-3 bg-linear-to-r from-white via-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Contact Me
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-300">
              I&apos;m always open to discussing web development, Go backend
              learning, full-stack projects, and opportunities to keep improving
              as an engineer.
            </p>

            <p className="mt-4 text-sm text-neutral-400">
              Feel free to reach out if you&apos;d like to collaborate or just
              say hello.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/15 bg-linear-to-br from-white/5 to-white/2 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="mb-3 flex items-center gap-3 text-white">
                <Mail className="h-5 w-5" />
                <h3 className="text-base font-semibold">Email</h3>
              </div>

              <p className="text-sm text-neutral-300">{EMAIL}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-300 ${
                    copied
                      ? "scale-[1.02] bg-linear-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20"
                      : "bg-linear-to-r from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20 hover:scale-[1.02] hover:shadow-blue-500/30"
                  }`}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied!" : "Copy Email"}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
              </div>

              <div className="mt-3 min-h-5">
                {copied ? (
                  <p className="text-sm text-emerald-400">
                    Email copied to clipboard.
                  </p>
                ) : (
                  <p className="text-sm text-neutral-500">
                    Click the button to quickly copy my email address.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/4 to-white/2 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="mb-3 flex items-center gap-3 text-white">
                <FaGithub className="h-5 w-5" />
                <h3 className="text-base font-semibold">GitHub</h3>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}