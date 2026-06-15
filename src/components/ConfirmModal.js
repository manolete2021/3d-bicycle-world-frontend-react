import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function ConfirmModal({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  loading = false,
}) {
  const cancelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    cancelRef.current?.focus();

    function handleEscape(event) {
      if (event.key === 'Escape' && !loading) {
        onCancel();
      }
    }

    document.addEventListener('keydown', handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, loading, onCancel]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="bw-modal-overlay"
      role="presentation"
      onClick={loading ? undefined : onCancel}
    >
      <div
        className="bw-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bw-modal-title"
        aria-describedby="bw-modal-message"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="bw-modal-title" className="bw-modal__title">
          {title}
        </h2>
        <p id="bw-modal-message" className="bw-modal__message">
          {message}
        </p>
        <div className="bw-modal__actions">
          <button
            ref={cancelRef}
            type="button"
            className="bw-modal__btn bw-modal__btn--cancel"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className="bw-modal__btn bw-modal__btn--confirm"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? 'Signing out…' : confirmLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmModal;
