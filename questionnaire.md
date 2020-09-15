<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="questionnaire.css">
    <title>Questionnaire / CBCoders </title>
</head>
<body>
    <h1 id="title">CBCoders Website Questionnaire</h1>
    <p id="description">Please let us know what we can do to serve you.</p>
    <form id="survey-form">
        <fieldset id="top">
            <legend>Personal information:</legend>
            <span class="form-group"><label id="name-label" for="name">Name: </label><input id="name" type="text"
                    required placeholder="Enter you name"></span>
            <span class="form-group"><label id="email-label" for="email">Email: </label><input id="email" type="email"
                    required placeholder="Enter you Email"></span>
            <span class="form-group"><label id="number-label" for="number">Age: </label><input id="number" type="number"
                    min="0" max="130" placeholder="Enter you age"></span>
        </fieldset>
        <fieldset>
            <span class="form-group">
                <label id="dropdown-label" for="dropdown">What is the website needed for?</label>
                <select id="dropdown">
                    <option>Personal</option>
                    <option>Business</option>
                    <option>Local Government</option>
                    <option>Prefer not to say</option>
                    <option>Other</option>
                </select>
            </span>
        </fieldset>
        <fieldset>
            <label id="dropdown-label">Question goes here</label>
            <span class="form-group checker">
                <input id="definitely" type="radio" name="recommendations" value="definitely">
                <label for="definitely">Answer1</label>
            </span>
            <span class="form-group checker">
                <input id="maybe" type="radio" name="recommendations" value="maybe">
                <label for="maybe">Answer2</label>
            </span>
            <span class="form-group checker">
                <input id="not" type="radio" name="recommendations" value="not">
                <label for="not">Answer3</label>
            </span>
        </fieldset>
        <fieldset>
            <span class="form-group">
                <label id="like-dropdown-label">Question2 </label>
                <select id="like-dropdown">
                    <option>Answers</option>
                    <option>Answers</option>
                    <option>Answers</option>
                    <option>Answers</option>
                </select>
            </span>
        </fieldset>
        <fieldset>
            <label id="check-label">Things that should be improved in the future
                (Check all that apply): </label>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Front-end">
                <label>Front-end Projects</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Back-end">
                <label>Back-end Projects</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Data Visualization">
                <label>Data Visualization</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Challenges">
                <label>Challenges</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Open Source Community">
                <label>Open Source Community</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Gitter help rooms">
                <label>Gitter help rooms</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Videos">
                <label>Videos</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="City Meetups">
                <label>City Meetups</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Wiki">
                <label>Wiki</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Forum">
                <label>Forum</label>
            </span>
            <span class="form-group checker">
                <input type="checkbox" name="improvements" value="Additional Courses">
                <label>Additional Courses</label>
            </span>
        </fieldset>
        <fieldset>
            <span class="form-group">
                <label id="comments-label">Any Comments or Suggestions?</label>
                <textarea id="comment" placeholder="Enter your comment here..." rows="5"></textarea>
            </span>
            <input type="submit" value="Submit" id="submit">
        </fieldset>

    </form>
    <footer class="text-center">
        Made by <a href="https://github.com/communitybuildingcoders" target="_blank">John Bryson / CBCoders </a>.
    </footer>





























    <script src="questionnaire.js"></script>
</body>
</html>