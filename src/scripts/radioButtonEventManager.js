import API from "./data.js"
import renderDom from "./entriesDOM.js"

const radioButtonEventManager = {
    
    // handleRadioButtonEvent is a method because it is inside an object
    // Methods are functions, not all functions are methods

    handleRadioButtonEvent(event) {
        console.log(event)
        // console logging the event will help you find the path you need your vaiable below to equal to
        const selectedMood = event.target.id
        console.log(selectedMood)


        API.getJournalEntries().then(response => {
            console.log(response)
            const filterEntries = response.filter(entry => {
                return entry.mood.toLowerCase() === selectedMood
            })
            console.log(filterEntries)
            renderDom.renderJournalEntries(filterEntries)
        })

    },

    attachEventListenerToRadioButtons() {
        const buttons = document.getElementsByName("button")
        buttons.forEach(button => {
            button.addEventListener("click", this.handleRadioButtonEvent)
        })
    }

}

export default radioButtonEventManager 

