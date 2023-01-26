const adSoyad = document.getElementById("right-ad-soyad");
const unvan = document.getElementById("right-unvan");
const renkDegisecekYerler = document.querySelectorAll(".renklendir");

function yaziTipiDegistir() {
  const yaziTipi = document.getElementById("yaziTipi");
  switch (yaziTipi.value) {
    case "1":
      document.body.style.fontFamily = "Lora";
      break;
    case "2":
      document.body.style.fontFamily = "Oswald";
      break;
    case "3":
      document.body.style.fontFamily = "Sofia Sans";
      break;
  }
}
function okulSayisi() {
  const okulSayisi = document.getElementById("okulSayisi");
  const okul = document.getElementById("okul");
  const egitimUl = document.getElementById("egitim-ul");
  okul.innerHTML = "";
  egitimUl.innerHTML ="";
  for (let index = 0; index < okulSayisi.value; index++) {
    okul.innerHTML += `
    
    <div>
     <span>${index + 1}. Okul </span>
    <input
                data-inner="${index + 1}-okul-adı"
                type="text"
                onkeyup="yazdir(this)"
              />
    <input
                data-inner="${index + 1}-okul-yıl"
                type="text"
                onkeyup="yazdir(this)"
              />
    </div>

    `;

    egitimUl.innerHTML += `
      <li>
          <span  class="yazdir" id="${index + 1}-okul-adı"></span>
            <ul>
              <li class="yazdir" id="${index + 1}-okul-yıl"></li>
            </ul>
      </li>
    `;
  }
}
function yetenekSayisi() {
  const yetenekSayisi = document.getElementById("yetenekSayisi");
  const yetenek = document.getElementById("yetenek");
  const yetenekUl = document.getElementById("yetenek-ul");
  yetenek.innerHTML = "";
  yetenekUl.innerHTML ="";
  for (let index = 0; index < yetenekSayisi.value; index++) {
    yetenek.innerHTML += `
    
    <div>
     <span>${index + 1}. Yetenek </span>
    <input
                data-inner="${index + 1}-yetenek-adı"
                type="text"
                onkeyup="yazdir(this)"
              />
    <input
                data-inner="${index + 1}-yetenek-seviye"
                type="text"
                onkeyup="yazdir(this)"
              />
    </div>

    `;

    yetenekUl.innerHTML += `
      <li>
          <span  class="yazdir" id="${index + 1}-yetenek-adı"></span>
            <ul>
              <li class="yazdir ic-ul" id="${index + 1}-yetenek-seviye"></li>
            </ul>
      </li>
    `;
  }
}
function cerceveTipiDegistir() {
  const cerceveSekli = document.getElementById("cerceveSekli");
  const fotografDegistir = document.querySelector(".cv-left-fotograf p");
  switch (cerceveSekli.value) {
    case "1":
      fotografDegistir.style.borderRadius = "0";
      break;
    case "2":
      fotografDegistir.style.borderRadius = "30px";
      break;
    case "3":
      fotografDegistir.style.borderRadius = "50%";
      break;
  }
}

function yazdir(e) {
  const yazdirilacakYerler = document.querySelectorAll(".yazdir");
  yazdirilacakYerler.forEach((item) => {
    if (e.getAttribute("data-inner") == item.id) {
      item.innerHTML = e.value;
    }
  });
}

function renkDegistir(e) {
  renkDegisecekYerler.forEach((item) => {
    if (e.getAttribute("data-inner") == item.id) {
      if (item.id == "isim-kutu-yazi-renk") {
        item.style.color = e.value;
      } else {
        item.style.backgroundColor = e.value;
      }
    }
  });
}

function cizgiRenk(e) {
  const baslik = document.querySelectorAll(".baslik");
  baslik.forEach((eleman) => {
    eleman.style.borderColor = e.value;
  });
}
