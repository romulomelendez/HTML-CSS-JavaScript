
const imageFile = window.document.querySelector('input#image')


window.document.querySelector('button#select-image').addEventListener('click', () => {
    
    imageFile.click()

} )

window.addEventListener('DOMContentLoaded', () => {

    imageFile.addEventListener('change', () => {

        let file = imageFile.files.item(0)
        let reader = new FileReader()       //  Read a file
        reader.readAsDataURL(file)
        reader.onload = ( event ) => {

            let image = window.document.querySelector('img#image-preview')
            image.style.display = 'initial'
            image.src = event.target.result

        }

    } )

} )