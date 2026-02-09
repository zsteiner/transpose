# Transposition Architecture

## Overview

This application uses the **circle of fifths** for all transposition calculations. Notes are represented as positions 0-11 on the circle, where position 0 is C, position 1 is G, position 2 is D, etc.

## Core Concepts

### Circle of Fifths Positions

The circle of fifths is a fundamental music theory concept where each position represents a note a perfect fifth away from the previous:

- Position 0: C
- Position 1: G
- Position 2: D
- Position 3: A
- Position 4: E
- Position 5: B
- Position 6: F♯/G♭
- Position 7: D♭
- Position 8: A♭
- Position 9: E♭
- Position 10: B♭
- Position 11: F

### Transpose Factor

The transpose factor is the difference between two instruments' transposition factors:

```typescript
transposeFactor = instrument2.transposeFactor - instrument1.transposeFactor
```

**Examples:**
- Piano (C, factor 0) to Alto Sax (E♭, factor 3): `transposeFactor = 3`
- Alto Sax (E♭, factor 3) to Tenor Sax (B♭, factor 2): `transposeFactor = -1`
- Trumpet (B♭, factor 2) to French Horn (F, factor 1): `transposeFactor = -1`

## Core Utilities

### `transposeNote(position, factor)`

**File:** `src/utils/transposeNote.ts`

Core circle of fifths arithmetic.

- **Input:** Note position (0-11) and transpose factor
- **Output:** New position (0-11)
- **Algorithm:** `(position + factor) % 12` with negative handling
- **Use case:** Low-level transposition calculation

**Example:**
```typescript
transposeNote(0, 2)  // Returns 2 (C → D)
transposeNote(1, 1)  // Returns 2 (G → D)
transposeNote(0, -1) // Returns 11 (C → F)
```

### `transposeNoteList(identifiers, factor)`

**File:** `src/utils/transposeNoteList.ts`

Transpose multiple notes at once.

- **Input:** Array of note identifier strings, transpose factor
- **Output:** Array of Note objects
- **Use case:** Transposing scales, chords, or any note collection

**Example:**
```typescript
transposeNoteList(['c', 'e', 'g'], 2)
// Returns [Note for D, Note for F#, Note for A]

transposeNoteList(['c', 'd', 'e', 'f', 'g', 'a', 'b'], 1)
// Transposes C major scale to G major
```

### `circleFifthsPositionToSemitones(position)`

**File:** `src/utils/circleFifthsPositionToSemitones.ts`

Convert circle of fifths position to semitones from C.

- **Input:** Circle of fifths position
- **Output:** Semitones from C (can be negative)
- **Use case:** ABCJS notation rendering

**Example:**
```typescript
circleFifthsPositionToSemitones(0)  // 0 (C)
circleFifthsPositionToSemitones(1)  // 7 (G is 7 semitones above C)
circleFifthsPositionToSemitones(3)  // -3 (A, represented as -3 for ABCJS)
```

**Note:** This function uses a lookup table to map circle positions to semitones. Some values are negative because ABCJS notation prefers certain enharmonic spellings.

### `transposeNoteSemitones(originalNote, transposedNote)` (Deprecated)

**File:** `src/utils/transposeNoteSemitones.ts`

⚠️ **Deprecated:** Use `circleFifthsPositionToSemitones` instead.

This function is now a wrapper that calls `circleFifthsPositionToSemitones`. It's maintained for backward compatibility but should not be used in new code.

## State Management

### XState Machine (`machine.ts`)

**File:** `src/components/useTranspose/machine.ts`

The transpose machine is the **single source of truth** for:

- `originalNote` - The reference note selected by the user
- `transposedNote` - **Derived state**, calculated automatically
- `transposeFactor` - **Derived state**, calculated from instruments
- `instrument1` and `instrument2` - Selected instruments

**Important:** The machine automatically recalculates `transposedNote` and `transposeFactor` whenever instruments or originalNote change. Components should **never** recalculate these values manually.

#### Helper Functions

- `calculateTransposeFactor(instrument1, instrument2)` - Computes the difference between instrument transpose factors
- `calculateTransposedNote(originalNote, instrument1, instrument2)` - Calculates the resulting note using `transposeNote()`
- `computeDerivedValues()` - Consolidates both calculations

## React Hooks

### `useTranspose()`

**File:** `src/components/useTranspose/useTranspose.ts`

Provides access to the machine state and actions.

**Returns:**
- State: `originalNote`, `transposedNote`, `instrument1`, `instrument2`, `transposeFactor`
- Actions: `setOriginalNote()`, `setInstrument1()`, `setInstrument2()`, `clearInstrument1()`, `clearInstrument2()`

**Example:**
```typescript
const { originalNote, transposedNote, transposeFactor, setOriginalNote } = useTranspose();
```

### `useTransposedNotes({ noteIdentifiers, transposeFactor })`

**File:** `src/components/useTransposedNotes.ts`

Convenience hook for transposing a list of notes.

- **Input:** Note identifiers (strings) and transpose factor
- **Output:** Memoized array of Note objects
- **Use case:** Use this in components instead of manually calling `transposeNote`

**Example:**
```typescript
const { transposeFactor } = useTranspose();
const transposedNotes = useTransposedNotes({
  noteIdentifiers: ['c', 'e', 'g'],
  transposeFactor
});
// transposedNotes is a memoized array of Note objects
```

### `useTransposeSemitones({ originalNote, transposedNote })`

**File:** `src/components/useTransposeSemitones.ts`

Converts positions to semitones for ABCJS notation rendering.

- **Input:** Original and transposed Note objects
- **Output:** `transposeSemitonesOriginal` and `transposeSemitonesTransposed`
- **Use case:** TransposeNotation component for rendering musical notation

**Example:**
```typescript
const { originalNote, transposedNote } = useTranspose();
const { transposeSemitonesOriginal, transposeSemitonesTransposed } = useTransposeSemitones({
  originalNote,
  transposedNote
});
// Pass these semitone values to the Notation component
```

## Component Patterns

### NotesDisplay

**File:** `src/components/NotesDisplay/NotesDisplay.tsx`

Shows original or transposed notes.

**Pattern:**
```typescript
const { originalNote, transposedNote } = useTranspose();
const displayFactor = isTransposed
  ? transposedNote?.position ?? 0
  : originalNote.position;
const displayNotes = useTransposedNotes({
  noteIdentifiers: notes,
  transposeFactor: displayFactor
});
```

### TransposeNotation

**File:** `src/components/TransposeNotation.tsx`

Shows musical notation with ABCJS.

**Pattern:**
```typescript
const { originalNote, transposedNote } = useTranspose();
const { transposeSemitonesOriginal, transposeSemitonesTransposed } = useTransposeSemitones({
  originalNote,
  transposedNote
});
// Pass semitones to Notation component
<Notation transpose={transposeSemitonesOriginal} />
```

## Migration Guide

### ❌ Old Pattern (Don't Do This)

```typescript
// Manually calling transposeNote in component
const displayNote = notesMap[
  transposeNote(noteObject.position, transposedNote?.position ?? 0)
];
```

**Problems:**
- Duplicates logic that the machine already computed
- Hard to maintain
- Not memoized, recalculates on every render
- Scattered transposition logic

### ✅ New Pattern (Do This)

```typescript
// Use the hook
const displayNotes = useTransposedNotes({
  noteIdentifiers: notes,
  transposeFactor
});
```

**Benefits:**
- Reuses tested utility functions
- Memoized for performance
- Centralized logic
- Easy to understand and maintain

## Testing

### Test Files

- `transposeNote.test.ts` - Core arithmetic, includes real-world examples (tenor/alto sax)
- `transposeNoteList.test.ts` - List transposition, scales, chords, edge cases
- `circleFifthsPositionToSemitones.test.ts` - Position to semitone conversion, music theory verification

### Running Tests

```bash
# Run all tests
npm test

# Run specific test files
npm test -- transposeNote
npm test -- transposeNoteList
npm test -- circleFifthsPositionToSemitones

# Run in watch mode
npm test -- --watch
```

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│ User selects original note and instruments in UI                │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │    TransposeMachine (XState)       │
        │  • originalNote                    │
        │  • instrument1, instrument2        │
        │  • transposeFactor (DERIVED)       │
        │  • transposedNote (DERIVED)        │
        └────────────────┬───────────────────┘
                         │
        ┌────────────────┴─────────────┬──────────────────────┐
        │                              │                      │
        ▼                              ▼                      ▼
┌──────────────────────┐  ┌─────────────────────┐  ┌──────────────────┐
│ useTranspose()       │  │useTransposeSemitones│  │  useTransposedNotes│
│                      │  │                     │  │                  │
│ Returns:            │  │ Returns:            │  │ Takes:           │
│ • State values      │  │ • Semitone values   │  │ • Note IDs       │
│ • Action methods    │  │   for ABCJS         │  │ • Transpose factor│
└──────────────────────┘  └──────┬──────────────┘  └──────┬───────────┘
                                 │                        │
                                 ▼                        ▼
                    ┌─────────────────────┐  ┌──────────────────────┐
                    │ TransposeNotation   │  │  NotesDisplay        │
                    │                     │  │                      │
                    │ Uses semitones for  │  │ Shows transposed     │
                    │ ABCJS rendering     │  │ note collections     │
                    └─────────────────────┘  └──────────────────────┘
```

## Best Practices

1. **Always use the machine as source of truth** - Don't recalculate transposition in components
2. **Use hooks over direct utility calls** - Hooks provide memoization and better patterns
3. **Prefer `useTransposedNotes` for lists** - Don't manually loop and call `transposeNote`
4. **Use `circleFifthsPositionToSemitones` for ABCJS** - Not for general transposition
5. **Test with real-world scenarios** - Include instrument transposition examples in tests

## Common Pitfalls

### ❌ Pitfall 1: Recalculating in Components

```typescript
// Don't do this
const transposedPosition = transposeNote(note.position, transposeFactor);
```

The machine already calculated this! Use the derived state instead.

### ❌ Pitfall 2: Confusing Position with Semitones

```typescript
// Don't do this
const semitones = transposeNote(0, 5); // This returns circle position, not semitones!
```

Use `circleFifthsPositionToSemitones` for semitone conversion.

### ❌ Pitfall 3: Manual Loops

```typescript
// Don't do this
notes.map(id => {
  const note = findNote(id);
  return transposeNote(note.position, factor);
});
```

Use `useTransposedNotes` hook or `transposeNoteList` utility instead.

## Future Enhancements

Potential improvements to consider:

1. **Type safety** - Create branded types: `CirclePosition` vs `Semitones`
2. **Caching** - Add caching layer for frequently used transpositions
3. **Validation** - Add runtime validation for note identifiers
4. **Error handling** - Better handling of invalid inputs
5. **Performance** - Profile and optimize hot paths if needed

## Related Documentation

- [XState Documentation](https://xstate.js.org/)
- [Circle of Fifths (Music Theory)](https://en.wikipedia.org/wiki/Circle_of_fifths)
- [ABCJS Notation Library](https://abcjs.net/)

## Questions?

If you have questions about the transposition architecture, check:
1. This documentation
2. JSDoc comments in the source files
3. Test files for usage examples
4. The implementation plan at `.claude/plans/witty-twirling-hearth.md`
