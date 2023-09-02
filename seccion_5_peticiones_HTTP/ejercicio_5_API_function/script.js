function obtenerFotos() {
    alert('Obteniendo imagenes');
    console.log("Obteniendo imagenes, espere un momento");
    let xhr = new XMLHttpRequest();
  
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  
    xhr.addEventListener("load", (data) => {
      const dataJSON = JSON.parse(data.target.response);
      const main = document.getElementById("main");
      for (photosInfo of dataJSON) {
        if (photosInfo.id <= 50) {
          console.log(photosInfo);
          const card = document.createElement("div");
          card.className = "card";
  
          const img = document.createElement("img");
          img.src = photosInfo.url;
  
          const titulo = document.createElement("h3");
          titulo.textContent = photosInfo.title;
  
          const id = document.createElement("h4");
          id.textContent = photosInfo.id;
  
          card.append(img, titulo, id);
          main.appendChild(card);
        }
      }
    });
    xhr.send();
  }
  
obtenerFotos();
