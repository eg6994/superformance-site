"use client";

import { motion } from "framer-motion";

// Full-color SVG logos with accurate brand colors
const logos = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 80 40" className="w-12 h-10">
        <defs>
          <linearGradient id="meta-grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0081FB" />
            <stop offset="100%" stopColor="#0064E0" />
          </linearGradient>
        </defs>
        {/* Meta infinity symbol - accurate path */}
        <path
          d="M15 20c0-8 4-15 10-15 4 0 7 3 10 8 3 5 6 12 6 12s3-7 6-12c3-5 6-8 10-8 6 0 10 7 10 15s-4 15-10 15c-4 0-7-3-10-8-3-5-6-12-6-12s-3 7-6 12c-3 5-6 8-10 8-6 0-10-7-10-15z"
          fill="none"
          stroke="url(#meta-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#ffffff"
          d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    svg: (
      <svg viewBox="0 0 28 28" className="w-10 h-10">
        <defs>
          <linearGradient id="gemini-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E88E5" />
            <stop offset="25%" stopColor="#1565C0" />
            <stop offset="50%" stopColor="#7B1FA2" />
            <stop offset="75%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>
        </defs>
        {/* Gemini 4-point star - accurate shape */}
        <path
          d="M14 0 C14 0 14 7 7 14 C14 14 14 14 14 14 C14 14 7 14 14 14 C14 21 14 28 14 28 C14 28 14 21 21 14 C14 14 14 14 14 14 C14 14 21 14 14 14 C14 7 14 0 14 0 Z"
          fill="url(#gemini-grad)"
        />
        <path
          d="M14 2 Q14 14 2 14 Q14 14 14 26 Q14 14 26 14 Q14 14 14 2 Z"
          fill="url(#gemini-grad)"
        />
      </svg>
    ),
  },
  {
    name: "Mistral AI",
    svg: (
      <svg viewBox="0 0 24 20" className="w-10 h-10">
        {/* Row 1 - Yellow tops */}
        <rect x="4" y="0" width="4" height="4" fill="#FFD500" />
        <rect x="16" y="0" width="4" height="4" fill="#FFD500" />
        {/* Row 2 - Light Orange */}
        <rect x="4" y="4" width="4" height="4" fill="#FFAB00" />
        <rect x="16" y="4" width="4" height="4" fill="#FFAB00" />
        {/* Row 3 - Orange middle bar */}
        <rect x="4" y="8" width="16" height="4" fill="#FF8800" />
        {/* Row 4 - Deep Orange legs */}
        <rect x="4" y="12" width="4" height="4" fill="#FF5500" />
        <rect x="10" y="12" width="4" height="4" fill="#FF5500" />
        <rect x="16" y="12" width="4" height="4" fill="#FF5500" />
        {/* Row 5 - Red bottom */}
        <rect x="0" y="16" width="10" height="4" fill="#DD0000" />
        <rect x="14" y="16" width="10" height="4" fill="#DD0000" />
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    svg: (
      <svg viewBox="0 0 48 40" className="w-12 h-10">
        {/* Green square background */}
        <rect x="20" y="2" width="20" height="20" fill="#76B900"/>
        {/* Eye shape */}
        <path d="M8 12c0 0 5-10 16-10 0 0 5 0 10 5v10c0 0-5 5-16 5-10 0-10-10-10-10z" fill="#76B900"/>
        {/* Inner eye cutout */}
        <path d="M13 12c0 0 3-6 11-6s11 6 11 6-3 6-11 6-11-6-11-6z" fill="#0a0a0a"/>
        {/* Middle ring */}
        <path d="M17 12c0 0 2.5-4 7-4s7 4 7 4-2.5 4-7 4-7-4-7-4z" fill="#76B900"/>
        {/* Pupil */}
        <ellipse cx="24" cy="12" rx="3" ry="2.5" fill="#0a0a0a"/>
        {/* NVIDIA wordmark */}
        <text x="24" y="34" textAnchor="middle" fill="#76B900" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.5">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#D4A574"
          d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.569 3.521zm1.04 3.86L5.17 13.99h4.874L7.608 7.38z"
        />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#FF7A59"
          d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.2 2.2 0 0 0 17.231.834h-.065a2.2 2.2 0 0 0-2.2 2.2v.065c0 .876.513 1.63 1.254 1.983l.001.002v2.862a5.667 5.667 0 0 0-3.468 1.191l-8.49-6.604a2.454 2.454 0 0 0 .136-.807 2.482 2.482 0 1 0-2.482 2.482 2.46 2.46 0 0 0 1.472-.486l8.359 6.503a5.667 5.667 0 0 0-.535 2.39 5.7 5.7 0 0 0 .551 2.442l-2.603 2.603a1.94 1.94 0 0 0-.574-.087 1.992 1.992 0 1 0 1.992 1.992 1.94 1.94 0 0 0-.087-.575l2.566-2.566a5.675 5.675 0 1 0 5.161-9.544zm-.993 8.268a2.878 2.878 0 1 1 0-5.756 2.878 2.878 0 0 1 0 5.756z"
        />
      </svg>
    ),
  },
  {
    name: "Semrush",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" fill="#FF622D" />
        <rect x="12" y="12" width="24" height="5" rx="2" fill="white" />
        <rect x="12" y="21" width="24" height="5" rx="2" fill="white" />
        <rect x="12" y="30" width="24" height="5" rx="2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#ffffff"
          d="M24 22.525H0l12-21.05 12 21.05z"
        />
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#635BFF"
          d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#252F3E" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.87.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
        <path fill="#FF9900" d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607z"/>
        <path fill="#FF9900" d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
      </svg>
    ),
  },
];

export function LogoMarquee() {
  // Triple the logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />

      {/* Section header */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Trusted Technologies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
            Powered by Industry Leaders
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-16 items-center"
            animate={{
              x: [0, -100 * logos.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer flex flex-col items-center"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 opacity-70 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                    transition: "filter 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.filter = "drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.filter = "drop-shadow(0 0 0px rgba(255, 255, 255, 0))";
                  }}
                >
                  {logo.svg}
                </div>
                <p className="text-center text-xs text-muted-foreground/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {logo.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
