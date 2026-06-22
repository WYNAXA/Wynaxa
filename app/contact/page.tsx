import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Wynaxa",
  description: "Get in touch with Wynaxa.",
};

const offices = [
  {
    label: "HQ",
    city: "Dublin",
    country: "Ireland",
    photo: "/cities/dublin.jpg",
  },
  {
    label: "Office",
    city: "Bristol",
    country: "United Kingdom",
    photo: "/cities/bristol.jpg",
  },
  {
    label: "Office",
    city: "Surat",
    country: "India",
    photo: "/cities/surat.jpg",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Whether you&apos;re an investor, potential partner or member of the
            press, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Offices */}
          <h2 className="text-2xl font-semibold text-[#0B0F12]">
            Our Offices
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="relative overflow-hidden rounded-lg p-6"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${office.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "180px",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0E8C7F]">
                  {office.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {office.city}
                </p>
                <p className="mt-1 text-sm text-gray-300">{office.country}</p>
              </div>
            ))}
          </div>

          {/* Email contacts */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-[#0B0F12]">
                General Enquiries
              </h2>
              <a
                href="mailto:info@wynaxa.com"
                className="mt-3 block text-[#0E8C7F] hover:underline"
              >
                info@wynaxa.com
              </a>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0B0F12]">
                Investor Relations
              </h2>
              <a
                href="mailto:investors@wynaxa.com"
                className="mt-3 block text-[#0E8C7F] hover:underline"
              >
                investors@wynaxa.com
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="mt-20 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold text-[#0B0F12]">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form
              action="mailto:info@wynaxa.com"
              method="POST"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#0B0F12]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#0B0F12] placeholder-gray-400 outline-none transition-colors focus:border-[#0E8C7F] focus:ring-1 focus:ring-[#0E8C7F]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#0B0F12]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#0B0F12] placeholder-gray-400 outline-none transition-colors focus:border-[#0E8C7F] focus:ring-1 focus:ring-[#0E8C7F]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#0B0F12]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#0B0F12] placeholder-gray-400 outline-none transition-colors focus:border-[#0E8C7F] focus:ring-1 focus:ring-[#0E8C7F]"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
