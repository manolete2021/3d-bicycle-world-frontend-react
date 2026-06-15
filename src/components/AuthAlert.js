import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAuthAlert } from '../context/AuthAlertContext';

const VARIANT_STYLES = {
  success:
    'border-emerald-500/40 bg-emerald-950/90 text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.15)]',
  danger:
    'border-red-500/40 bg-red-950/90 text-red-100 shadow-[0_0_24px_rgba(239,68,68,0.15)]',
};

const AUTO_DISMISS_MS = 5000;

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AuthAlert() {
  const { alert, clearAuthAlert } = useAuthAlert();

  useEffect(() => {
    if (!alert) return undefined;

    const timer = window.setTimeout(clearAuthAlert, AUTO_DISMISS_MS);
    return () => window.clearTimeout(timer);
  }, [alert, clearAuthAlert]);

  if (!alert) return null;

  const variantClass = VARIANT_STYLES[alert.variant] ?? VARIANT_STYLES.danger;

  return createPortal(
    <div
      className={`fixed top-20 right-4 z-[110] flex w-[min(100vw-2rem,22rem)] items-start gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm sm:right-6 ${variantClass}`}
      role="alert"
      aria-live="polite"
    >
      <p className="flex-1 text-sm font-medium leading-relaxed">{alert.message}</p>
      <button
        type="button"
        onClick={clearAuthAlert}
        className="shrink-0 rounded-md p-1 opacity-80 transition hover:bg-white/10 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label="Dismiss alert"
      >
        <CloseIcon />
      </button>
    </div>,
    document.body
  );
}

export default AuthAlert;
