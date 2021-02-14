function init() {
    var e7 = document.getElementById("e7")
    var e8 = document.getElementById("e8")
    var e16 = document.getElementById("e16")
    var e9 = document.getElementById("e9")
    var e18 = document.getElementById("e18")
    var e13 = document.getElementById("e13")
    var e12 = document.getElementById("e12")
    var e2 = document.getElementById("e2")

var message = e7.innerHTML + ' ' + e8.innerHTML + ' ' + e16.innerHTML + ' ' + e9.innerHTML + ' ' + e18.innerHTML + ' ' + e13.innerHTML + ' ' + e12.innerHTML + ' ' + e2.innerHTML

console.log(message)
}

window.onload = init