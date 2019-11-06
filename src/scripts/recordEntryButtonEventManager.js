
import buildEntry from "./buildEntryFactoryFunction.js"
import deleteButtonEventManager from "./deleteButtonEventManager.js"
import API from "./data.js"
import renderDom from "./entriesDOM.js"

const recordEntryButtonEventManager = {


    handleJournalEntry(event) {
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

        API.postJournalEntry(journalObject).then(() => {
            API.getJournalEntries()
            .then(response=> {
                renderDom.renderJournalEntries(response)
                deleteButtonEventManager.attachEventListenerToDeleteButton()
            })
        })
        //    .then(response => renderDom.renderJournalEntries(response))

        //    "newJournalEntry is the function call for the POST fetch on data.js" Use dot notation to get inside the API object to access newJournalEntry
    },


     attachEventListenerToRecordButton(){
        const recordEntryButton = document.getElementById("record-journal-entry")
        recordEntryButton.addEventListener("click", this.handleJournalEntry)
    }
}

export default recordEntryButtonEventManager
