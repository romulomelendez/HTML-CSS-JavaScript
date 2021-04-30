var images = []
var loop

const preloadImg = () => {

    let x = 1                         //    This variable stores a number that corresponds to the name of each image.

    for ( let i = 0; i < 5; i++ ) {
        
        images[i] = new Image()
        images[i].src = 'images/img0' + x + '.jpg'
        x++
        
    }
   
}

const loadImg = () => {
    
    if ( images.length === 0 )  {

        preloadImg()

    }
    window.document.querySelector('div#containerImages').style.backgroundImage = "url('" + images[Math.floor(Math.random() * 5)].src + "')"
    //window.document.querySelector('div#containerImages').style.backgroundImage = "url('" + images[changePhoto()].src + "')"
    changePhoto()

}

const changePhoto = () => loop = setInterval(loadImg, 10000)
const stopSlider = () => clearInterval(loop)
const stopClock = () => alert('Fui clicado!')

window.addEventListener('load', loadImg)