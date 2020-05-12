const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let item;
for (let i = 0 ; i < 4 ; i++){
    document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).setAttribute("class","item");
    item = document.getElementsByClassName("item")[i];
    item.appendChild(document.createElement("h4")).innerHTML = "Genre:" + works[i].tips;
    item.appendChild(document.createElement("div")).setAttribute("class","inner-box");
    document.getElementsByClassName("inner-box")[2*i].appendChild(document.createElement("h3")).innerHTML = works[i].author;
    document.getElementsByClassName("inner-box")[2*i].appendChild(document.createElement("h5")).innerHTML = "lifetime:" + works[i].lifetime;
    document.getElementsByTagName("h3")[2*i].style.display = "inline-block";
    item.appendChild(document.createElement("div")).setAttribute("class","inner-box");
    document.getElementsByClassName("inner-box")[2*i+1].appendChild(document.createElement("h3")).innerHTML = "Popular Photos";
    for (let j = 0 ; j < works[i].photos.length ; j++){
        document.getElementsByClassName("inner-box")[2*i+1].appendChild(document.createElement("img")).setAttribute("src","./img/" + works[i].photos[j]);
    }
    item.appendChild(document.createElement("button")).innerHTML = "Visit";
}
for (let i = 0 ; i < document.getElementsByTagName("img").length ; i++){
    document.getElementsByTagName("img")[i].setAttribute("class","photo");
}
for (let i = 0 ; i < document.getElementsByTagName("h5").length ; i++){
    document.getElementsByTagName("h5")[i].style.display = "inline-block";
    document.getElementsByTagName("h5")[i].style.margin = "0";
    document.getElementsByTagName("h5")[i].style.marginLeft = "1em";
}
