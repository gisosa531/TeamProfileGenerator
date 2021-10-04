const managerCard = manager => {
    return `
    <div class="container mx-auto mt-4">
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="ProfilePic">
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
    `
}



