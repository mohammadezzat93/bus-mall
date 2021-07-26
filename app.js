'use strict';

let div1 = document.getElementById('div1');

let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');

let max = 25;
let Counter = 0;

// random index
let image1_index;
let image2_index;
let image3_index;

let products = [];

function Product(name, src) {

    this.name = name;
    this.src = src;
    this.vote = 0;
    this.shown = 0;

    products.push(this);
}
new Product('bag', 'img/bag.jpg'); // 0
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg'); // 18

console.log(products);

function random() {
    return Math.floor(Math.random() * products.length);
}
// console.log(random());

function renderAllImages() {
    image1_index = random();
    image2_index = random();
    image3_index = random();

    while (image1_index === image2_index) {

        image2_index = random();

    }
    while (image1_index === image3_index) {

        image3_index = random();

    }
    while (image2_index === image3_index) {

        image3_index = random();

    }

    image1.src = products[image1_index].src;
    image2.src = products[image2_index].src;
    image3.src = products[image3_index].src;

}
renderAllImages();

image1.addEventListener('click', click);
image2.addEventListener('click', click);
image3.addEventListener('click', click);

function click(e) {

    // console.log(e.target.id);

    Counter++;

    if (Counter < max) {
        if (e.target.id === 'img1') {

            products[image1_index].vote++;
            products[image1_index].shown++;
            products[image2_index].shown++;
            products[image3_index].shown++;
        }
        else if (e.target.id === 'img2') {

            products[image2_index].vote++;
            products[image1_index].shown++;
            products[image2_index].shown++;
            products[image3_index].shown++;
        }
        else if (e.target.id === 'img3') {

            products[image3_index].vote++;
            products[image1_index].shown++;
            products[image2_index].shown++;
            products[image3_index].shown++;
        }
        renderAllImages();
    }

    else {
        let result = document.getElementById('result');

        for (let i = 0; i < products.length; i++) {
            let list = document.createElement('li');
            result.appendChild(list);
            list.textContent = `${products[i].name} had ${products[i].vote} Votes, And seen ${products[i].shown} times `;


        }
        image1.removeEventListener('click', click);
        image2.removeEventListener('click', click);
        image3.removeEventListener('click', click);
    }

    //     else {

    //         let div_show = document.getElementById('images-div');

    //         div_show.addEventListener('submit', submitt);

    // function submitt(event){

    //   let result = event.target.result.value;

    //          result = document.getElementById('result');

    //         for (let i = 0; i < products.length; i++) {
    //             let list = document.createElement('li');
    //             result.appendChild(list);
    //             list.textContent = `${products[i].name} had ${products[i].vote} Votes, And seen ${products[i].shown} times `;


    //         }
    //         image1.removeEventListener('click', click);
    //         image2.removeEventListener('click', click);
    //         image3.removeEventListener('click', click);
    //     }
    // }

}

