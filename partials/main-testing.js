document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keypress", function(event) {
    if (event.code === "Enter") {

    }
  });
});
/*
    let inputt = document.querySelector("#input");
let button = document.querySelector("#submitBtn");

button.disabled = true; //setting button state to disabled

inputt.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector("#input").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}
*/
var utterances = [
  ["how are you", "how is life", "how are things"],        //0
  ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
  ["what are you doing", "what is going on", "what is up"],      //2
  ["how old are you"],					//3
  ["who are you", "are you human", "are you bot", "are you human or bot"],   //4
  ["how do you top up my bot", "how to top up marketbot", "top-up", "topup", "top up"],
  ["withdrawals", "withdrawal"],
["register"],
  ["help"],
];

// Possible responses corresponding to triggers

var answers = [
   [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],                                                                                  	//0
  [
    "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
  ],						//1
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],						//2
  ["I am infinite"],					//3
  ["I am just a bot", "I am a bot. What are you?"],	//4
  ["Visit our /home page and check out the Fund MarketBot dropdown menu."],
  ["Withdrawals have been paused as they update their website.", "Withdrawals have been paused, check back later for more info", "Please allow some time for withdrawals to open up again"],
  ["Click Sign in|Sign up to register"],
["Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying top up", "Say something like withdrawals", "say something like register", "Have questions, send us an e-mail at info@marketbotai.com", "Want to learn more? click sign in/sign up for more info", "Need help? Our support team is here to assist, e-mail us at info@marketbotai.com"],



];

// For any other user input

var alternatives = [
/*
  "Have questions about the MarketBot project? Send us an email at info@marketbotai.com",
  "Type help for more options",
  "I don't understand, try again.."
*/
"Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying top up", "Say something like withdrawals", "say something like register", "Have questions, send us an e-mail at info@marketbotai.com", "Want to learn more? click sign in/sign up for more info", "Need help? Our support team is here to assist, e-mail us at info@marketbotai.com"
];

var inputField = document.getElementById("input");
var inputt = document.querySelector("#input");
inputt.disabled = false; //setting button state to disabled
////addChatEntryBot();
inputField.addEventListener("keypress", function(event) {
//inputt.disabled = false; //setting button state to disabled

//inputt.addEventListener("keypress", stateHandle);
let input = inputField.value;

     if (event.key === "Enter" && inputField.value) { // || (buttonField.value == "submit" && inputField.value)) { // && input !== "Write something...") {
//inputt.disabled = false; //setting button state to disabled
     

    inputField.value = "";

    output(input);
 stateHandle();
    event.preventDefault();
 
    
 
  
}

});

function stateHandle() {
   
        inputt.disabled = true; //button remains disabled
     setTimeout(() => {
        inputt.disabled = false; //button is enabled
      }, 10000);
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  }
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {


  var messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>\u0055\u0073\u0065\u0072<br>${input}<br><br></span>`;
  messagesContainer.appendChild(userDiv);
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight; 
 
 

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  
  botDiv.id = "bot";
  botDiv.className = "bot response";
botText.innerText = " ";
 
  
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
 
  setTimeout(() => {
  botText.innerText = "\u0042\u006F\u0074\u000DTyping...\u000D\u000D";

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
  setTimeout(() => {
    botText.innerText = `\u0042\u006F\u0074\u000D${product}\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  }, 5000);
       }, 5000);
}



function addChat() {


  var messagesContainer = document.getElementById("messages");

  let bottDiv = document.createElement("div");
  let bottText = document.createElement("span");
  
  bottDiv.id = "bot";
  bottDiv.className = "bot response";
bottText.innerText = "\u0042\u006F\u0074\u000DTyping...\u000D\u000D";
 
  
  bottDiv.appendChild(bottText);
  messagesContainer.appendChild(bottDiv);
 
  setTimeout(() => {
    botText.innerText = `\u0042\u006F\u0074\u000DMy name is...\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  }, 5000);
       
}

function addChatEntryBot() {
//var botProduct = botText.innerText;
var messagesContainer = document.getElementById("messages");


let botDiv = document.createElement("div"); 
let botText = document.createElement("span");
botDiv.id = "bot"; 
botDiv.className = "bot response";
botText.innerText = " ";

botDiv.appendChild(botText); 
messagesContainer.appendChild(botDiv);
setTimeout(() => { 
botText.innerText = "\u0042\u006F\u0074\u000DTyping...\u000D\u000D";
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
setTimeout(() => { 
botText.innerText = `\u0042\u006F\u0074\u000DHi therer...\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}, 2000); 
}, 2000);
}

function openForm() {
   document.getElementById("myForm").style.display = "block";
  var box = document.getElementById('messages'); 
if (box.childNodes.length === 0) {
  addChatEntryBot();  
}
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
