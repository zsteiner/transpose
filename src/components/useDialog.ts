import { useState } from 'react';

export const useDialog = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const close = () => setOpen(false);

  return { open, showModal, close };
};
