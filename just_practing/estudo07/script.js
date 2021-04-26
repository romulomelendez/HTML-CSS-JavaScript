function countingStars() {

    let start = window.document.querySelector('input#start').value
    let end = window.document.querySelector('input#end').value
    let incre = window.document.querySelector('input#increment').value

    if ( start.length == 0 || end.length == 0 || incre.length == 0 ) {

        alert("I can't count, cuz some input are blank :|")

    } else if ( Number(start) == Number(end) || Number(incre) == 0 ) {
            
            alert('[ERROR] The increment input has an invalid value. CHANGE IT!')

    } else if ( Number(start) < Number(end) ) {
            
        window.document.querySelector('div#result').innerHTML = `\u{1F631} Counting...<p />`

        for ( let i = Number(start); i <= Number(end); i += Number(incre) ) {

            window.document.querySelector('div#result').innerHTML += ` ${i} \u{1F449}`

        }

    } else if ( Number(start) > Number(end) ) {

        window.document.querySelector('div#result').innerHTML = `\u{1F631} Counting...<p />`

        for( let i = Number(start); i >= Number(end); i -= Number(incre) ) {

            window.document.querySelector('div#result').innerHTML += ` ${i} \u{1F449}`

        }

    }

    window.document.querySelector('div#result').innerHTML += ` \u{1F3C1}`

}