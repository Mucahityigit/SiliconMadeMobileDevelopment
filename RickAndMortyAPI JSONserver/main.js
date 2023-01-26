const BASE_URL = "https://rickandmortyapi.com/api/character";

function getResponse(res) {
    if (!res?.ok) {
        throw new Error("Hata: ", { cause: res });
    } else {
        return res.json();
    }
}

function getChars() {
    return fetch(BASE_URL).then((res) => getResponse(res));
}



getChars()
    .then((chars) => renderFeaturedMovies(chars.results))
    .catch((err) => console.log(err));

const renderFeaturedMovies = (chars) => {
    const html = chars.map(
            (char) => `
      <li style="width: 280px; position: relative; margin-bottom: 30px; " class="splide__slide">
      <img style="width:100%;" src="${char.image}" alt="">
      <div style="display: flex; width: 280px; position: absolute; padding: 15px 10px; justify-content: space-between; bottom: 0; background-color: rgba(0,0,0,.6);color: #fff;">
        <p>${char.name}</p>
        <p> ${char.status === "Alive" ? `<span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; line-height: 20px; background-color: green;" class="char-status"></span>` : char.status === "Dead" ? `<span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; line-height: 20px; background-color: red;" class="char-status"></span>`: `<span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; line-height: 20px; background-color: grey;" class="char-status"></span>`  }  ${char.status} - ${char.species}</p>
    </div>
</li>
        `

        )
        .join("");



    document.getElementById("splide_list").innerHTML = html;
    new Splide(".splide", {
        autoWidth: true,
    }).mount();
};