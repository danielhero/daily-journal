/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.concept}" class="journalEntry">
           <div>
           <p>${entry.date}</p> 
           <p>${entry.entry}</p>
           <p>Mood: ${entry.mood}</p>
           </div> 
        </section>
    `
}

export default JournalEntryComponent