// Variables

var h1 = "<img src='imgs/head-01.png'>"
var h2 = "<img src='imgs/head-02.png'>"
var h3 = "<img src='imgs/head-03.png'>"

var b1 = "<img src='imgs/body-01.png'>"
var b2 = "<img src='imgs/body-02.png'>"
var b3 = "<img src='imgs/body-03.png'>"

var l1 = "<img src='imgs/legs-01.png'>"
var l2 = "<img src='imgs/legs-02.png'>"
var l3 = "<img src='imgs/legs-03.png'>"

// Array of body parts

var heads = [h1, h2, h3]
var bodies = [ b1, b2, b3]
var legs = [l1, l2, l3]

var counter = 0

// Body part change

$(".top").on("click", updateHead)
$(".middle").on("click", updateBody)
$(".bottom").on("click", updateLegs)

// Body parts functions

function updateHead() {

    $(".top").html(heads[counter]);
    counter++;
    console.log(heads.length)
    if (counter == heads.length) {
        counter = 0;
    }

}
    
    function updateBody() {
    
        $(".middle").html(bodies[counter]);
        counter++;
        // console.log(bodies.length)
        if (counter == bodies.length) {
            counter = 0;
        }
    }

    function updateLegs() {
    
        $(".bottom").html(legs[counter]);
        counter++;
        // console.log(legs.length)
        if (counter == legs.length) {
            counter = 0;
        }

    }
    
    
var randomNum = Math.floor(Math.random()*heads.length)
console.log(randomNum)

$(".top").html("<img src='imgs/head-01.png'>", "<img src='imgs/head-02.png'>", "<img src='imgs/head-03.png'>", heads[randomNum])

// ------

var randomNum = Math.floor(Math.random()*bodies.length)
console.log(randomNum)

$(".middle").html("<img src='imgs/body-01.png'>", "<img src='imgs/body-02.png'>", "<img src='imgs/body-03.png'>", bodies[randomNum])


// ------

var randomNum = Math.floor(Math.random()*legs.length)
console.log(randomNum)

$(".bottom").html("<img src='imgs/legs-01.png'>", "<img src='imgs/legs-02.png'>", "<img src='imgs/legs-03.png'>", legs[randomNum])

$(".top").on("click", function (e) {
    console.log(e)
    {
        updateHead();
    }
})


function randomizeBody() {

    $(".top").html(heads[counter]);
    counter++;
    if (counter == heads.length) {
        counter = 0;
    }


    var randomNum = Math.floor(Math.random()*heads.length);
    console.log(randomNum)

    $(".top").html(heads[randomNum])


    $(".middle").html(bodies[counter]);
    counter++;
    if (counter == bodies.length) {
        counter = 0;
    }

    var randomNum = Math.floor(Math.random()*bodies.length);
    console.log(randomNum)

    $(".middle").html(bodies[randomNum])


    $(".bottom").html(legs[counter]);
    counter++;
    if (counter == legs.length) {
        counter = 0;
    }

    var randomNum = Math.floor(Math.random()*legs.length);
    console.log(randomNum)

    $(".bottom").html(legs[randomNum])

}

$(document).on("keypress", function (e) {
    console.log(e)
    if(e.key == '1') {
        randomizeBody();
    }
})

// Color scheme change

var t1 = "#ffd3eb"
var m1 = "#ffbbe0"
var b1 = "#ffa2d5"

var t2 = "#e5fff9 "
var m2 = "#bbfff0"
var b2 = "#a2ffdb"

var tops = [t1, t2]
var middles = [m1, m2]
var bottoms = [b1, b2]

var counter = 0

function changeColors() {

$(".top").css(tops[counter]);
counter++;
if (counter == tops.length) {
    counter = 0;
}

$(".middle").css(middles[counter]);
counter++;
if (counter == middles.length) {
    counter = 0;
}

$(".bottom").css(bottoms[counter]);
counter++;
if (counter == bottoms.length) {
    counter = 0;
}

$(".top").css("background-color", tops[counter])
$(".middle").css("background-color", middles[counter])
$(".bottom").css("background-color", bottoms[counter])

}


$(document).on("keypress", function (e) {
    console.log(e)
    if(e.key == '2') {
        changeColors();
    }
})


// var colorScheme1 = ["$('.top').css('background-color', '#ffd3eb')", "$('.middle').css('background-color', '#ffbbe0')", "$('.bottom').css('background-color', '#ffa2d5')"]

// var colorScheme2 = ["$('.top').css('background-color', '#d1fff5')", "$('.middle').css('background-color', '#bbfff0')", "$('.bottom').css('background-color', '#a2ffdb')"]

// var schemes = ["colorScheme1","colorScheme2"]


// function updateColor() {
   
//     $("document").css(schemes[counter]);
//         counter++; 
//         // console.log(schemes.length)
//         if (counter == schemes.length) {
//             counter = 0;
//         }

// }

// $("document").on("keypress", function (e) {
//     console.log(e)
//     if(e.key == '2') {
//         updateColor();
//     }
// })




// $("blockquote").text(quotes[counter]);
// counter++;
// // console.log(quotes.length)
// if (counter == quotes.length) {
//     counter = 0;
// }



// function updateColor2() {
//     $(".top").css("background-color", "#ffd3eb")
//     $(".middle").css("background-color", "#ffbbe0")
//     $(".bottom").css("background-color", "#ffa2d5")
// }

// var schemes = ["updateColor","updateColor2"] 