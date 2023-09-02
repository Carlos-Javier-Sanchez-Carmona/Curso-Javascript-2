const button = document.getElementById('button');

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/photos?')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    
    .then(res => {
        const main = document.getElementById('main')
        const fragment = document.createDocumentFragment()
        for(const photosInfo of res){
           if(photosInfo.id <= 20){
                console.log(photosInfo);
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = photosInfo.url;

                const titulo = document.createElement("h3");
                titulo.textContent = photosInfo.title;

                const id = document.createElement('h4');
                id.textContent = photosInfo.id;

                card.append(img, titulo, id);
                fragment.appendChild(card);
          };
            main.appendChild(fragment);           
        }
    })
})