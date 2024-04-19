let submitbutton1 = document.querySelector(".submitbutton");
submitbutton1.onclick = function() {
  let input1 = document.querySelector(".userinput1");
  let input2 = document.querySelector(".userinput2");
  let input3 = document.querySelector(".userinput3");
  let results= document.querySelector(".result");
  let uinput1= input1.value;
  let uinput2= input2.value;
  let uinput3= input3.value;
  
    if (uinput1 === "Action" || uinput1 === "action" && uinput2 === "PG-13" && uinput3 === "Disney" || uinput3 === "disney"){
      results.innerHTML = '<a href="https://www.space.com/marvel-movies-in-order">these are some marvel movies you will possibly enjoy watching!</a>';
    } else if (uinput1 === "" && uinput2 === ""){
        results.innerHTML = "N/A";
    } 
  if (uinput3 === "Disney" && uinput2 !== "PG-13" ||   uinput2 === "" && uinput1 === "Action"){
      results.innerHTML = "Not Enough Info To Display Results";
  } 
  if (uinput1 === "SCIFI" || uinput1 === "scifi" && uinput2 === "PG" || uinput2 === "pg" && uinput3 === "Disney" || uinput3 === "disney"){
    results.innerHTML = '<a href="https://www.starwars.com/films">These Are Some Star Wars Movies You Will Possibly Enjoy Watching!</a>';
  }
  if (uinput1 === "Action" || uinput1 === "action" && uinput2 === "PG" || uinput2 === "pg" && uinput3 === "WB" || uinput3 === "WB"){
    results.innerHTML = '<a href="https://www.starwars.com/films">These Are Some DC Movies You Will Possibly Enjoy Watching!</a>';
  }
};