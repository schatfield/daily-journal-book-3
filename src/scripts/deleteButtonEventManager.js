import API from "./data.js"
import renderDom from "./entriesDom.js"

// write your attach event listener first

const deleteButtonEventManager = {

    handleDeleteButtonEvent(event) {
        console.log("event", event)
        const journalEntryToDelete = event.target.id.split("--")[1]

        API.deleteJournalEntry(journalEntryToDelete).then(() => {
            API.getJournalEntries()
                .then(response => {
                    renderDom.renderJournalEntries(response)
                    deleteButtonEventManager.attachEventListenerToDeleteButton()
                })
        })

    },


    attachEventListenerToDeleteButton() {
        const deleteButtons = document.querySelectorAll(".delete-button")
        // console.log(deleteButtons)
        deleteButtons.forEach(button => {
            button.addEventListener("click", this.handleDeleteButtonEvent)
        })

    }
}

export default deleteButtonEventManager



//////* EXAMPLE OF USING EVENT LISTENER WITH ANONYMOUS CALLBACK FUNCTION*//////
// attachEventListenerToDeleteButton() {
//     const deleteButtons = document.querySelectorAll(".delete-button")
//     // console.log(deleteButtons)
//     deleteButtons.forEach(button => {
//         button.addEventListener("click", (event) => {
//             console.log("event", event)
//             const journalEntryToDelete = event.target.id.split("--")[1]
            // YOUR API CALL WOULD GO HERE IN THIS SYNTAX//
//         })
//     })

// }

