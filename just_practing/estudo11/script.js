var images = []

const preloadImg = () => {

    for ( let i = 0; i < 5; i++ ) {

        let x                           //    This variable stores a number that corresponds to the name of each image.      
        img[i] = new Image()
        img[i].src = 'images/img0' + x + '.jpg'
        x++

    }

}

const loadImg = (img) => {
    
    preloadImg()
    window.document.querySelector('div#containerImages').style.backgroundImage = "url('" + imgs[img].src + "')"

}

window.addEventListener('load', loadImg())