const renderTeamHTMl = (profile) => {
const htmlPage = [];

//Creates manager card HTMl 
const managerCard = manager => {
    return `
    <div class="container mx-auto mt-4">
    <div class="card-deck">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.imgur.com/KEeADmE.jpg" class="card-img-top" alt="ProfilePic">
                <div class ="card-body">
                <h5 class ="card-title"><i class="fas fa-user-tie"></i>${manager.getName()}</h5>
                <h6 class ="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                <div class ="card-body">
                <ul class ="list-group">
                    <li class ="list-group-item">ID: ${manager.getId()}</li>
                    <li class ="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class ="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
                </div>
                <a href="#" class ="btn mr-2"><i class ="fas fa-link"></i> Visit Site</a>
                <a href="#" class ="btn "><i class ="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
};

//creates engineer card HTML
const engineerCard = engineer => {
    return `
    <div class="container mx-auto mt-4">
    <div class="card-deck">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="ProfilePic">
                <div class ="card-body">
                <h5 class ="card-title"><i class="fas fa-user-alt"></i>${engineer.getName()}</h5>
                <h6 class ="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
                <div class ="card-body">
                <ul class ="list-group">
                    <li class ="list-group-item">ID: ${engineer.getId()}</li>
                    <li class ="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
                <a href="#" class ="btn mr-2"><i class ="fas fa-link"></i> Visit Site</a>
                <a href="https://github.com/${engineer.getGithub()}" class ="btn "><i class ="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
};

//creates intern card HTML
const internCard = intern => {
    return `
    <div class="container mx-auto mt-4">
    <div class="card-deck">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.imgur.com/P56fXQN.jpeg" class="card-img-top" style="height:200px; object-fit:cover" alt="ProfilePic">
                <div class ="card-body">
                <h5 class ="card-title"><i class="fas fa-user-graduate"></i>${intern.getName()}</h5>
                <h6 class ="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
                <div class ="card-body">
                <ul class ="list-group">
                    <li class ="list-group-item">ID: ${intern.getId()}</li>
                    <li class ="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
                </div>
                <a href="#" class ="btn mr-2"><i class ="fas fa-link"></i> Visit Site</a>
                <a href="#" class ="btn "><i class ="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
};
//High order functions for creating arrays and filtering data
htmlPage.push(profile
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => managerCard(manager))
);
htmlPage.push(profile
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => engineerCard(engineer))
    .join('')
);
htmlPage.push(profile
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => internCard(intern))
    .join('')
);

return htmlPage.join("");

}

//exports generated HTML page
module.exports = profile => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Business Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/css/style.css">
        <script src="https://kit.fontawesome.com/a99135b659.js" crossorigin="anonymous">
        </script>
    </head>
    
    <body>
        <div class="container-fluid p-3 my-3 bg-dark text-white">
        <div class="row">
            <div class="col-12 jumbotron  mb-3">
                <h1 class="text-center">My Business Team</h1>
                <p class="text-center">This is our Team.</p>
            </div>
        </div>
    <div class="container">
        <div class="card-deck">
            <div class="col-12 d-flex justify-content-center">
                ${renderTeamHTMl(profile)}
            </div>
        </div>
    </div>
    </div>
    </body>
    
    </html>
    `;
};