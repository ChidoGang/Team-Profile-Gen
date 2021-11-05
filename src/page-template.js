function generateTeamprofileGenerator(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Team Generator</title>
     

      <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
    
    `
}

function printLayout(data) {
    let print = '';
    for(let i = 0; i < data.length; i++) {
        print += `
            ${generateParticipants(data[i])}
        `
    }

    return print;
}

function generateParticipants(data) {
    return `<div class="col s6">
    <div class="card">
      <div class="card-content white-text">
        <span class="title">${data.teammember}</span>
        <p class="icon">They are ${data.email} years old</p>
      </div>
      <div class="card-action">
        <p>Do they like to cook? ${data.officenumber}</p>
        <p>Their favorite type of food is ${data.id}.</p>
      </div>
    </div>
  </div>
    `
}

module.exports = generateTeamprofileGenerator;