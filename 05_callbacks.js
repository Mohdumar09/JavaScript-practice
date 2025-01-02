/*
 =============>  Callbacks, Promises, and Asynchronous JavaScript  <=============


====> Asynchronous Nature of JavaScript <===

  JavaScript handles tasks that take time to complete without blocking the execution of the remaining code

====> Example Code: 

  javascript
  console.log('Hello');
  setTimeout(function() {
    console.log('World');
  }, 2000);
  console.log('End');
  
====> Output: 
  
  Hello  
  End  
  World  
  
  Reason: `setTimeout` is asynchronous and does not block further execution.



====> Callbacks <====

   A callback is a function passed as an argument to another function, invoked inside the outer function to complete an action.

-  Example:

//  const callback = (arg) => {
//     console.log(arg);               // the output function
// }

// const loadScript = (url, callback) => {
//     let sc = document.createElement("script");  // creating srcipt element 
//     sc.src = url;                              // input the url passed by onload funtion into script src 
//     document.head.append(sc);                 // append the script in the head 
//     sc.onload = callback("Umar");            //if script is loaded the call callback funtion byy passing argumnet umar 
// };


// loadScript("https://github.com/Mohdumar09/JavaScript-practice",callback); 
// // meaning =>  function loadscript is called by passing argumnet (link and callback funtion itself);


  ====> Disadvntage of Callback <====


- Problem: Nested callbacks create unreadable, hard-to-maintain code ("pyramid of doom").
- Solution: Use promises to simplify asynchronous workflows.


 ====> Promises <====

 An object representing the eventual completion (or failure) of an asynchronous operation.
  
 ====> Using Promises <====
 
 ******  Syntax :-  **********

  const prom1 = new Promise((resolve, reject) => {
    resolve("Success");
  });

 ==> Handling Results:

  prom1.then((value) => console.log(value))     // For success
       .catch((error) => console.log(error));  // For errors


====> Promise Methods <====

|   Method             |     Description                                          |
|----------------------|----------------------------------------------------------|
| `then`               | Handles successful completion.                           |
| `catch`              | Handles errors.                                          |
| `finally`            | Executes cleanup code regardless of success or failure.  |
| `Promise.all`        | Waits for all promises to resolve.                       |
| `Promise.allSettled` | Waits for all promises to settle (resolve or reject).    |
| `Promise.race`       | Resolves/rejects when the first promise settles.         |
| `Promise.any`        | Resolves when the first promise resolves.                |

#### 📝 **Examples of Promises**
- **Basic Usage:**

  const prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });

  prom.then((value) => console.log(value))
      .catch((error) => console.error(error));

- **Promise Chaining:**
               
  prom.then((value) => console.log(value))
      .catch((error) => console.error(error));  // can use multiple function in line time 
  
- **Using `promise method `
           
  Promise.(method_name)([promise1, promise2])
    .then(values => console.log(values))
    .catch(error => console.error(error));




    in response it generate array ....
  

---

====> Key Takeaways <====
- Callbacks are foundational for asynchronous programming but can lead to callback hell.
- Promises provide a structured way to handle asynchronous operations.
- Methods like `Promise.all`, `Promise.race`, and `Promise.any` enable managing multiple promises.
- Writing clean and modular code improves maintainability and error handling.


*/
