var images = []


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

}

var loop = setInterval(loadImg, 1000)

const playSlider = () => {

    loop = setInterval(loadImg, 1000)
    window.document.getElementById('btnSlider').setAttribute("onclick", "stopSlider()")

}

const stopSlider = () => {
    
    clearInterval(loop)
    window.document.getElementById('btnSlider').setAttribute("onclick", "playSlider()")

}

const stopClock = () => alert('Ainda vou implementar rs, CALMA!')