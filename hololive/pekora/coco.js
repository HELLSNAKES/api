function randomtext() {
    var text = `{"response": "https://oniontails.github.io/api/hololive/assets/pekora/${Math.floor(Math.random()*533)}.jpg" }`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()
