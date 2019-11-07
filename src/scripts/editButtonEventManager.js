import API from "./data.js"

const editButtonEventManager = {
    handleEditButtonEvent(event) {
        // JOB OF EDIT BUTTON HANDLER
        // 1. Get Id of journal entry you want to edit
        const journalEntryToEdit = event.target.id.split("--")[1]

        // 2. Make API call to get journal entry

        // 3. Populate form with journal entry data 


    },
   

    attachEventlistenerToEditButton() {
        const editButtons = document.querySelectorAll(".edit-button")
        console.log(editButtons)
        editButtons.forEach(button => {
            button.addEventListener("click",this.handleEditButtonEvent)
        })
    }
}
    

export default editButtonEventManager

// handleDeleteButtonEvent(event) {
//     console.log("event", event)
//     const journalEntryToDelete = event.target.id.split("--")[1]

//     API.deleteJournalEntry(journalEntryToDelete).then(() => {
//         API.getJournalEntries()
//             .then(response => {
//                 renderDom.renderJournalEntries(response)
//                 deleteButtonEventManager.attachEventListenerToDeleteButton()
//             })
//     })

// },