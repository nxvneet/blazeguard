/* Shared framer-motion variants that recreate the template's GSAP scroll reveals:
   fade-up on enter, word-by-word heading reveals, staggered lists. */

export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easeOut } },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const wordReveal = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.85, ease: easeOut } },
};

export const viewportOnce = { once: true, margin: '-12% 0px -12% 0px' };

/* Split a heading string into animated words wrapped in clipping spans.
   Used to mimic the template's SplitText word-rise headings. */
export function splitWords(text) {
  return text.split(' ');
}
