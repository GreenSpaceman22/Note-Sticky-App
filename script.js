
let wantsToCreateParagraph = confirm("Do you want to create a new paragraph?");

 

    if (wantsToCreateParagraph) {
      paraMaker()
      wantsToCreateParagraph = confirm("Want to create another paragraph?");
      }
    
      
function paraMaker() {
    let newTextBox = document.createElement("input")
      newTextBox.setAttribute("type", "text",)
      newTextBox.setAttribute("placeholder", "enter your text here")
      body_box.appendChild(newTextBox)

    let submitButton = document.createElement("button")
      submitButton.innerText = "Submit"
      body_box.appendChild(submitButton)

      submitButton.addEventListener("click", function () {    
    let newParagraph = document.createElement("p")
    
      const backGroundColor = getRandomHexColor()
      newParagraph.style.background = backGroundColor
      newParagraph.style.display = "flex"
      newParagraph.style.direction = "column"
      newParagraph.style.justifyContent = "space-around"
      newParagraph.style.fontSize = "larger"
      paragraph_container.appendChild(newParagraph)

      newParagraph.innerText = "Post: " + newTextBox.value     
      newTextBox.value = ""
    })
    
    parseFloat.innerText =  userInput  
  }

function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";

  let randomColor = "#";

  for (let index = 0; index < 6; index++) {
    let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);

    let randomHexChar = hexChars[randomHexCharIdx];

    randomColor += randomHexChar;
  }

  return randomColor;
}