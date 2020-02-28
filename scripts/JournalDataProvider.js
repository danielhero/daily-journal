/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "02/27/2020",
        concept: "JS Object Automation",
        entry: "We talked about using JS to hold raw data, then transfer that info into HTML via functions.",
        mood: "Sad" 
    },
    {
        date: "02/24/2020",
        concept: "Hello, World",
        entry: "We stated our first group project called 'Hello, World' about making a travel broshure.",
        mood: "Content"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}