  
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
    Change the fake variable names below to what they should be
    to get the data and display it.
*/


import API from "./data.js"
import renderDom from "./entriesDOM.js"
import radioButtonEventManager from "./radioButtonEventManager.js"
import deleteButtonEventManager from "./deleteButtonEventManager.js"
import recordEntryButtonEventManager from "./recordEntryButtonEventManager.js"

const allJournalEntries = () => {
    API.getJournalEntries()
        .then(response=> {
            renderDom.renderJournalEntries(response)
            deleteButtonEventManager.attachEventListenerToDeleteButton()
        })
}


// function calls from other pages- make notes on this

allJournalEntries()
recordEntryButtonEventManager.attachEventListenerToRecordButton()
radioButtonEventManager.attachEventListenerToRadioButtons()
recordEntryButtonEventManager.attachEventListenerToRecordButton()
