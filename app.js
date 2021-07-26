
'use strict';

let div1 = document.getElementById('div1');
let buttonElement = document.getElementById('btn');

let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');

let labelArray = [];
let voteArray = [];
let shownArray = [];

let allImage = [];

let max = 25;
let Counter = 0;

// random index
let image1_index;
let image2_index;
let image3_index;

Product.allProducts = [];

function Product(name, src) {

    this.name = name;
    this.src = src;
    this.vote = 0;
    this.shown = 0;

    Product.allProducts.push(this);
    labelArray.push(this.name);
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

console.log(Product.allProducts);

function random() {
    return Math.floor(Math.random() * Product.allProducts.length);
}
// console.log(random());

let anothorArray = [];

function renderAllImages() {
    image1_index = random();
    image2_index = random();
    image3_index = random();

    // while (image1_index === image2_index) {

    //     image2_index = random();

    // }
    // while (image1_index === image3_index) {

    //     image3_index = random();

    // }
    // while (image2_index === image3_index) {

    //     image3_index = random();

    // }
    let first = random();
    let second = random();
    let third = random();
    while (image1_index === image2_index || image1_index === image3_index || image2_index === image3_index ||
            anothorArray.includes(first)  || anothorArray.includes(second)|| anothorArray.includes(third)) {

        first = random();
        second = random();
        third = random();

        image1_index = random();
        image2_index = random();
    }

    image1.src = Product.allProducts[image1_index].src;
    image2.src = Product.allProducts[image2_index].src;
    image3.src = Product.allProducts[image3_index].src;

}
renderAllImages();

image1.addEventListener('click', click);
image2.addEventListener('click', click);
image3.addEventListener('click', click);

function click(e) {

    // console.log(e.target.id);

    // Counter++;

    if (Counter < max) {
        if (e.target.id === 'img1') {

            Product.allProducts[image1_index].vote++;
            Product.allProducts[image1_index].shown++;
            Product.allProducts[image2_index].shown++;
            Product.allProducts[image3_index].shown++;
        }
        else if (e.target.id === 'img2') {

            Product.allProducts[image2_index].vote++;
            Product.allProducts[image1_index].shown++;
            Product.allProducts[image2_index].shown++;
            Product.allProducts[image3_index].shown++;
        }
        else if (e.target.id === 'img3') {

            Product.allProducts[image3_index].vote++;
            Product.allProducts[image1_index].shown++;
            Product.allProducts[image2_index].shown++;
            Product.allProducts[image3_index].shown++;
        }
        renderAllImages();
    }

    else {

        buttonElement.hidden = false;
        buttonElement.addEventListener('click', showlist);

        function showlist() {

            let result = document.getElementById('result');

            for (let i = 0; i < Product.allProducts.length; i++) {
                let list = document.createElement('li');
                result.appendChild(list);
                list.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].vote} Votes, And seen ${Product.allProducts[i].shown} times `;

            }

            buttonElement.removeEventListener('click', showlist);

        }

        for (let i = 0; i < Product.allProducts.length; i++) {
            voteArray.push(Product.allProducts[i].vote);
            shownArray.push(Product.allProducts[i].shown);

        }

        image1.removeEventListener('click', click);
        image2.removeEventListener('click', click);
        image3.removeEventListener('click', click);
        showmyChart();
    }
    Counter++;

}

function showmyChart() {

    const data = {
        labels: labelArray,
        datasets: [{
            label: 'Votes',
            data: voteArray,
            backgroundColor: ['yellow', 'blue', 'pink',
                'Olive', 'Lime', 'Aqua', 'Green', 'salmon', 'indianRed', 'silver', 'maroon', 'Teal', 'Navy', 'Fuchsia', 'Purple',
                'darkblue', 'black', 'Aqua', 'DarkSalmon', 'LightSalmon'
            ],
            borderColor: ['black',
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArray,
            backgroundColor: ['orange', 'khaki', 'salmon', 'indianRed', 'silver', 'maroon',
                              'darkblue', 'black', 'Aqua', 'DarkSalmon', 'LightSalmon',
                              'Olive', 'Lime', 'Aqua', 'Green', 'Teal', 'Navy', 'Fuchsia', 'Purple','pink',
                
            ],
            borderColor: ['black',
            ],
            borderWidth: 1
        }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
