(function () {
    "use strict";

    const myVideo = document.querySelector("#myVideo");
    const fs = document.querySelector("#fs");
    const audio = document.querySelector("#audio");


    //Zoom in video
    fs.addEventListener("click", function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    const lyrics = [
        { id: "line1", start: 7, end: 10 },
        { id: "line2", start: 8, end: 10 },
        { id: "line3", start: 10.5, end: 13 },
        { id: "line4", start: 12, end: 13 },
        { id: "line5", start: 14, end: 16 },
        { id: "line6", start: 15, end: 16 },
        { id: "line7", start: 17, end: 20 },
        { id: "line8", start: 19, end: 20 },
        { id: "line9", start: 21, end: 24 },
        { id: "line10", start: 25, end: 27 },
        { id: "line11", start: 28, end: 32 },
        { id: "line12", start: 32, end: 35 },
    ];


0,60,120,180,240
    const filterTimeline = [
        { start: 0, end: 1, filter: "hue-rotate(60deg)" },
        { start: 2, end: 3, filter: "hue-rotate(120deg)" },
        { start: 3, end: 4, filter: "hue-rotate(0deg)" },
        { start: 5, end: 6, filter: "hue-rotate(180deg)" },
        { start: 7, end: 8, filter: "hue-rotate(240deg)" },
        { start: 10, end: 13, filter: "hue-rotate(1200deg)" },
        { start: 14, end: 16, filter: "hue-rotate(0deg)" },
        { start: 17, end: 20, filter: "hue-rotate(120deg)" },
        { start: 21, end: 24, filter: "hue-rotate(180deg)" },
        { start: 25, end: 27, filter: "hue-rotate(60deg)" },
        { start: 28, end: 32, filter: "hue-rotate(0deg)" },
        { start: 32, end: 35, filter: "hue-rotate(180deg)" },
    ];




    setInterval(() => {
        const time = audio.currentTime;
        lyrics.forEach((line) => {
            const element = document.getElementById(line.id);
            if (time >= line.start && time < line.end) {
                element.className = "showing";
            } else {
                element.className = "hidden";
            }
        });

        const current = filterTimeline.find(
            (range) => time >= range.start && time < range.end
        );
        if (current) {
            myVideo.style.filter = current.filter;
            console.log("切换滤镜到:", current.filter);
        }
    }, 100);


    const startButton = document.getElementById("play");

    startButton.addEventListener("click", () => {
        audio.play();
        myVideo.play();
        document.getElementById("play").style.display = "none";
    });

    audio.addEventListener("play", () => {
        console.log("play the music");
    });
    startButton.addEventListener("click", () => {
        console.log("🔘 Start clicked");
        audio.play();
        myVideo.play();
        document.getElementById("startScreen").style.display = "none";
    });










})();
