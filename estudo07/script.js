function countingStars() {

    var start = Number(window.document.querySelector('input#start').value)
    var end = Number(window.document.querySelector('input#end').value)
    var incre = Number(window.document.querySelector('input#increment').value)

    for ( var i = start; i <= end; incre ){

        window.document.querySelector('div#result').innerHTML = "${i} >"

    }

}