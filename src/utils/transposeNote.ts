const FULL_CIRCLE = 12;

export function transposeNote(originalNote: number, transposeFactor: number) {
  // Use modulo arithmetic to handle multiple wraps around the circle
  let result = (originalNote + transposeFactor) % FULL_CIRCLE;

  // Handle negative results by adding FULL_CIRCLE
  if (result < 0) {
    result += FULL_CIRCLE;
  }

  // Convert -0 to 0 (JavaScript quirk)
  return result === 0 ? 0 : result;
}
