//create map
const map = L.map('mapid').setView([-23.3160748,-47.7272171], 16)

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
})



let marker;

//create and add marker
map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//adicionar campo de fotos

function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo
    input.value = ""
    //adiciona o clone 
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo inteiro
    span.parentNode.remove();
    console.log('cheguei')
}

//select yes or No

function toggleSelect(){
    
    //retirar .active dos botoes
    document.querySelectorAll('.button-select button')

    .forEach(function(button){
        button.classList.remove('active')
    })
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar o input hidden com o valor
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    
}





