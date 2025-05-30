
// let arr=[];

// while(true)
// {
//     let an = prompt("Enter Your Choice");
//     if(an=="exit")
//     {
//         breakl;
//     }
//     else if(an=="add")
//     {
//          let ad = prompt("Enter Task");
//          arr.push(ad);
//     }
//     else if(an=="delete")
//     {
//         let f = prompt("Which no Recored you want to Delete");
//         arr.splice(f,1);
//     //arr.pop();
//     }
//     else if(an=="display")
//     {
//         console.log("--------------------------------------");
//        for(ans of arr)
//          {  
            
//              console.log(ans);
//          }
//          console.log("--------------------------------------");
//     }
//     else
//     {
//         console.error("wrong");
//         break;
//     }
// }



// let a = prompt("1");
// let b = prompt("2");
// c=a+b;
// console.log(c);


// function ab()
// {
//     let as = Math.floor(Math.random()*7);
//     if(as==0)
//     {
//         console.log(as+1);
//     }
//     else{
//         console.log(as);
//     }
// }

// ab();



// function sum()
// {
//     console.log(a+b);
// }
// let a =Number(prompt("A"));
// let b =Number(prompt("B"));

// sum();



// function sum(a,b)
// {
//     console.log(a+b);
// }
// let a =Number(prompt("A"));
// let b =Number(prompt("B"));

// sum(a,b);



// let num = [18,25,5,8,32,77,453,54,3,644,345,55,86,4];

// let ans = num.reduce((one,two)=>{
//     //console.log(one,two);

//     if(one>two)
//     {
//         return one;
//     }
//     else
//     {
//         return two;
//     }
// })

// console.log(ans);




// function sum(a=2,b)
// {
//     return a+b;
// }

// let a = sum(2);
// console.log(a);



// let arr = [1, 4, 6, 8, 3, 5, 31];
// let as = arr[0]; // Initialize 'as' with the first element

// for (let i = 1; i < arr.length; i++) { // Fix loop condition
//     as = Math.min(as, arr[i]); // Remove 'let' inside the loop
// }

// console.log("Minimum value in the array is:", as);

// let arr=[ 4, 6, 8, 3, 5, 31];
// let a =Math.min(...arr);
// console.log(a);

// let c = prompt("change");

// let obk = document.getElementsByClassName("la");
// for(let i=0; i<=obk.length;i++)
// {
// obk[i].src=
// }
// let zsx = document.getElementById("aa"); // Correct method

// zsx.innerText = "dffdfvsfv"; // Now it works


//  let sd = document.querySelector("h1");

//  sd.innerText="ffffrtyu";

//  let elements = document.querySelectorAll("#R"); // Select all elements with ID "R"

//  console.log(elements);
// for (let element of elements) { 
//     element.innerText = "ssddsdf"; // Change content of each element
// }


// let am = document.querySelector("h1");
// am.getAttribute("id");

// am.setAttribute("id","ssd");

// let q = document.querySelector("#W");
// q.style.color="red";


// let q = document.querySelector("#W"); 
// q.style.backgroundColor = "red"; // Changes background color of the div  


// appendChild
// const newParagraph = document.createElement("p");
// newParagraph.innerHTML = "his is a new paragraph added dynamically.";

// let as = document.querySelector("#newe1");
// as.appendChild(newParagraph);

// //append
// // newParagraph.append("fdf");
// // newParagraph.prepend("xsdad");


// // //append
// const newParagraph1 = document.createElement("p");
// newParagraph1.innerHTML = "<B><U>This is a new paragraph added dynamically.</U></B>";
// let a = document.querySelector("#newe2");
// a.append(newParagraph1);




// //---------------------------------------------------------------
// //appendchild
// // const para = document.createElement('p');
// // para.textContent = "This is a paragraph";

// // const container = document.getElementById('container');
// // container.appendChild(para);



// //---------------------------------------------------------------
// //append
// const para1 = document.createElement('p');
// para1.textContent = "First paragraph";

// const para2 = document.createElement('p');
// para2.textContent = "Second paragraph";

// container.append(para1, para2, "Some extra text");

// para1.append("  xzcdvv v dvsvmsnv Zcd");



// //---------------------------------------------------------------
// //prepend

// const para = document.createElement('p');
// para.textContent = "I'm first!";

// container.prepend(para);
// para.prepend("AAAAAAA");


//-----------------------------------------------------------------------
//insertAdjacentElement(position, element)







// //-----------------------------------------------

// //const parent = document.getElementById('fruits');
// const child = document.getElementById('removeMe');

// //parent.removeChild(child); // removes the <li>Banana</li>


// //const del = document.getElementById('re');

// child.remove();





// a.onmouseenter = function()
// {
//     hi();
//     hel();
//     alert("hello");
// }

// let a= document.querySelector("button");

// function hi(){
//     console.log("one");
    
// }

// function hel(){
//     console.log("two");
    
// }

// // a.addEventListener("click",hi);
// // a.addEventListener("click",hel);

// a.ondblclick = hi;

// let z = document.querySelector(".as");
// let x = document.querySelector(".qw");
// let st = document.querySelector("body");
// let iiid;


// x.onclick = function stop()
// {
//     clearInterval(iiid);
// }

// z.onclick = function clo() {
//     function c1() {
//         let red1 = Math.floor(Math.random() * 255);
//         let green1 = Math.floor(Math.random() * 255);
//         let blue1 = Math.floor(Math.random() * 255);
//         let color = `rgb(${red1}, ${green1}, ${blue1})`;
//         st.style.backgroundColor = color;
//     }

//     // Change color every 500 milliseconds
//     iiid = setInterval(c1, 500);
// };



// let btn = document.querySelector(".as");
// let btn2 = document.querySelector(".qw");

// btn.addEventListener("click",forthis)
// btn2.addEventListener("click",forthis)



// function forthis () {
//     console.log(this); 
//     this.style.backgroundColor = "red";
// };


// let myInput = document.querySelector("#aa");

// myInput.addEventListener("change", function (e) {
//   console.log("Final value after blur:", this.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let data = JSON.parse(localStorage.getItem("data")) || [];
//     let show = document.getElementById("show");

//     data.forEach(item => {
//         let li = document.createElement("li");
//         li.textContent = item;

//         let btn = document.createElement("button");
//         btn.textContent = "Delete";
//         btn.classList.add("gg");
//         li.appendChild(btn);

//         btn.addEventListener("click", function() {
//             li.remove();
//             data = data.filter(i => i !== item);
//             localStorage.setItem("data", JSON.stringify(data));
//         });

//         show.appendChild(li);
//     });
// });


// let inb = document.querySelector(".tx"); // input
// let brt = document.querySelector(".ins"); // button

// brt.addEventListener("click", function(event) {
//     event.preventDefault(); 

//     // 1. Get and update localStorage
//     let data = JSON.parse(localStorage.getItem("data")) || [];
//     let inputValue = inb.value.trim();
//     if (inputValue === "") return; // prevent empty items

//     data.push(inputValue);
//     localStorage.setItem('data', JSON.stringify(data));

//     // 2. Create new <li> with delete button
//     let li = document.createElement("li");
//     li.textContent = inputValue;

//     let btn = document.createElement("button");
//     btn.textContent = "Delete";
//     btn.classList.add("gg");

//     // 3. Add delete button to li
//     li.appendChild(btn);

//     // 4. Add li to ul
//     let show = document.getElementById('show');
//     show.appendChild(li);

//     // 5. Clear input
//     inb.value = "";



// });


    // 6. Delete functionality
    // btn.addEventListener("click", function () {
    //     li.remove();

    //     // Remove from localStorage as well
    //     data = data.filter(item => item !== inputValue);
    //     localStorage.setItem('data', JSON.stringify(data));
    // });





//     // Get the parent element (ul)
// const list = document.getElementById('itemList');

// // Add a single event listener to the parent
// list.addEventListener('click', function(event) {
//   // Check if the clicked element is an <li>
//   if (event.target.tagName === 'LI') {
//     console.log(`${event.target.textContent} was clicked!`);
//   }
// });

// // Function to add a new item dynamically
// function addNewItem() {
//   const newItem = document.createElement('li');
//   newItem.textContent = `Item ${list.children.length + 1}`;
//   list.appendChild(newItem);
// }




//Simon
let gamesec = [];
let playesec = [];

let game = false;
let level = 0;
let canClick = false;

let btns = ["red", "yellow", "green", "purple"];

let lev = document.querySelector("#level");
 let h2 = document.querySelector("#instruction");

document.querySelector("body").addEventListener("click", function () {
  if (game === false) 
  {
      game = true;
      levelUp();
  }
});

function levelUp() {
  playesec = [];
  level++;
  lev.innerHTML = `Level ${level}`;

  let randno = Math.floor(Math.random() * 4);
  let rancolor = btns[randno];
  gamesec.push(rancolor);

  showLastColor(); 
}


function showLastColor() {
  canClick = false;

  let lastColor = gamesec[gamesec.length - 1];
  let btn = document.querySelector(`.${lastColor}`);

  gameFlash(btn);

  setTimeout(() => {
    canClick = true;
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function CheckAns(idx) {
  if (playesec[idx] === gamesec[idx]) {
    if (playesec.length === gamesec.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Sorry You lost Your score is ${level}`;
    setTimeout(reset,300);
  }
}

function btnpress() {
  if (!canClick) return;

  let btn = this;
  userFlash(btn);
  let ucol = btn.getAttribute("id");
  playesec.push(ucol);

  console.log("user sec:", playesec);
  CheckAns(playesec.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnpress);
}


function reset()
{
    game = false;
    gamesec = [];
    h2.innerText = `Last score was:${level} Press any key to start the game `;
    level = 0;
    canClick = false;
    alert("You Lost the game. Want to play again?");
}