/*
    ....................................... EventHandling  _ types .....................................
    using js ==>
    let button = document.querySelector(".child");
    button.addEventListener("type" , (e)=>{
        alert("yay you clicked a button");
    }) 
    
    
    inline js ==>  
        
    for eg :-  
    <button onclick="alert(`hello world `);"> click me 2 !</button>


    use as function ==> 
    event.onclick = function () {
        alert("");
    }
    
    

 ....................................... Event _ listner .....................................

==================> Mouse Event Listeners <==================== 
    onclick=> Triggered on a single mouse click.
    ondblclick => Triggered on a double mouse click.
    onmouseover => Triggered when the mouse pointer hovers over an element.
    onmouseout => Triggered when the mouse pointer leaves an element.
    onmousedown => Triggered when a mouse button is pressed down.
    onmouseup => Triggered when a mouse button is released.
    onmousemove => Triggered when the mouse pointer moves over an element.
    onwheel => Triggered when the mouse wheel is scrolled.

==================> Keyboard Event Listeners <==================== 
    onkeydown=> Triggered when a key is pressed down.
    onkeyup => Triggered when a key is released.
    onkeypress => (Deprecated) Similar to onkeydown, but only works for printable keys.

==================> Form Event Listeners <==================== 
    onsubmit=> Triggered when a form is submitted.
    onreset => Triggered when a form is reset.
    oninput => Triggered when user input changes in a form field.
    onchange => Triggered when a form field loses focus after its value changes.
    onfocus => Triggered when an element gains focus.
    onblur => Triggered when an element loses focus.
    
    
    ....................................... Event _ Bubbling .....................................
   
   
=====>What is Event Bubbling<=====

1. Event bubbling happens when an event on a child element also triggers the same event on its parent and other ancestors in the DOM.(child => parent => superior parent... up to the top if it consist of event listner )  
2. The event starts at the clicked element and moves up to the top of the document.
   
====>How to Fix Event Bubbling<====  

1. Use stopPropagation() to stop the event from reaching parent elements.  
2. Use event delegation by adding one event listener to a parent and checking which child was clicked.



 ....................................... setInterval  &&  setTimeout .....................................


 ====> What is setTimeout <==== 

1. setTimeout runs a function or code after a specific delay (in milliseconds).  
2. It is used to execute code once after the delay.  

syntax =>
    
    setTimeout( () => {
    
    }, timeout); ==> here timeout = time in millisecond


====> How to Stop setTimeout <==== 

1. Store the setTimeout ID in a variable when you call it.  
2. Use clearTimeout(timeoutID) to cancel it before it executes.  


====> What is setInterval <====

1. setInterval runs a function or code repeatedly at a fixed interval (in milliseconds).  
2. It is used for tasks that need to repeat, like updating a clock.  

syntax =>
    setInterval(() => {
    
    }, interval); ==> here interval = time in millisecond

====> How to Stop setInterval <==== 

1. Store the setInterval ID in a variable when you call it.  
2. Use clearInterval(intervalID) to stop it from running further.
*/