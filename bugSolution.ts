function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(1, 2); // Correct: 3
const result2 = addSafe(1, 2); // Correct: 3

try {
  const result3 = addSafe(1, '2');
} catch (e) {
  console.error(e);
}
//Explicit type check helps prevent such unexpected behavior.