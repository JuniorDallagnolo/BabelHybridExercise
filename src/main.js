const webapp = {
  WebBuilder(data) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let { value, icon_url } = data;
    h1.textContent = value;
    img.src = icon_url;
    div.appendChild(h1);
    div.appendChild(img);
    document.querySelector('body').appendChild(div);
  }, url: "https://api.chucknorris.io/jokes/random"
};

function init() {
  fetchFunc();
  setInterval(fetchFunc, 3000);
}

async function fetchFunc() {
  let data = await fetch(webapp.url).then(r => r.json());
  webapp.WebBuilder.call(this, data);
}

document.addEventListener('DOMContentLoaded', init);
