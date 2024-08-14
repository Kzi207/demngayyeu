// Ngày bắt đầu yêu nhau
const yourDate = new Date("2024-02-10T20:00:00");

// danh sách nhạc
const musicLinks = [
    '../music/nhac.mp3',
    '../music/nhac2.mp3', ///thiêm nhạc ở đây
    '../music/nhac3.mp3',
    '../music/anhdaquenvoicodon.mp3',
    '../music/emdaxaanh.mp3',
    '../music/idthangmay.mp3',
    '../music/bandoi.mp3',
    '../music/haiduanhoc.mp3',
    '../music/doantinhphai.mp3',
    '../music/tinhca.mp3',
    '../music/thucuoi.mp3'
];

document.addEventListener('DOMContentLoaded', function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " Ngày";

    function olock() {
        var today = new Date(),
            hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec = Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
    }

    olock();
    var timer = setInterval(function () {
        olock()
    }, 1000);


    const randomIndex = Math.floor(Math.random() * musicLinks.length);
    const randomMusicLink = musicLinks[randomIndex];
    
    document.querySelector("audio").setAttribute("src", randomMusicLink);

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );
}, false);
