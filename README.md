# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input and nonexistent resources.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to retrieve a user by ID from a simulated database. However, it lacks crucial error handling:

1. **No Input Validation:** It doesn't check if the `userId` is a valid number.
2. **Missing 404 Handling:**  If a user with the given ID doesn't exist, the code doesn't return a 404 (Not Found) response.

This can lead to unexpected behavior, crashes, or security vulnerabilities.

## Solution

The corrected code in `bugSolution.js` addresses these issues by:

1. **Validating Input:** It checks if `userId` is a valid number using `isNaN()`.
2. **Implementing 404 Handling:** It returns a 404 response if the user is not found.
3. **Improved Error Handling:** Uses `try-catch` to handle potential errors more gracefully.

This improved error handling makes the application more robust and secure.