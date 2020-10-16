const options = {
    drggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.3160748,-47.7272171], 14)

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})


//create and add marker
L.marker([-23.3160748,-47.7272171], {icon})
.addTo(map)


function selectImage(event){
    const button = event.currentTarget


    //remover todas as classes active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar container de imagem

    imageContainer.src = image.src

    //adicionar a class active no botão clicado
    button.classList.add("active")
}

