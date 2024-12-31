# Type Mismatch in TypeScript Addition

This example demonstrates a subtle type-related issue in TypeScript where an addition operation involving a number and a string compiles without error but produces unexpected results.

## Problem
The TypeScript compiler doesn't flag the following code as an error. The string '2' is implicitly converted to a number, but the result may be unexpected.