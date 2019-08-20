const main = document.getElementById('main');

fetch("http://localhost:3000")
    .then((results) => {
        return results.json();
    })
    .then((json) => {
        console.log(json)
        for (i = 0; i < json.length; i++) {
            main.innerHTML +=
                `
                <div class="article">
                    <img src="${json[i].photo}"><br>
                    <div class="txt">
                        <h1>${json[i].title}</h1><br>
                        <p>${json[i].text || ""}</p><br><br>
                    </div>
                </div>
        `
        }
    })