## Packages
framer-motion | Essential for the requested smooth scroll, 3D tilt, and entrance animations
react-intersection-observer | To trigger animations when elements come into view (scroll spy)
lucide-react | Already in base, but emphasizing need for specific icons

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
}
The app requires a "bio-mimicry" aesthetic, which will be achieved through organic shapes, soft shadows, and motion.
Backend API endpoints are defined in shared/routes.ts (newsletter, contact).
