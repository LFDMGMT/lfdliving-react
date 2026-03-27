import { useEffect, useRef } from "react";

export default function ListingsPage() {
  const listingContainerRef = useRef(null);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (!listingContainerRef.current || hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    listingContainerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.src =
      (window.location.protocol === "https:" ? "https:" : "http:") +
      "//lfdpm.appfolio.com/javascripts/listing.js";

    script.onload = () => {
      if (window.Appfolio && typeof window.Appfolio.Listing === "function") {
        window.Appfolio.Listing({
          hostUrl: "lfdpm.appfolio.com",
          themeColor: "#676767",
          height: "500px",
          width: "100%",
          defaultOrder: "date_posted",
        });
      }
    };

    listingContainerRef.current.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight">LFD Living</div>
            <div className="text-sm text-neutral-500">Live listings powered by AppFolio</div>
          </div>

          <a
            href="/"
            className="rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Available Rentals
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Explore current vacancies and apply online.
          </h1>
          <p className="mt-5 text-sm leading-7 text-neutral-600">
            Browse live availability, pricing, photos, and application details directly through our leasing platform.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div ref={listingContainerRef} />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://lfdpm.appfolio.com/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Open Listings in New Tab
          </a>

          <a
            href="https://lfdpm.appfolio.com/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Apply Through AppFolio
          </a>
        </div>
      </section>
    </div>
  );
}