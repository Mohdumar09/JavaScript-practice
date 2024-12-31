

// boxes[1].innerHTML="<big>Hello</big>"
// console.log(boxes[0].getAttribute("style"));
// console.log(boxes[0].setAttribute("style" ,"color:red"));
// console.log(boxes[0].removeAttribute("style")); remove the style attribute
// Data- => is attribute to add unique identification the word written after the dash is use as Data-key ="value"





/*   +++++++++++++++++++++++++++++++++ insertion and deletion ++++++++++++++++++++++++++++++++++++
 ********* to create a element us *********** 
 let div = document.createElement("div"); // if you wish to ad something use innerhtml or inner text 
 // if needed set attridute mean give class or id 

 after that use the foloowing method to insert an elemnet 

// .append => add the element n the last 
// .prepend =>  add the element in the begginning
// .before add before the main node 
// .after add after the main node 
// .replaceWith => replace the main gievn node with the node created in js 
*/

// ********* method for creating div


/*
let boxes = document.querySelectorAll(".box");
let div = document.createElement("div");
div.innerHTML = "Hello world my  name is <b>Umar</b>";
div.setAttribute("id", "intro");
// document.querySelector(".container").append(div) // at the last of container
// document.querySelector(".container").prepend(div) // at the start of the conatiner
// document.querySelector(".container").before(div) // before the conatiner 
// document.querySelector(".container").after(div)  // after the conatiner 
// document.querySelector(".container").replaceWith(div) // replace conatiner with div 
*/

/*
method for addding html ,element etc .
by using insertadjacenthtml("beforebegin" ,"<b>hiii</b>")..

beforebegin =>  in container at the start
afterbegin =>  in conatiner at the last 
beforeend => before conatiner start 
afterend =>  after conatiner end

*/




// ************ for removing element ************


//  use .remove()




// class name && class list 

// classList =>  give the list of the classes means name with index 
// className => give the name of class only