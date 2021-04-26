function loading () {

    var hours = new Date().getHours()
    var showMessage = window.document.getElementById('msg-container')
    var showPhoto = window.document.getElementById('photo')
    var back = window.document.body.style

    if ( hours >= 6 && hours < 13 ) {

        showMessage.innerHTML = `<h3>Now it's ${hours} am!</h3>`
        showPhoto.src = './images/morning-circle.png'
        back.background = "#d1eeff"
        window.document.querySelector('div#msg-container').style.color = "#41352c"

    } else if ( hours >= 13 && hours < 18 ) {

        showMessage.innerHTML = `<h3>Now it's ${hours} pm!</h3>`
        showPhoto.src = './images/afternoon-circle.png'
        back.background = "#d08970"
        window.document.querySelector('div#msg-container').style.color = "#6c414b"

    } else if ( hours >= 18 && hours <= 23 ) {

        showMessage.innerHTML = `<h3>Now it's ${hours} pm!</h3>`
        showPhoto.src = './images/night-circle.png'
        back.background = "#081d20"
        window.document.querySelector('div#msg-container').style.color = "black"


    } else {

        showMessage.innerHTML = "<h3>Oh it's dawn man! Get out sleep!</h3>"
        showPhoto.src = './images/dawn.jpg'
        back.background = "#b2a7a1"
        window.document.querySelector('div#msg-container').style.color = "#ca9e91"

    }

}