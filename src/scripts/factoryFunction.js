

// this is your factory functionto put your dom references(your data) into an object. you call this function on journal.js

const buildEntry = (date, concept, entry, mood) => {
    const newJournalEntry = {
        "date": date,
        "concept": concept,
        "entry": entry,
        "mood": mood
    }
    return newJournalEntry
}

export default buildEntry