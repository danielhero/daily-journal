

const contentTarget = document.querySelector(".journalFormContainer")


const render = () => {
        contentTarget.innerHTML = `
           <form action="" >
        <fieldset class="journalForm">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
    </form>
    <form action="" >
        <fieldset class="journalForm">
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCoveredS">
        </fieldset>
    </form>
    <form action="" >
        <fieldset class="journalForm">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="20" rows="2"></textarea>
        </fieldset>
    </form>

    <form action="" >
        <fieldset class="journalForm">
            <label for="mood">Mood of the day</label>
            <select name="mood" size="1">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="content">Content</option>
              </select>
              </select>
        </fieldset>
    </form>
    <form action="" >
        <input type="submit" value="Record Journal Entry">
    </form>
    `
}

const JournalFormComponent = () => {
    render()
}

export default JournalFormComponent
