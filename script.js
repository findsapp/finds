let users = [
    {name:"Lena", age:18, photo:"https://picsum.photos/id/1011/400/500"},
    {name:"Max", age:20, photo:"https://picsum.photos/id/1005/400/500"},
    {name:"Sophie", age:17, photo:"https://picsum.photos/id/1012/400/500"}
];

let index = 0;
let startX = 0;

function confirmAge() {
    document.getElementById("ageScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
}

function register() {
    let name = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    if(age < 16) {
        alert("Nur ab 16 erlaubt!");
        return;
    }

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("appScreen").classList.remove("hidden");
    loadUser();
}

function loadUser() {
    if(index >= users.length) {
        document.getElementById("card").innerHTML = "<h2>Keine Profile mehr</h2>";
        return;
    }
    document.getElementById("photo").src = users[index].photo;
    document.getElementById("name").innerText =
        users[index].name + ", " + users[index].age;
}

function like() {
    console.log("LIKE:", users[index]);
    index++;
    loadUser();
}

function dislike() {
    console.log("DISLIKE:", users[index]);
    index++;
    loadUser();
}

/* ECHTER SWIPE */
const card = document.getElementById("card");

card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

card.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if(endX - startX > 100) like();
    if(startX - endX > 100) dislike();
});