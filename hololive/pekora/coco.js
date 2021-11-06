function randomtext() {
    var text = `{"response": "https://emilia.cf/api/hololive/assets/pekora/${Math.floor(Math.random()*533)}.jpg" }`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()
