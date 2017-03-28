'use strict';
let spyArray = [];

const fetchData = () => {
    const  myRequest = new Request ('./data.json');

    fetch(myRequest ).then((response) => {
        return response.json();
    }).then((json) => {
        console.log("File received...  " + json);
        spyArray = json;
        displayTumbnails();
    }).catch((err) => {
        console.log("Something bad :( " + err);
    });
}

fetchData();

const displayTumbnails = () => {
    for (let item of spyArray) {
        console.log(item);
        const article = document.createElement('article');
        article.setAttribute('class', 'card');

        article.innerHTML = `
                        <img class="card-img-top" src="${item.thumbnail}" alt="">
                        <div class="card-block">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text">${item.details}</p>
                        </div>
                        <div class="card-footer">
                            <p><button class="btn btn-primary">View</button></p>
                        </div>
                        `;
        article.addEventListener('click', (evt) => {
            document.querySelector('.modal-body img').src = item.image;
            document.querySelector('.modal-title').innerHTML = item.title;
            $('#myModal').modal('show');
            console.log($('#myModal'));

        });
        document.querySelector('.card-deck').appendChild(article);
    }
}

