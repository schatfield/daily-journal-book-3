

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },

  postJournalEntry(newJournalEntry) {

    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
  },

  deleteJournalEntry(deletedEntryId) {
    return fetch(`http://localhost:3000/entries/${deletedEntryId}`, {
      method: "DELETE"
    })
  },
  
  getOneJournalEntry(entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`)
    .then(response => response.json())
    // you need this fetch to your API for EDIT in addition to the one below because you need retrieve the specific entry you want to edit in order to populate the form with the entry that's already there
  }
}
  // when you're just "getting" something you fon't need a method or to sringify. see getJournalEntires above for more claification

// editJournalEntry() - this also needs to be written, your base URL will look similar to delete where it needs an ID, BUT it will need a body.stringify because you're posting data The method: is "PUT"

export default API

// // Invoke the factory function, passing along the form field values
// const newJournalEntry = ??

// // Use `fetch` with the POST method to add your entry to your API
// fetch("", {            // Replace "url" with your API's URL
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newJournalEntry)
// })