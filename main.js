//Data Model + Variables
var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather"];

var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

//Query Selectors
var generateMessageButton = document.querySelector('#generate-new-message-button');
var affirmationCheckbox = document.querySelector('#affirmation');
var mantraCheckbox = document.querySelector('#mantra');
var messageDisplayBox = document.querySelector('#display-message-box')
var addMessageButton = document.querySelector('#add-message-button')
var submitMessageButton = document.querySelector('#submit-message-button')
var createMessageForm = document.querySelector('.form')
var meditationImg = document.querySelector('.meditation-pic')

//Event Listeners
generateMessageButton.addEventListener('click', function(event) {
    event.preventDefault()
    displayRandomMessage()
  })

addMessageButton.addEventListener('click', displayAddMessageForm)

submitMessageButton.addEventListener('click', function(event) {
  event.preventDefault()
  displayRandomMessage()
})

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
 };
  
function displayRandomMessage(){
    if(affirmationCheckbox.checked){
        messageDisplayBox.innerHTML = `<p class="message">${affirmations[getRandomIndex(affirmations)]}</p>`
    } else {
        messageDisplayBox.innerHTML = `<p class="message">${mantras[getRandomIndex(mantras)]}</p>`
    }
}

function displayAddMessageForm(){
  createMessageForm.classList.remove('hidden')
  meditationImg.classList.add('hidden')
}

function displayCreatedMessage(){
  messageDisplayBox.innerHTML = `<p>:P</p>`
};
//vars needed
  //make message button
  //users input (from box)
  //submit button

//event listeners
  //make message button click ==> displays form 
  //submit button click ==> saves message to correct array, replaces form with message

//functions
  //display form to make message function
    //replaces meditation image with form using innerHTML
  //createUserMessage 
    //invokes a save message function (based off which message type was selected in drop down menu)
    //replaces messageDisplayBox.innerHTML with the new message (from user input)

//FORM
  //drop down menu with message types
  //input box
  //submit button

