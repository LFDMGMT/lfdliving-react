import { useEffect, useState } from "react";

const showcaseSlides = [
  {
    kind: "logo",
    title: "LFD Management LLC",
    subtitle:
      "Professional property management across Southern California with a focus on leasing, operations, and responsive tenant support.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kind: "photo",
    title: "Inglewood Market Presence",
    subtitle:
      "Serving communities near major entertainment, employment, and growth corridors, including the SoFi Stadium area.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kind: "photo",
    title: "Hawthorne and Innovation Corridor",
    subtitle:
      "Positioned near major employers and rapidly evolving South Bay markets, including the SpaceX and Hawthorne area.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kind: "photo",
    title: "Coastal Reach",
    subtitle:
      "Supporting residents and properties across desirable South Bay communities, including areas connected to Redondo Beach.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kind: "photo",
    title: "Regional Expansion",
    subtitle:
      "Extending management presence into broader Southern California markets, including the Riverside County region.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=80",
  },
];

const locations = ["Inglewood", "Gardena", "Torrance", "Hawthorne", "Los Angeles", "Redondo Beach", "Palm Desert", "Cathedral City", "Bermuda Dunes", "La Quinta"];

const valueProps = [
  {
    title: "Professional Management",
    text: "Hands-on property management with responsive communication, operational clarity, and market-aware leasing support.",
  },
  {
    title: "Efficient Leasing Process",
    text: "From inquiry to application, the process is designed to be straightforward, mobile-friendly, and easy to navigate.",
  },
  {
    title: "Regional Market Reach",
    text: "Serving key Southern California markets with local familiarity, practical oversight, and consistent property operations.",
  },
];

const leasingSteps = [
  "Browse current availability and compare options.",
  "Review details and submit your inquiry or application.",
  "Complete the application through AppFolio.",
  "Receive updates from the leasing team as your application moves forward.",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: "",
    error: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = showcaseSlides[currentSlide];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: "", error: "" });

    try {
      const payload = new FormData();
      payload.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      payload.append("subject", "New LFD Management LLC Lead");
      payload.append("from_name", "LFD Management LLC Website");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitting: false,
          success: "Your message was sent successfully.",
          error: "",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          success: "",
          error: "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: "",
        error: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight">LFD Management LLC</div>
            <div className="text-sm text-neutral-500">
              Professional property management across Southern California
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="/" className="transition hover:text-neutral-600">
              Home
            </a>
            <a href="/listings" className="transition hover:text-neutral-600">
              Listings
            </a>
            <a href="#locations" className="transition hover:text-neutral-600">
              Locations
            </a>
            <a href="#contact" className="transition hover:text-neutral-600">
              Contact
            </a>
          </nav>

          <a
            href="/listings"
            className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            View Rentals
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden">
        {current.kind === "logo" ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
        )}

        <div className={`absolute inset-0 ${current.kind === "logo" ? "bg-white/35" : "bg-black/55"}`} />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="max-w-2xl">
            <div
              className={`mb-4 inline-flex rounded-full border px-4 py-1 text-sm backdrop-blur ${
                current.kind === "logo"
                  ? "border-neutral-300 bg-white/80 text-neutral-700"
                  : "border-white/20 bg-white/10 text-white"
              }`}
            >
              Leasing made easier
            </div>

            <h1
              className={`text-4xl font-semibold leading-tight md:text-6xl ${
                current.kind === "logo" ? "text-neutral-900" : "text-white"
              }`}
            >
              Thoughtful rental living with a clean, modern leasing experience.
            </h1>

            <p
              className={`mt-6 text-base leading-7 md:text-lg ${
                current.kind === "logo" ? "text-neutral-700" : "text-neutral-100"
              }`}
            >
              Discover professionally managed homes, transparent communication, and an application
              process designed to move quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/listings"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800"
              >
                Browse Available Rentals
              </a>
              <a
                href="https://lfdpm.appfolio.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  current.kind === "logo"
                    ? "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
                    : "border border-white/40 text-white hover:bg-white/10"
                }`}
              >
                Apply Now
              </a>
            </div>
          </div>

          <div
            className={`self-end rounded-3xl border p-6 shadow-2xl backdrop-blur ${
              current.kind === "logo"
                ? "border-neutral-200 bg-white/90 text-neutral-900"
                : "border-white/15 bg-white/10 text-white"
            }`}
          >
            {current.kind === "logo" ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white p-10 text-center">
                <div className="mb-6 text-4xl font-semibold tracking-tight">LFD Management LLC</div>
                <div className="max-w-md text-sm leading-7 text-neutral-600">
                  Professional property management with a polished leasing experience and strong
                  regional market presence.
                </div>
              </div>
            ) : (
              <>
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-200">
                  Featured Area
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{current.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-100">{current.subtitle}</p>
              </>
            )}

            <div className="mt-8 flex gap-2">
              {showcaseSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    currentSlide === index
                      ? current.kind === "logo"
                        ? "bg-neutral-900"
                        : "bg-white"
                      : current.kind === "logo"
                      ? "bg-neutral-300"
                      : "bg-white/40"
                  }`}
                  aria-label={`Go to ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Why residents choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built around clarity, responsiveness, and strong property operations.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="listings" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Brand Showcase
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Local reach. Professional management. Strong market presence.
              </h2>
            </div>

            <a
              href="https://lfdpm.appfolio.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Apply Now
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="h-[420px] overflow-hidden bg-neutral-200">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Featured Area
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">{current.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
                    {current.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/listings"
                      className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      View Live Listings
                    </a>

                    <a
                      href="https://lfdpm.appfolio.com/listings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                    >
                      Apply Now
                    </a>
                  </div>

                  <div className="mt-8 flex gap-2">
                    {showcaseSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition ${
                          currentSlide === index ? "bg-neutral-900" : "bg-neutral-300"
                        }`}
                        aria-label={`Go to ${slide.title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Locations
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Management across strong Southern California markets.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">
              Serving key neighborhoods and regions with practical operations, local familiarity,
              and a streamlined leasing experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center text-sm font-semibold shadow-sm"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Leasing process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Straightforward from first click to completed application.
            </h2>
          </div>

          <div className="grid gap-4">
            {leasingSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900">
                  {index + 1}
                </div>
                <p className="pt-2 text-sm leading-6 text-neutral-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Live Availability
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            View real-time listings and apply online.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600">
            Browse current vacancies, pricing, photos, and application details directly through our
            leasing platform.
          </p>
          <div className="mt-8">
            <a
              href="/listings"
              className="inline-flex rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open Live Listings
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to find your next home?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
              Reach out for leasing questions, property availability, or application support. You
              can also browse and apply directly through AppFolio.
            </p>
            <div className="mt-8 space-y-3 text-sm text-neutral-700">
              <p>
                <span className="font-semibold">Phone:</span> (424) 220-1030
              </p>
              <p>
                <span className="font-semibold">Email:</span> PM@LFDMGMT.COM
              </p>
              <p>
                <span className="font-semibold">Text Line:</span> (562) 380-0952
              </p>
              <p>
                <span className="font-semibold">Office Hours:</span> Monday through Friday, 9:00
                AM to 6:00 PM
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Full name"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Email address"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Phone number"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[140px] rounded-2xl border border-neutral-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Tell us what you're looking for"
                required
              />
              <button
                type="submit"
                disabled={status.submitting}
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.submitting ? "Sending..." : "Send Inquiry"}
              </button>

              {status.success ? (
                <p className="text-sm font-medium text-green-600">{status.success}</p>
              ) : null}

              {status.error ? (
                <p className="text-sm font-medium text-red-600">{status.error}</p>
              ) : null}
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 LFD Management LLC. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Equal Housing Opportunity</a>
          </div>
        </div>
      </footer>
    </div>
  );
}