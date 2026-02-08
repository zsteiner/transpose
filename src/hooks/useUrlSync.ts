'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { instruments } from '@/constants/instruments';
import type { Instrument, Note } from '@/types';

/**
 * Hook to sync app state changes to URL query parameters
 */
export const useUrlSync = (
  note: Note,
  instrument1?: Instrument,
  instrument2?: Instrument,
) => {
  const router = useRouter();
  const pathname = usePathname();
  const isInitialMount = useRef(true);
  const lastUrlRef = useRef<string>('');

  useEffect(() => {
    // Skip syncing on initial mount to avoid overwriting URL state
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const params = new URLSearchParams();

    // Update note parameter
    if (note) {
      params.set('note', note.note);
    }

    // Update instrument1 parameter
    if (instrument1) {
      // Find the key in the instruments object
      const instrument1Key = Object.entries(instruments).find(
        ([, inst]) => inst === instrument1,
      )?.[0];

      if (instrument1Key) {
        params.set('instrument1', instrument1Key);
      }
    }

    // Update instrument2 parameter
    if (instrument2) {
      // Find the key in the instruments object
      const instrument2Key = Object.entries(instruments).find(
        ([, inst]) => inst === instrument2,
      )?.[0];

      if (instrument2Key) {
        params.set('instrument2', instrument2Key);
      }
    }

    // Build new URL
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Only update if the URL has changed
    if (newUrl !== lastUrlRef.current) {
      lastUrlRef.current = newUrl;
      router.replace(newUrl, { scroll: false });
    }
  }, [note, instrument1, instrument2, router, pathname]);
};
