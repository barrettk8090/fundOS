function NewProjectSubmission({user}){
    return (
        <>        
        <div>
            <h1>New Project Submission</h1>
            <p>If you're ready to begin fundraising for a project, fill out this form and hit submit. Please read more details on what it means to submit a project here: INSERT LINK.</p>
        </div>

        <div>
            <form>
                <label>
                    Project Name:
                    <input type="text" name="project_name" />
                </label>
                <label>
                    Project Description:
                    <input type="text" name="project_description" />
                </label>
                <label>
                    Project Image:
                    <input type="img" name="project_image" />
                </label>
                <label>
                    Funding Needed:
                    <input type="text" name="funding_needed" />
                </label>
                <label>
                    Deadline:
                    <input type="text" name="deadline" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>


    )
}

export default NewProjectSubmission