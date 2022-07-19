function notes()
{
  let firstName = "Jammie";
  let lastName = "Lachance-Côté";

  alert(`<!DOCTYPE>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>\n
       <script src="src/script.js" />
    </body>
</html>

by ${firstName} ${lastName}`);
}
// HTML Notes
let htmlNotes = document.querySelector(".htmlNotes");
htmlNotes.addEventListener("click", notes);

// Current Date
let now = new Date();
let date = now.getDate();
if (date < 10)
{
  date = `0${date}`;
}
let month = now.getMonth() + 1;
if (month < 10)
{
  month = `0${month}`;
}
let year = now.getFullYear();

let dateElement = document.querySelector("#current-date");
dateElement.innerHTML = `${year}-${month}-${date}`;