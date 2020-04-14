function initMap() {
  
let deliveryLocation = {
    lat: 44.4092906,
    lng: -79.6655338
  }; 
    
let div = document.querySelector('div'); 
//create new map object
let map = new google.maps.Map(div, {
  zoom: 10,
  center: deliveryLocation
});
let marker=new google.maps.Marker({position:deliveryLocation,map:map});
}

//fetching the data from git hub
fetch('https://sodvadiyavidhi.github.io/ScriptLab/weird.json')
 .then(function(response){ 
    //returning the json response 
    return response.json();
  })
  //adding functionality 
  .then(function weirdthings(jsonObj){
			let weirdthings = jsonObj.weirdthings;
			//creating new elements to set the data fetched from the github
			for (let i = 0; i < weirdthings.length; i++) {
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let list = document.createElement('ul');
        let section = document.querySelector('section');
				img.setAttribute('src', 'https://sodvadiyavidhi.github.io/ScriptLab/Image/' + weirdthings[i].image);
				img.setAttribute('alt', weirdthings[i].name);
				h2.textContent = weirdthings[i].name;
				p1.textContent = 'Price: ' +
        weirdthings[i].price;
				let detail = weirdthings[i].detail;
				for (let x = 0; x < detail.length; x++) {
					let listItem = document.createElement('li');
					listItem.textContent = detail[x];
					list.appendChild(listItem);
				}
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(list);
				section.appendChild(article);
				}
    });
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;
connection.addEventListener('change', updateConnectionStatus);
function updateConnectionStatus() {
    let foot= document.querySelector('footer');
    let para=document.querySelector('p');
    sentence="Connection type changed from " + type + " to " + connection.effectiveType;
    para.innerHTML=sentence;
        foot.append(para);
        console.log(sentence);
        type = connection.effectiveType;
}

                              

