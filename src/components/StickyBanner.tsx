import { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface BannerConfig {
  id: string;
  enabled: boolean;
  message: string;
  /** ISO date (YYYY-MM-DD). Banner stops showing after the end of this day. */
  expiresAt?: string;
}

const isExpired = (expiresAt?: string) => {
  if (!expiresAt) return false;
  const expiry = new Date(`${expiresAt}T23:59:59`);
  return Date.now() > expiry.getTime();
};

const StickyBanner = () => {
  const [config, setConfig] = useState<BannerConfig | null>(null);
  // Resets on every page load by design — dismissing only hides it for the
  // current visit, not permanently.
  const [dismissed, setDismissed] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/banner.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: BannerConfig | null) => {
        if (data && data.enabled && data.id && !isExpired(data.expiresAt)) {
          setConfig(data);
        }
      })
      .catch(() => {
        // No banner config available — fail silently, nothing to show.
      });
  }, []);

  const visible = !!config && !dismissed;

  useEffect(() => {
    const root = document.documentElement;
    if (!visible || !barRef.current) {
      root.style.setProperty('--banner-height', '0px');
      return;
    }

    const el = barRef.current;
    const updateHeight = () => {
      root.style.setProperty('--banner-height', `${el.offsetHeight}px`);
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  if (!visible || !config) return null;

  const handleDismiss = () => {
    document.documentElement.style.setProperty('--banner-height', '0px');
    setDismissed(true);
  };

  return (
    <div
      ref={barRef}
      className="glass-dark animate-banner-in relative sticky top-0 z-[60] w-full overflow-hidden"
    >
      <div className="container mx-auto flex items-center gap-4 px-6 py-3">
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16 whitespace-nowrap">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm text-white"
                aria-hidden={i === 1 ? true : undefined}
              >
                <Sparkles
                  size={14}
                  className="animate-twinkle flex-shrink-0 text-jewelry-lavender"
                  aria-hidden="true"
                />
                {config.message}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="glass-button flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-white hover:text-jewelry-lavender"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
