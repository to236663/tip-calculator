# Bill Splitting Feature — Build Plan

## Overview

The Bill Splitting feature extends the tip calculator to divide the final total (bill + tip) evenly among a group of people. Instead of only showing the full total, the calculator will also display how much each person owes. This is one of the most common real-world use cases for a tip calculator — splitting a restaurant bill among friends or coworkers.

### How It Works

The user enters a bill amount, a tip percentage, and a number of people. When they click Calculate, the app shows:
- The full total (bill + tip), unchanged from current behavior
- A new "Per Person" amount, which is the total divided by the number of people

If only 1 person is entered, the per-person amount equals the total. Invalid inputs (0, negative numbers, or non-numeric values) will display a clear error message.

---

## Build Steps

### Step 1: Add the "Number of People" input
Add a third input field for number of people and wire it up to a new piece of state. No calculation changes yet — just the UI element working (typing in it updates state). Easy to verify the field renders and accepts input.

### Step 2: Update the calculate function
Extend the existing `calculateTip` function to divide the total by the number of people and store the per-person share in state. No UI changes yet — just confirm the math is right by adding a `console.log` of the result.

### Step 3: Display the per-person amount
Show the per-person share in the results area alongside the existing total. After this step you'll see both "Total: $X" and "Per Person: $X" when you click Calculate.

### Step 4: Handle edge cases
Add validation for invalid people counts: 0, negative numbers, or non-integers (e.g. "abc"). Show a clear error message for bad input rather than displaying `NaN` or `Infinity`. Also handle the case where people count is 1 — per-person share equals the total, which should still work cleanly.
