
// Function which populates the plant section of the Garden page
window.onload = function populateGarden() {
    if (Object.keys(localStorage) == 0) plant.textContent = "You must add plants to your Garden!";
    else {
    console.log(Object.keys(localStorage));
    let plantKeys = Object.keys(localStorage);
    let plantKeysLength = plantKeys.length;
    for (let i = 0; i < plantKeysLength; i++) {
        console.log(plantKeys[i])
    let data = JSON.parse(localStorage.getItem(plantKeys[i]));
        data.forEach(e => {
            let dataInfo = "";
            Object.keys(e).forEach(es => dataInfo += e[es] + "<br />")
            plant.innerHTML += `<div id="${plantKeys[i]}" class="plant">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOaSURBVEiJlZNNaFxVFMd/9973Xiczk2g+MBZciQtdxG6sC0VQUawLBaFZKIIolJKUpp/oRitDV13UilC7sboSwYWr2kbBiDRWLCgqCBFEi0oNtTOxmffm471773HxnEmaySTpgQfDuef8f+djDiLCVr/KpZkDB85Pf3IrOZotWuXbg/eLcLLZtM8d+nzf7q3m9QAqX+9/4NCF6fNHz+0dW/EqhZMzgAFIW+79CqqbW/lub/HYxf0njsxOT24KUEpPGKOeTqxaPDo7/VIOnZkEHurEWCuD/16YOglw/NLBnbQLvzSa/lUvatemAEHuKRUNImLilvvgyOz0JJoX18ZZ658/Pj+zwyOfiXBX0nB48feujQt6OkDXtBbKpYB6bFUr9R8NoRzITXFZJuMZXDAwnDQs3gta6WpfwGtzUw9mWfbrbeXi7yhFqWiIE0sUaoOI6e0U2m2/faBgiBOXFycsnPrm8MBiszlx4vEzl28aUbEQPeps+OdybJ8AUq0VpWJAFPX/o6Wpp9F0eC8ooDwYXK2m2W+ttnq9E7OSLSwPDYbFpOGmqrU21grlkkGrvvqIQJxYgkAxNha1tFanlm5kdyqReB2AXggCRbkU0E4luna9TT1xGNO/A/FCuWi4Y2wbYaALcWKxVjDKXO4FbEsXAAbLAVGYu5PEcqOe4b2s1UZrxeBQQKmUrzHNPPXYAuCUn+sBvLnz9CJQAxgZDgmDfDZp6qnWUmQVQykYHYkIgzw9s0JtKcvfNPL2rnd/6u0gt/c61Y2ORAT/QzIr3eo6XXYKsFao1tJul4VoZTzrANKTwB9dyPAKJE4szgnG5Hvqii+tiBujbKD8K6sVlcjN863MH74b7c4B93V8ScNRjy2lYn4OpaKhHluShuvmBYFqbxuInnrryXe+Wq3Xc8lH//6r4bJwrhaZpYbR45lSQ6lSo6LRNhHEg7+RF6WFLNLSGq9eo+z8FRXppbV6PQBng8cUsm80tYyufey1EJGw1UxwMKGD4h5g/4YjAqXij194pDCy/Yv1Clhtvt3AN+vYVgvbbM7cvufT0yB+E0BuMn/sB2DHRgBXv45vxSgTNsNnzxbXi+l7pgI/biQOIDbNf5jgar+YvgC9KUAQ1zku8/MtA0C+31DeZnTOW9Bf9ovruwNQSubfuAg8vN6rW/4H307QQbQcPHN2eO1yO7ZRB6K8vCwiHwJJ1+syXLKEZA0hKlzBFHb3Ewf4Dy5u9Gq0jyVQAAAAAElFTkSuQmCC" alt="Plant">
                <p id="gardenPlants", class="gardenPlantStyle">
                    ${dataInfo}
                    </p>
                    <button class="rmbtn" onclick="removeFromGarden(\'${plantKeys[i]}\')">Remove</button>
            </div>`
                });
    }
    }
    };

