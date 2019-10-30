/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


import API from "./data.js"
import renderDom from "./entriesDOM.js"

API.getJournalEntries()
.then(response => renderDom.renderJournalEntries(response))

// / In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

const handleJournalEntry = event => {
    console.log("click", event)
    
     const dateInput= document.getElementById("date-input")
     const conceptInput= document.getElementById("concept-input")
     const entryInput= document.getElementById("entry-input")
     const moodMenu= document.getElementById("mood")
    // Grab a reference to each part of the journal form

    const newJournalEntry = {
    date: dateInput.value,
    concept: conceptInput.value,
    entry: entryInput.value,
    mood: moodMenu.value
    }
    console.log(newJournalEntry)
   
//  API.postJournalEntry()
}


const attachEventListenerToRecordButton = () => {
    const recordEntryButton = document.getElementById("record-journal-entry")
    recordEntryButton.addEventListener("click",handleJournalEntry)
}


attachEventListenerToRecordButton()
