

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
  }
}


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