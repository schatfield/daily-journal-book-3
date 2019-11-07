

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
        <button type= "button" id="editEntry--${journalEntry.id}" class="edit-button">Edit</button>
      </section>
    `
  },

  makeJournalEntryForm() {
    return `
    <form>
        <fieldset>
        <input type="hidden" id="recipeId" value=""/>
            <label for="date-input">Date of entry</label>
            <br>
            <input type="date" id="date-input" name="date-input">
            </br>
        </fieldset>
        <fieldset>
            <label for="concept-input">Concepts covered</label>
            <br>
            <input type="text" id="concept-input" name="concept-input">
            </br>
        </fieldset>
        <fieldset>
            <label for="entry-input">Journal entry</label>
            <br>
            <textarea id="entry-input" name="entry-input"></textarea>
            </br>
            </fieldset>
        <fieldset>
            <label for="mood-input">Mood</label>
            <br>
            <select class="mood" id="mood" name="mood-input">
                <option value="amazing">Amazing</option>
                <option value="murderous">Murderous</option>
                <option value="ok">Ok</option>
                </br>
            </select>
            </select>
        </fieldset>
        <fieldset>
            <legend>Filter Journal Entries By Mood</legend>
            <input type="radio" id="amazing" name="button">
            <label for="amazing">Amazing</label>
            <input type="radio" id="murderous" name="button">
            <label for="murderous">Murderous</label>
            <input type="radio" id="ok" name="button">
            <label for="ok">Ok</label>
        </fieldset>
    </form>
    <button type="button" id="record-journal-entry"> Record Journal Entry</button>
    `

  }
}

export default entryManager