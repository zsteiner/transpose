import { useRef, useCallback } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const showModal = useCallback(() => {
    ref.current?.showModal();
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
  }, []);

  return { ref, showModal, close };
};
