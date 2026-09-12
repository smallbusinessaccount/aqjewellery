import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface BannerConfig {
  id: string;
  enabled: boolean;
  message: string;
}

const dismissedKey = (id: string) => `banner-dismissed-${id}`;

const StickyBanner = () => {
  const [config, setConfig] = useState<BannerConfig | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/banner.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: BannerConfig | null) => {
        if (data && data.enabled && data.id) {
          setDismissed(localStorage.getItem(dismissedKey(data.id)) === 'true');
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
    localStorage.setItem(dismissedKey(config.id), 'true');
    setDismissed(true);
  };

  return (
    <div
      ref={barRef}
      className="glass-purple sticky top-0 z-[60] w-full"
    >
      <div className="container mx-auto flex items-center justify-center gap-4 px-6 py-3">
        <p className="text-center text-sm text-white">{config.message}</p>
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
