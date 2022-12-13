const CONFIG_API = {
    url : "https://cats.petiteweb.dev/api/single/mufasacatjs",
    headers : { 
"Content-type": "application/json"
    } 
}

class Api {
constructor(config){
    this._url = config.url,
    this._headers = config.headers
}

postAddCats(body) {

    fetch(`${this._url}/add`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: this._headers
    })

};

getAddCats(){

    fetch(`${this._url}/show`, {
        method: "GET"
       
    })

};

updateCat(body, idCat) {

    fetch(`${this._url}/update/ ${idCat}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: this._headers
    })

};

deleteCat(idCat) {

    fetch(`${this._url}/delete/${idCat}`, {
        method: "DELETE"
   
    })

};

getOneCats(idCat){

    fetch(`${this._url}/show/${idCat}`, {
        method: "GET"
       
    })

};
getAllMiCats(){

    fetch(`${this._url}/ids`, {
        method: "GET"
       
    })

};

}



const catsHeroesMult = new Api(CONFIG_API);

catsHeroesMult.postAddCats({
     id: 12155070,
     name: "Бегемот", 
     img_link: "https://krasivosti.pro/uploads/posts/2021-06/1623684895_10-krasivosti_pro-p-mein-kun-chernii-dim-zhivotnie-krasivo-fot-11.jpg",
     age: 100, 
     rate: 5, 
     description: "чертовски мистичен",
     favourite: false,
} );

catsHeroesMult.postAddCats({id: 758965369, name: "Багира", 
img_link: "https://gas-kvas.com/uploads/posts/2022-09/1663056152_7-gas-kvas-com-p-bagira-koshka-foto-7.jpg",
age: 5,  rate: 4, description: "грациозная красотка", favourite: true} );

catsHeroesMult.postAddCats({id: 7858758411, name: "Муфаса", 
img_link: "https://avatars.mds.yandex.net/get-zen_doc/61795/pub_5e15dd79dddaf400b1f6c8ae_5e15dd92dddaf400b1f6c8af/scale_1200",
age: 10,  rate: 3, description: "настоящий король, но очень доверчив", favourite: false} );

catsHeroesMult.postAddCats({id: 7858758411, name: "Розовая пантера", 
img_link: "http://funart.pro/uploads/posts/2021-07/thumbs/1626704641_26-funart-pro-p-rozovii-kot-zhivotnie-krasivo-foto-28.jpg",
age: 4,  rate: 2, description: "дружелюбная, хитрая, но слегка самоуверенная", favourite: false} );

catsHeroesMult.postAddCats({id: 7858758412, name: "Толстопуз", 
img_link: "https://adonius.club/uploads/posts/2022-05/1653807979_36-adonius-club-p-tolstii-polosatii-kot-krasivo-foto-43.jpg",
age: 7,  rate: 1, description: "назвал так кота, дети 90х меня поймут ) ", favourite: false} );


catsHeroesMult.getAddCats();

catsHeroesMult.updateCat({age:99}, 12155070);

catsHeroesMult.getAddCats();

catsHeroesMult.postAddCats({id: 456987321, name: "Создан для удаления", 
img_link: "https://cs1.livemaster.ru/storage/3c/c7/f9930fd681390dfaf8944797efst--kukly-igrushki-kot-iz-shersti-igrushka.jpg",
age: 11,  rate: 6, description: "ну, я пошел", favourite: false} );

catsHeroesMult.deleteCat(456987321);

catsHeroesMult.getOneCats(758965369);

catsHeroesMult.getAllMiCats();


