// script.js
(function () {
    "use strict";
    console.log("reading js");

    document.addEventListener('DOMContentLoaded', () => {
        /* background */
        const bg1 = document.getElementById('bg1');
        const bg2 = document.getElementById('bg2');
        const bg3 = document.getElementById('bg3');
        const bg4 = document.getElementById('bg4');
        /* intro page */
        const startBtn = document.getElementById('start');
        const titleImg = document.getElementById('title');
        const context1 = document.getElementById('context1');
        const nextBtn = document.getElementById('next');
        const mountainImg = document.getElementById('mountain');
        const fishermanImg = document.getElementById('fishmanIntro');
        /* fisherman into the valliage and talk with the child */
        const fishman2 = document.getElementById('fishman2');
        const child = document.getElementById('child');
        const closeBtn2 = document.getElementById('close2');
        const nextBtn2 = document.getElementById('next2')
        const prevBtn2 = document.getElementById('prv2');
        const dialogImg = document.getElementById('dialogImg');
        /* fisherman meet lady and elder */
        const elder = document.getElementById('elder');
        const lady = document.getElementById('lady');
        const fishman0 = document.getElementById('fishman0');
        /* fisherman talk with lady and play the game*/
        const nextBtn3 = document.getElementById('next3')
        const prevBtn3 = document.getElementById('prv3');
        const closeBtn3 = document.getElementById('close3');
        const ladydialog = document.getElementById('ladyDialog');
        const ladyScene = document.querySelectorAll('.ladyScene');
        const fieldIds = ['field1', 'field2', 'field3', 'field4'];
        const hud = document.getElementById('hud');
        const scoreDisplay = document.getElementById('score');
        const timerDisplay = document.getElementById('timer');
        const startGameBtn = document.getElementById('startGameBtn');
        const resultDialog = document.getElementById('resultDialog');
        const finalScoreText = document.getElementById('finalScoreText');
        const restartGameBtn = document.getElementById('restartGameBtn');
        const startScreen = document.getElementById('startScreen');
        let score = 0;
        let timeLeft = 10;
        let gameStarted = false;

        const scoreMap = {
            jewlery: 30,
            hotel: 25,
            fishRod: 5,
            field1: 15,
            field2: 15,
            field3: 15,
            field4: 15
        };




        const dialogImages = [
            'images/dialog0.png',
            'images/dialog1.png',
            'images/dialog2.png',
            'images/dialog3.png',
            'images/dialog4.png',
            'images/dialog5.png',
            'images/dialog6.png',
            'images/dialog7.png',
            'images/dialog8.png',
            'images/dialog9.png',
            'images/dialog10.png'
        ];
        let currentDialog = 0;

        const ladyDialogImages = [
            'images/ladyDialog0.png',
            'images/ladyDialog1.png',
        ];

        let currentLadyDialog = 0;


        





        /* intro page and start*/
        if (startBtn && titleImg) {
            startBtn.addEventListener('click', () => {
                titleImg.classList.add('fade-out'); // 开始淡出
                startBtn.classList.add('fade-out');
                startBtn.classList.add('fade-out');
                context1.style.opacity = '1';
                nextBtn.style.opacity = '1';

                titleImg.addEventListener('transitionend', function handleTransition(event) {
                    if (event.propertyName === 'opacity') {
                        titleImg.style.display = 'none';
                        startBtn.style.display = 'none';
                        titleImg.removeEventListener('transitionend', handleTransition);
                    }
                });

                nextBtn.addEventListener('click', () => {
                    context1.style.opacity = '0';
                    nextBtn.style.opacity = '0';

                    setTimeout(() => {
                        bg1.style.display = 'none';

                        setTimeout(() => {
                            bg1.style.display = 'none';

                        }, 1000);

                        mountainImg.classList.add('move-mountain');

                    }, 1000);

                    setTimeout(() => {
                        fishermanImg.classList.add('move-fishman');
                    }, 1000);

                    setTimeout(() => {
                        bg2.style.display = 'none'
                        mountainImg.style.display = 'none'
                        fishermanImg.style.display = 'none'
                        fishman2.classList.add('move-fishman2')
                        child.style.opacity = '1'
                        context1.style.display = 'none';
                        nextBtn.style.display = 'none';
                        titleImg.style.display = 'none'
                    }, 7500);

                });

                /* meet child */

                child.addEventListener('click', () => {

                    child.style.display = 'none';
                    fishman2.style.display = 'none';
                    dialogImg.style.display = 'block';
                    closeBtn2.style.display = 'inline-block';
                    nextBtn2.style.display = 'block'
                    dialogImg.src = dialogImages[currentDialog];
                });

                if (currentDialog > 0) {
                    prevBtn2.style.display = 'inline-block';
                } else {
                    prevBtn2.style.display = 'none';
                }

                nextBtn2.addEventListener('click', () => {
                    currentDialog++;
                    if (currentDialog < dialogImages.length) {
                        dialogImg.src = dialogImages[currentDialog];
                    } else {
                        dialogImg.style.display = 'none';
                        closeBtn2.style.display = 'none';
                        currentDialog = 0;
                        nextBtn2.style.display = 'none'
                        prevBtn2.style.display = 'none'
                        lady.style.display = 'block'
                        elder.style.display = 'block'
                        fishman0.style.display = 'block'
                    }
                    if (currentDialog > 0) {
                        prevBtn2.style.display = 'block'
                    }
                });

                prevBtn2.addEventListener('click', () => {
                    if (currentDialog > 0) {
                        currentDialog--;
                        dialogImg.src = dialogImages[currentDialog];
                    }
                    if (currentDialog === 0) {
                        prevBtn2.style.display = 'none';
                    }
                });

                closeBtn2.addEventListener('click', () => {
                    dialogImg.style.display = 'none';
                    closeBtn2.style.display = 'none';
                    child.style.display = 'inline-block';
                    fishman2.style.display = 'inline-block';
                    currentDialog = 0;
                    ladydialog.style.display = 'none';
                    nextBtn2.style.display = 'none';
                    prevBtn2.style.display = 'none'
                });

                /* talk with lady and play the game  */

                lady.addEventListener('click', () => {
                    currentLadyDialog = 0; // 从第一张开始
                    ladydialog.src = ladyDialogImages[currentLadyDialog];
                    ladydialog.style.display = 'block';
                    nextBtn3.style.display = 'block';
                    prevBtn3.style.display = 'none';
                    lady.style.display = 'none';
                    fishman0.style.display = 'none';
                    elder.style.display = 'none';
                    closeBtn3.style.display = 'block'
                });

                nextBtn3.addEventListener('click', () => {
                    currentLadyDialog++;

                    if (currentLadyDialog < ladyDialogImages.length - 1) {
                        // 正常切图中
                        ladydialog.src = ladyDialogImages[currentLadyDialog];
                        if (currentLadyDialog > 0) prevBtn3.style.display = 'block';
                    } else if (currentLadyDialog === ladyDialogImages.length - 1) {
                        // 最后一张图，显示它 + Start 按钮
                        ladydialog.src = ladyDialogImages[currentLadyDialog];
                        nextBtn3.style.display = 'none'; // 不再显示 next
                        prevBtn3.style.display = 'block';
                        startGameBtn.style.display = 'block';
                    }
                });


                prevBtn3.addEventListener('click', () => {
                    if (currentLadyDialog > 0) {
                        currentLadyDialog--;
                        nextBtn3.style.display = 'block';
                        ladydialog.src = ladyDialogImages[currentLadyDialog];
                        if (currentLadyDialog === 0) {
                            prevBtn3.style.display = 'none';
                            startGameBtn.style.display = 'none'
                        }
                    }
                });


                closeBtn3.addEventListener('click', () => {
                    ladydialog.style.display = 'none';
                    nextBtn3.style.display = 'none';
                    prevBtn3.style.display = 'none';
                    lady.style.display = 'block';
                    fishman0.style.display = 'block';
                    elder.style.display = 'block';
                    closeBtn3.style.display = 'none'
                    startGameBtn.style.display = 'none'
                    resultDialog.style.display = 'none'
                    restartGameBtn.style.display = 'none'
                    finalScoreText.style.display = 'none'
                    hud.style.display = 'none'
                });

                closeBtn3?.addEventListener('click', () => {
                    if (ladydialog) ladydialog.style.display = 'none';
                    if (nextBtn3) nextBtn3.style.display = 'none';
                    if (prevBtn3) prevBtn3.style.display = 'none';
                    if (lady) lady.style.display = 'block';
                    if (fishman0) fishman0.style.display = 'block';
                    if (elder) elder.style.display = 'block';
                    if (closeBtn3) closeBtn3.style.display = 'none';
                    if (startGameBtn) startGameBtn.style.display = 'none';
                });










                fieldIds.forEach(id => {
                    const field = document.getElementById(id);

                    // 鼠标移入 → 加普通瓶子样式
                    field.addEventListener('mouseenter', () => {
                        field.classList.add('field-hover');
                    });

                    // 鼠标移出 → 移除所有鼠标样式
                    field.addEventListener('mouseleave', () => {
                        field.classList.remove('field-hover');
                        field.classList.remove('field-click');
                    });

                    // 鼠标按下（点击瞬间） → 替换成水瓶光标
                    field.addEventListener('mousedown', () => {
                        field.classList.remove('field-hover');
                        field.classList.add('field-click');
                    });

                    // 鼠标松开 → 恢复成普通瓶子光标
                    field.addEventListener('mouseup', () => {
                        field.classList.remove('field-click');
                        field.classList.add('field-hover');
                    });


                    field.addEventListener('click', (e) => {
                        handleClick(id, e, 'images/veg.png'); // 可换成你想要的 field 图标
                    });

                });

                function popupAtCursor(event, imageSrc) {
                    const container = document.getElementById('screen');
                    const popupIcon = document.getElementById('popupIcon');

                    const containerRect = container.getBoundingClientRect();

                    // 鼠标位置相对于 screen 容器的偏移
                    const x = event.clientX - containerRect.left;
                    const y = event.clientY - containerRect.top;

                    const xPercent = (x / containerRect.width) * 100;
                    const yPercent = (y / containerRect.height) * 100;

                    popupIcon.src = imageSrc;
                    popupIcon.style.left = `${xPercent}% `;
                    popupIcon.style.top = `${yPercent}%`;

                    popupIcon.style.display = 'block';
                    popupIcon.classList.add('show');

                    setTimeout(() => {
                        popupIcon.classList.remove('show');
                        setTimeout(() => {
                            popupIcon.style.display = 'none';
                        }, 400);
                    }, 1000);
                }

                document.getElementById('jewlery').addEventListener('click', (e) => {
                    handleClick('jewlery', e, 'images/yuanbao.png');
                });

                document.getElementById('hotel').addEventListener('click', (e) => {
                    handleClick('hotel', e, 'images/rice.png');
                });

                document.getElementById('fishRod').addEventListener('click', (e) => {
                    handleClick('fishRod', e, 'images/fish.png');
                });


                function startGame() {
                    startScreen.style.display = 'block'
                    if (gameStarted) return;
                    gameStarted = true;

                    score = 0;
                    timeLeft = 10;
                    updateHUD();
                    resultDialog.style.display = 'none';
                    startScreen.style.display = 'none';

                    const timerInterval = setInterval(() => {
                        timeLeft--;
                        updateHUD();

                        if (timeLeft <= 0) {
                            clearInterval(timerInterval);
                            endGame();
                        }
                    }, 1000);
                }

                function endGame() {
                    gameStarted = false;
                    finalScoreText.innerText = `${score} Liang`;
                    resultDialog.style.display = 'block';
                    restartGameBtn.style.display = 'block'
                    finalScoreText.style.display = 'block'
                    closeBtn3.style.display = 'block'
                }



                function updateHUD() {
                    timerDisplay.innerText = `Time: ${timeLeft}`;
                    scoreDisplay.innerText = `Score: ${score} Liang`;
                }


                function handleClick(id, event, imageSrc) {
                    if (!gameStarted || timeLeft <= 0) return;

                    score += scoreMap[id] || 0;
                    updateHUD();
                    popupAtCursor(event, imageSrc);
                }

                restartGameBtn.addEventListener('click', () => {
                    restartGameBtn.style.display = 'none'
                    finalScoreText.style.display = 'none'
                    closeBtn3.style.display = 'none'
                    startGame();
                });

                startGameBtn.addEventListener('click', () => {
                    ladydialog.style.display = 'none';
                    prevBtn3.style.display = 'none';
                    startGameBtn.style.display = 'none';
                    bg3.style.display = 'none';
                    closeBtn3.style.display = 'none'

                    ladyScene.forEach(item => {
                        item.style.display = 'block';
                    });

                    hud.style.display = 'block';
                    startScreen.style.display = 'none'; // ✅ 应该隐藏开始面板

                    startGame();
                });





                // ---- 1) 先取节点引用 ----
                const elder2 = document.getElementById('elder2');
                const houseGallery = document.getElementById('houseGallery');
                const houseBg = document.getElementById('houseBg');
                const elderDialog = document.getElementById('elderDialog');
                const next4 = document.getElementById('next4');
                const prv4 = document.getElementById('prv4');
                const close4 = document.getElementById('close4');
                const startGameBtn1 = document.getElementById('startGameBtn1');


                // ---- 2) 准备预对话图片数组 ----
                const elderDialogImages = [
                    'images/elderDialog0.png',
                    'images/elderDialog1.png'
                ];
                let currentElderDialog = 0;

                // ---- 3) 一次性绑定拖拽 & 放置逻辑 ----
                $(function () {
                    // 拖拽房子
                    $('.houseOption').draggable({
                        revert: 'invalid',
                        zIndex: 100,
                        scroll: false
                    });

                    // elder2 作为放置目标
                    $('#elder2').droppable({
                        accept: '.houseOption',
                        drop(event, ui) {
                            const id = ui.draggable.data('id');
                            const dialogMap = {
                                house1: "Wow, this roof brings back so many childhood memories.",
                                house2: "This house is so cozy—thank you, young friend!"
                            };
                            const bgMap = {
                                house1: 'images/bg-house1.png',
                                house2: 'images/bg-house2.png'
                            };



                            // 切背景
                            houseBg.style.backgroundImage = `url(${bgMap[id]})`;
                            houseBg.style.display = 'block';

                            $('#elderDialogText').text(dialogMap[id]);
                            $('#elderDialogBox').fadeIn();

                            // 房子回原位
                            ui.draggable.animate({ top: 0, left: 0 }, 400);
                        }
                    });

                });

                // ---- 4) 点击原 elder 启动预对话 ----
                elder.addEventListener('click', () => {
                    // 隐藏原场景
                    elder.style.display = 'none';
                    lady.style.display = 'none';
                    fishman0.style.display = 'none';

                    // 显示预对话轮播
                    currentElderDialog = 0;
                    elderDialog.src = elderDialogImages[0];
                    elderDialog.style.display = 'block';
                    next4.style.display = 'block';
                    prv4.style.display = 'none';
                });

                // ---- 5) 预对话“下一步” ----
                next4.addEventListener('click', () => {
                    currentElderDialog++;
                    if (currentElderDialog < elderDialogImages.length) {
                        elderDialog.src = elderDialogImages[currentElderDialog];
                        prv4.style.display = 'block';
                    }
                    if (currentElderDialog === elderDialogImages.length - 1) {
                        next4.style.display = 'none';
                        startGameBtn1.style.display = 'block';
                        prv4.style.display = 'block';
                    }
                });

                // ---- 6) 预对话“上一步” ----
                prv4.addEventListener('click', () => {
                    if (currentElderDialog > 0) {
                        currentElderDialog--;
                        elderDialog.src = elderDialogImages[currentElderDialog];
                        next4.style.display = 'block';
                        if (currentElderDialog === 0) prv4.style.display = 'none';
                        startGameBtn1.style.display = 'none'
                    }
                });

                close4.addEventListener('click', () => {
                    ladydialog.style.display = 'none';
                    next4.style.display = 'none';
                    prv4.style.display = 'none';
                    close4.style.display = 'none'
                    lady.style.display = 'block';
                    fishman0.style.display = 'block';
                    elder.style.display = 'block';
                    startGameBtn1.style.display = 'none'
                    elder2.style.display = 'none';
                    houseGallery.style.display = 'none';
                    houseBg.style.display = 'none';
                    document.getElementById('elderDialogBox').style.display = 'none';
                    document.getElementById('elderDialog').style.display = 'none';


                });

                // ---- 7) 预对话“关闭/开始游戏” ----
                startGameBtn1.addEventListener('click', () => {
                    // 隐藏预对话元素
                    elderDialog.style.display = 'none';
                    next4.style.display = 'none';
                    prv4.style.display = 'none';
                    close4.style.display = 'block';
                    startGameBtn1.style.display = 'none'

                    // 启动拖房子游戏
                    elder2.style.display = 'block';
                    houseGallery.style.display = 'flex';
                    houseBg.style.display = 'block';

                });



















            })
        }


    });
})();
