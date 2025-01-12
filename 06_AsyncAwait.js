/*

### Async/Await Basics
- **Async/Await** makes working with promises easier and code look more straightforward.  
- Used for handling **asynchronous** tasks like fetching data.  

### What is a Promise?
- A promise is a placeholder for a value that will be ready later.  
- Promise states:  
  - **Pending**: Not done yet.  
  - **Fulfilled**: Success!  
  - **Rejected**: Failed.  

### Example of a Promise

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(455), 3500);
  });
}

- `getData` waits 3.5 seconds, then returns 455.

### Async/Await Syntax
- **async** before a function allows using **await** inside.  
- **await** pauses the function until a promise resolves.

### Example of Async/Await

async function main() {
  let data = await getData();
  console.log(data);
}

- `main` waits for `getData` to finish, then logs the result.

### Why Use Async/Await?
- Makes code **simpler** and **easier to read**.  
- Handles errors more easily than promises.  

### Fetch API (for Server Requests)
- `fetch()` sends a request and returns a promise with a response.

### Example of Fetch API

async function main() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await response.json();
  console.log(data);
}


### Common HTTP Methods
| Method | Purpose               |
|--------|-----------------------|
| GET    | Get data              |
| POST   | Send new data         |
| PUT    | Update existing data  |
| DELETE | Remove data           |

### Example of POST Request

let response = fetch('https://example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'value' })
});


### Best Practices
- Always use `async` when using `await`.  
- Use `try/catch` for errors.  
- Don’t mix with old-style callbacks.  
*/