/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


import API from "./data.js"
import renderDom from "./entriesDOM.js"
import buildEntry from "./buildEntryFactoryFunction.js"
import radioButtonEventManager from "./radioButtonEventManager.js"

const allJournalEntries = () => {
    API.getJournalEntries()
        .then(response => renderDom.renderJournalEntries(response))
}

// / In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

const handleJournalEntry = event => {
    console.log("click", event)

    const dateInput = document.getElementById("date-input").value
    const conceptInput = document.getElementById("concept-input").value
    const entryInput = document.getElementById("entry-input").value
    const moodMenu = document.getElementById("mood").value
    // Grab a reference to each part of the journal form along with whatever it's value is for each entry

    const journalObject = buildEntry(dateInput, conceptInput, entryInput, moodMenu)
    // this function call "buildEntry" is is returning something so you have to assign it to something-store it in a variable. Everything that comes back from buildEntry can now be stored in const journalObject
    // this function is grabbing our references to the dom (see above) and putting them into an object. the variable names storing the references are being passed into "buildEntry" as arguments to the parameters set on factoryFunction.JS.
    // the function "buildEntry" is defined on factoryFunctions.js. you only want this function called when you are handling a new journal entry. that is why it's inside handleJournalEntry

    console.log("BUILD ENTRY", buildEntry())

    API.postJournalEntry(journalObject).then( () => {
        return allJournalEntries();
    })
    //    .then(response => renderDom.renderJournalEntries(response))

    //    "newJournalEntry is the function call for the POST fetch on data.js" Use dot notation to get inside the API object to access newJournalEntry
}


const attachEventListenerToRecordButton = () => {
    const recordEntryButton = document.getElementById("record-journal-entry")
    recordEntryButton.addEventListener("click", handleJournalEntry)
}


attachEventListenerToRecordButton()

radioButtonEventManager.attachEventListenerToRadioButtons()