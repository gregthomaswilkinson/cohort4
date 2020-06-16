let ol = document.querySelector("ol");
let originaldiv = document.querySelector("#iAmTheDiv2");
let cardValue = 0;

// div.addEventListener('click', (() => {
//     console.log(event.target);
// }));

document.getElementById("iAmTheDiv").addEventListener('click', () => {
    console.log(event.target.id);
    document.getElementById("MessageArea").textContent = event.target.id;
});

document.getElementById("showListButton").addEventListener('click', () => {
    console.log(document.querySelector("ol"));
    let text = "";
        for (let i = 0; i < document.querySelector("ol").children.length; i++) {
            text += document.querySelector("ol").children[i].textContent + " ";
        }
    document.getElementById("MessageArea2").textContent = text;
});

document.getElementById("addToListButton").addEventListener('click', () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("more stuff"));
    ol.appendChild(li);
});

//function to createCard and all its elements
    
    function createCard(div) {
        console.log("helloooo");
        
        cardValue = cardValue + 1;

        const cardName = document.createElement("span");
        const addCardBeforeButton = document.createElement("button");
        const addCardAfterButton = document.createElement("button");
        const deleteCardButton = document.createElement("button");
        const breakline = document.createElement("br");
        const breakline2 = document.createElement("br");

        cardName.textContent = "Card " + cardValue;
        addCardBeforeButton.textContent = "Add Before";
        addCardAfterButton.textContent = "Add After";
        deleteCardButton.textContent = "Delete";

        addCardBeforeButton.setAttribute("id", "idAddCardBeforeButton");
        addCardAfterButton.setAttribute("id", "idAddCardAfterButton");

        div.classList.add("card");
        cardName.classList.add("name");
        cardName.classList.add("textcenter");
        addCardBeforeButton.classList.add("createCardBefore")
        addCardAfterButton.classList.add("createCardAfter")
        deleteCardButton.classList.add("delete");

        div.appendChild(cardName);
        div.appendChild(breakline);
        div.appendChild(addCardBeforeButton);
        div.appendChild(addCardAfterButton);
        div.appendChild(breakline2);
        div.appendChild(deleteCardButton);

    }

    //Create a card with normal button
    document.getElementById("addACardButton").addEventListener('click', injectCard);

    function injectCard() {
            let div = document.createElement("div");
            createCard(div);
            originaldiv.appendChild(div);
        }

    //Remove Cards
    originaldiv.addEventListener('click', deleteCard);

    function deleteCard(e) {
        if(e.target.classList.contains("delete")) {
            let div = e.target.parentElement;
            originaldiv.removeChild(div);
        }
    }

    //Add Card Before
    originaldiv.addEventListener('click', addCardBefore);

    function addCardBefore(e) {
        if(e.target.classList.contains("createCardBefore")) {
            let div = document.createElement("div");
            console.log(event.target.parentElement);
            //console.log(originaldiv.childNodes.length.valueOf());
            console.log(e);
            createCard(div);
            originaldiv.insertBefore(div, event.target.parentElement);

        }
    }

    //Add Card After
    originaldiv.addEventListener('click', addCardAfter);

    function addCardAfter(e) {
          if(e.target.classList.contains("createCardAfter")) {
              let div = document.createElement("div");
              createCard(div);
              originaldiv.insertBefore(div, event.target.parentElement.nextSibling);
         }
     }


