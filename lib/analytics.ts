import { track } from "@vercel/analytics";

export function trackEvent(name: string, properties?: Record<string, any>) {
  try {
    track(name, properties);
  } catch {
    // analytics should never break UX
  }
}
