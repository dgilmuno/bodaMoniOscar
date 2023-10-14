function sendMail(name, email, subject, message) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + btoa('453d32e9994dad9730460e92665fdc3d'+":" +'3a4b0ebbe27e1bfa12b032d924b217f5'));
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "dgilmuno@gmail.com", "Name": "David Gil Muñoz"},
        "To": [{"Email": email, "Name": name}],
        "Subject": subject,
        "TextPart": message
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => logError(error)
        
        );
  }
  
  //    sendMail('Test Name',"dgilmuno@gmail.com",'Test Subject','Test Message')

  function logError(error) {
    debugger;
    console.log('error', error)
  }