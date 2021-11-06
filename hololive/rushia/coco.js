function randomtext() {
    var text = `{"response": "https://emilia.cf/api/hololive/assets/rushia/${Math.floor(Math.random()*866)}.jpg" }`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()
