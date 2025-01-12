/*
### Loops in JavaScript
Loops allow running the same block of code multiple times until a specified condition is met.

---

### 1. `for` Loop
The most commonly used loop when the number of iterations is known.

**Syntax**:
for (initialization; condition; increment) {
  // code to be executed
}

**Example**:
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0 to 4
}

---

### 2. `while` Loop
Repeats code as long as the condition is true.

**Syntax**:
while (condition) {
  // code to be executed
}

**Example**:
let count = 0;
while (count < 3) {
  console.log(count); // Prints 0, 1, 2
  count++;
}

---

### 3. `do...while` Loop
Executes code at least once, then repeats while the condition is true.

**Syntax**:
do {
  // code to be executed
} while (condition);

**Example**:
let num = 0;
do {
  console.log(num); // Prints 0, 1, 2
  num++;
} while (num < 3);

---

### 4. `for...in` Loop
Iterates over the **properties** of an object.

**Syntax**:
for (key in object) {
  // code to be executed
}

**Example**:
const user = { name: 'Alice', age: 25 };
for (let key in user) {
  console.log(key, user[key]); // Prints "name Alice", "age 25"
}

---

### 5. `for...of` Loop
Iterates over **iterable objects** like arrays, strings, or sets.

**Syntax**:
for (element of iterable) {
  // code to be executed
}

**Example**:
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color); // Prints "red", "green", "blue"
}

---

### Loop Control Statements
1. **`break`**: Exits the loop immediately.
   **Example**:
   for (let i = 0; i < 5; i++) {
     if (i === 3) break;
     console.log(i); // Prints 0, 1, 2
   }

2. **`continue`**: Skips the current iteration and moves to the next.
   **Example**:
   for (let i = 0; i < 5; i++) {
     if (i === 2) continue;
     console.log(i); // Prints 0, 1, 3, 4
   }

---

### Best Practices
- Use `for...of` for iterating arrays when the index is not needed.
- Use `for...in` only when iterating over object properties (avoid using it for arrays).
- Be cautious with infinite loops (where the condition never becomes false).
*/
