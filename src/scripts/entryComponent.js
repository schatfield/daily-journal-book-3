

const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // console.log("journal entry", journalEntry)
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>  
        <button type= "button" id="deleteEntry--${journalEntry.id}" class="delete-button">Delete</button>
      </section>
    `
  }
}

export default entryManager