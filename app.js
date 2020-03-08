const places = document.getElementById("places")
places.addEventListener('click', e => {
    if (document.querySelector('#places li.active') !== null) {
        document.querySelector('#places li.active').classList.remove('active');
    }
    e.target.className = "active";
    const placeName = e.target.innerText

    let mapImage = "";
    switch (placeName) {
        case "Dhaka":
            mapImage = "images/map-dhaka.png"
            break;
        case "Sylhet":
            mapImage = "images/map-sylet.png"
            break;
        case "Rajshahi":
            mapImage = "images/map-rajshashi.png"
            break;
        case "Rangpur":
            mapImage = "images/map-rangpur.png"
            break;
        case "Khulna":
            mapImage = "images/map-khulna.png"
            break;
        case "Barisal":
            mapImage = "images/map-barisal.png"
            break;
        case "Chittagong":
            mapImage = "images/map-ctg.png"
            break;
        default:
            mapImage = "images/blank.png"
    }
    document.getElementById("map-image").setAttribute("src", mapImage)
})