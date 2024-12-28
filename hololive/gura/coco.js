function randomtext() {
    var text = `{"response": "https://oniontails.github.io/api/hololive/assets/gura/${Math.floor(Math.random()*648)}.jpg" }`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()