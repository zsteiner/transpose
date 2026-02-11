'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { getAbcKey, parseAbcKeyLine } from '@/constants/abcNotation';
import { getNoteByIdentifier } from '@/constants/notes';
import { scaleOptions } from '@/constants/options';

import { ReactAbc } from '../ReactAbc';
import { Select } from '../Select';
import { useTranspose } from '../useTranspose';
import { useTransposeSemitones } from '../useTransposeSemitones';
import styles from './TransposeCustom.module.css';

const WRAP_OPTIONS = {
  minSpacing: 1.8,
  maxSpacing: 2.7,
  preferredMeasuresPerLine: 4,
};

const sanitizeWarningHtml = (html: string): string => {
  // abcjs warnings contain HTML-encoded text with raw <span> tags for
  // highlighting bad characters. Allow only <span> with safe style properties;
  // strip everything else (scripts, event handlers, other tags).
  return html
    .replace(
      /Music Line:(\d+):(\d+):/,
      (_, line, col) => `Line ${line}, column ${col}:`,
    )
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(
      /<span\s+style="([^"]*)">/gi,
      (_, style: string) => {
        const allowed = ['text-decoration', 'font-size', 'font-weight'];
        const safeStyle = style
          .split(';')
          .map((s: string) => s.trim())
          .filter((s: string) => allowed.some((prop) => s.startsWith(prop)))
          .join(';');
        return `<span style="${safeStyle}">`;
      },
    )
    .replace(/<(?!\/?span[\s>])[^>]+>/gi, '');
};

export const TransposeCustom = () => {
  const {
    originalNote,
    transposedNote,
    customNotation,
    setCustomNotation,
    selectedScale,
    setSelectedScale,
    setOriginalNote,
  } = useTranspose();
  const { transposeSemitonesOriginal, transposeSemitonesTransposed } =
    useTransposeSemitones({ originalNote, transposedNote });

  const [warnings, setWarnings] = useState<string[]>([]);
  const customNotationRef = useRef(customNotation);
  const skipKLineUpdate = useRef(false);

  // Use refs for comparison in the parse effect so it only fires
  // when customNotation changes, not when note/scale change.
  const originalNoteRef = useRef(originalNote);
  const selectedScaleRef = useRef(selectedScale);

  useEffect(() => {
    customNotationRef.current = customNotation;
    originalNoteRef.current = originalNote;
    selectedScaleRef.current = selectedScale;
  });

  const handleParseWarnings = useCallback((newWarnings: string[]) => {
    const formatted = newWarnings.map(sanitizeWarningHtml);
    setWarnings((prev) => {
      if (prev.length === 0 && formatted.length === 0) return prev;
      if (
        prev.length === formatted.length &&
        prev.every((w, i) => w === formatted[i])
      )
        return prev;
      return formatted;
    });
  }, []);

  // Parse K: line from textarea to update note and scale
  useEffect(() => {
    const parsed = parseAbcKeyLine(customNotation);
    if (!parsed) return;

    const note = getNoteByIdentifier(parsed.noteId);
    if (!note) return;

    const noteChanged = note.note !== originalNoteRef.current.note;
    const scaleChanged = parsed.scale !== selectedScaleRef.current;

    if (noteChanged || scaleChanged) {
      skipKLineUpdate.current = true;
      if (noteChanged) setOriginalNote(note);
      if (scaleChanged) setSelectedScale(parsed.scale);
    }
  }, [customNotation, setOriginalNote, setSelectedScale]);

  // Prepopulate and update the K: line when note or scale changes externally
  useEffect(() => {
    if (skipKLineUpdate.current) {
      skipKLineUpdate.current = false;
      return;
    }

    const abcKey = getAbcKey(originalNote, selectedScale);
    const current = customNotationRef.current;

    if (!current) {
      setCustomNotation(`L:4/4\nK:${abcKey}\n`);
      return;
    }

    const keyLineRegex = /^K:.*$/m;
    if (keyLineRegex.test(current)) {
      const updated = current.replace(keyLineRegex, `K:${abcKey}`);
      if (updated !== current) {
        setCustomNotation(updated);
      }
    }
  }, [originalNote, selectedScale, setCustomNotation]);

  const transposeSemitones =
    transposeSemitonesTransposed - transposeSemitonesOriginal;

  // Only show notation when there are actual notes beyond header lines
  const hasNotes = customNotation
    .split('\n')
    .some((line) => line && !/^[A-Z]:/i.test(line) && line.trim().length > 0);

  return (
    <div className={styles.container}>
      <Select
        onChange={setSelectedScale}
        options={scaleOptions}
        value={selectedScale}
      />
      <div className={styles.textareaWrapper}>
        <textarea
          className={styles.textarea}
          onChange={(e) => setCustomNotation(e.target.value)}
          placeholder={'L:4/4\nK:C\nC D E F | G A B c |'}
          rows={6}
          value={customNotation}
        />
      </div>
      <p className={styles.helpText}>
        Supports{' '}
        <a
          className={styles.helpLink}
          href="https://abcnotation.com/wiki/abc:standard:v2.1"
          rel="noopener noreferrer"
          target="_blank"
        >
          ABC notation
        </a>
      </p>

      {warnings.length > 0 && (
        <ul className={styles.warnings}>
          {warnings.map((warning, index) => (
            <li
              className={styles.warning}
              dangerouslySetInnerHTML={{ __html: warning }}
              key={index}
            />
          ))}
        </ul>
      )}

      {hasNotes && (
        <div
          className={
            warnings.length > 0
              ? `${styles.notationGroup} ${styles.notationGroupHidden}`
              : styles.notationGroup
          }
        >
          <div className={styles.notationItem}>
            <strong>Original:</strong>
            <ReactAbc
              expandToWidest
              minPadding={32}
              notation={customNotation}
              onParseWarnings={handleParseWarnings}
              viewportHorizontal={false}
              visualTranspose={0}
              wrap={WRAP_OPTIONS}
            />
          </div>
          {transposedNote ? (
            <div className={styles.notationItem}>
              <strong>Transposed:</strong>
              <ReactAbc
                expandToWidest
                minPadding={32}
                notation={customNotation}
                viewportHorizontal={false}
                visualTranspose={transposeSemitones}
                wrap={WRAP_OPTIONS}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
