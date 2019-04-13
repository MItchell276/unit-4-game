var randomNumber = Math.floor(Math.random() * 120) + 19
var numberWins = 0
var numberLosses = 0
var userTotal = 0

// generate rand om number from 19-120
// document.getElementById("randomNumber").innerHTML
// Math.floor(Math.random() * 120) + 19
// console.log(randomNumber)


// on click generate rand random number 1-12
function generateGems() {
    var Gems = $(".gemImage")

    for (var i = 0; i < Gems.length; i++) {
        $(Gems[i]).attr("data-value", Math.floor(Math.random() * 12) + 1)
        console.log(Gems[i])

    }
}
generateGems()

$(".gemImage").on("click", function (event) {
    var value = $(this).data("value")
    userTotal += value
    $("#finalTotal").html(userTotal)
    // if number adds up to total random you win
    $("#numberWins").text(numberWins)
    if (userTotal === randomNumber) {
        alert('you win')
        numberWins++;
        $("#numberWins").text(numberWins)

    }

    else if (userTotal >= randomNumber) {
        alert('you lose')
        numberLosses++;
        $("#numberLosses").text(numberLosses)

    }

})
$("#randomNumber").html(randomNumber)

// if number adds up to total random you win


// reset once number matched is equal
// count wins and loses

