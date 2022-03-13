(async function () {
    calculatePoints()
})()

function calculatePoints() {
    let selectedTime = document.querySelector('input[name="watchtime"]').value;
    let watching = 0.0333333333333333 * document.querySelector('input[name="subtype"]:checked').value;

    let points = Math.ceil(watching * (selectedTime * 60));

    document.getElementById("result").innerText = `It takes ${secondsToHms(selectedTime*60)} to get ${points} Channelpoints`
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return `${hDisplay} ${mDisplay} ${sDisplay}`;
}
