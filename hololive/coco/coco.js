function randomtext() {
    var text = `https://oniontails.github.io/api/hololive/assets/coco/${Math.floor(Math.random()*173)}.jpg`;
    return text;
}
document.getElementById('a').innerHTML = randomtext()