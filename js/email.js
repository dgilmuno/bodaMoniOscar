
function sendMailCancion() {
var settings = {
    "url": "https://api.mailjet.com/v3.1/send",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Basic NDUzZDMyZTk5OTRkYWQ5NzMwNDYwZTkyNjY1ZmRjM2Q6M2E0YjBlYmJlMjdlMWJmYTEyYjAzMmQ5MjRiMjE3ZjU=",
      "Access-Control-Allow-Origin": "http://localhost/boda"
    },
    "data": JSON.stringify({
      "Messages": [
        {
          "From": {
            "Email": "davidgilmunoz78@gmail.com",
            "Name": "Piden canción"
          },
          "To": [
            {
              "Email": "dgilmuno@gmail.com",
              "Name": "Mónica y Oscar"
            }
          ],
          "Subject": "Nueva petición de canción",
          "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
          "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        }
      ]
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}