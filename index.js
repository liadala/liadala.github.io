(async function () {
    calculatePoints()
})()

function calculatePoints() {
    let selectedTime = document.querySelector('input[name="watchtime"]').value;
    let watching = 0.0333333333333333 * document.querySelector('input[name="subtype"]:checked').value;

    let points = Math.ceil(watching * (selectedTime * 60));

    document.getElementById("result").innerText = `It takes ${selectedTime} Minutes to get ${points} Channelpoints`
}