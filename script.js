const reviews = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Xi Ling",
        profile: "Software Developer",
        review: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque blanditiis non quas dolorum est. Dicta ipsa animi asperiores fugiat doloribus eius numquam neque eaque quasi vero, nostrum odit ducimus."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Mark",
        profile: "SDE-1",
        review: "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque blanditiis non quas dolorum est. Dicta ipsa animi asperiores fugiat doloribus eius numquam neque eaque quasi vero, nostrum odit ducimus."
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Lina Paul",
        profile: "Hardware Engineer",
        review: "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque blanditiis non quas dolorum est. Dicta ipsa animi asperiores fugiat doloribus eius numquam neque eaque quasi vero, nostrum odit ducimus."
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Alex",
        profile: "Computer Developer",
        review: "4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque blanditiis non quas dolorum est. Dicta ipsa animi asperiores fugiat doloribus eius numquam neque eaque quasi vero, nostrum odit ducimus."
    },
];

const image = document.getElementById("profile-pic");
const name = document.getElementById("name");
const designation = document.getElementById("designation");
const text = document.getElementById("review");

const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
const randomBtn = document.querySelector(".random-button");

let currentItem = 0;

function showReview(){
    const item = reviews[currentItem];
    image.src = item.img;
    name.textContent = item.name;
    designation.textContent = item.profile;
    text.textContent = item.review;
}

leftBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0)
        currentItem = reviews.length-1;
    showReview();
});

rightBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>reviews.length-1)
        currentItem = 0;
    showReview();
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview();
});