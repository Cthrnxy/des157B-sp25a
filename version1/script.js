// script.js
(function () {
    "use strict";
    console.log("reading js");

    document.addEventListener('DOMContentLoaded', () => {
        const startBtn = document.getElementById('start');
        const titleImg = document.getElementById('title');
        const context1 = document.getElementById('context1');
        const nextBtn = document.getElementById('next');
        const bg1 = document.getElementById('bg1');
        const bg2 = document.getElementById('bg2');
        const bg3 = document.getElementById('bg3');
        const bg4 = document.getElementById('bg4');
        const mountainImg = document.getElementById('mountain');
        const fishermanImg = document.getElementById('fishmanIntro');
        const fishman2 = document.getElementById('fishman2');
        const child = document.getElementById('child');
        const closeBtn = document.getElementById('close');
        const nextBtn2 = document.getElementById('next2')
        const nextBtn3 = document.getElementById('next3')
        const prevBtn = document.getElementById('prv');
        const dialogImg = document.getElementById('dialogImg');
        const elder = document.getElementById('elder');
        const lady = document.getElementById('lady');
        const fishman0 = document.getElementById('fishman0');
        const ladydialog = document.getElementById('ladyDialog');
        const ladyScene= document.querySelectorAll('.ladyScene');
        const fieldIds = ['field1', 'field2', 'field3', 'field4'];
        const popupEffect = document.getElementById('popupEffect');
        

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
                        titleImg.style.display='none'
                    }, 7500);

                });

                child.addEventListener('click', () => {

                    child.style.display = 'none';
                    fishman2.style.display = 'none';
                    dialogImg.style.display = 'block';
                    closeBtn.style.display = 'inline-block';
                    nextBtn2.style.display = 'block'
                    dialogImg.src = dialogImages[currentDialog];
                });

                if (currentDialog > 0) {
                    prevBtn.style.display = 'inline-block';
                } else {
                    prevBtn.style.display = 'none';
                }

                nextBtn2.addEventListener('click', () => {
                    currentDialog++;
                    if (currentDialog < dialogImages.length) {
                        dialogImg.src = dialogImages[currentDialog];
                    } else {
                        dialogImg.style.display = 'none';
                        closeBtn.style.display = 'none';
                        currentDialog = 0;
                        nextBtn2.style.display = 'none'
                        prevBtn.style.display = 'none'
                        lady.style.display = 'block'
                        elder.style.display = 'block'
                        fishman0.style.display = 'block'


                        //加入老人和女人
                    }
                    if (currentDialog > 0) {
                        prevBtn.style.display = 'block'
                    }
                });

                prevBtn.addEventListener('click', () => {
                    if (currentDialog > 0) {
                        currentDialog--;
                        dialogImg.src = dialogImages[currentDialog];
                    }
                    if (currentDialog === 0) {
                        prevBtn.style.display = 'none';
                    }
                });

                closeBtn.addEventListener('click', () => {
                    dialogImg.style.display = 'none';
                    closeBtn.style.display = 'none';
                    child.style.display = 'inline-block';
                    fishman2.style.display = 'inline-block';
                    currentDialog = 0;
                    ladydialog.style.display = 'none';
                    nextBtn2.style.display = 'none';
                    prevBtn.style.display = 'none'
                });


                lady.addEventListener('click', () => {

                    lady.style.display = 'none';
                    fishman0.style.display = 'none';
                    elder.style.display = 'none'
                    ladydialog.style.display = 'block';
                    nextBtn3.style.display = 'block';
                });


                nextBtn3.addEventListener('click', () => {
                    ladydialog.style.display = 'none';
                    nextBtn3.style.display = 'none';
                    bg3.style.display = 'none'
                    ladyScene.forEach(item => {
                        item.style.display = 'block';
                    });

                })


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
                  });

                  const popupMap = {
                    jewlery: 'images/yuanbao.png',
                    hotel: 'images/rice.png',
                    fishRod: 'images/fish.png'
                  };
                  
                  ['jewlery', 'hotel', 'fishRod'].forEach(id => {
                    const element = document.getElementById(id);
                  
                    element.addEventListener('click', (e) => {
                      const effectImg = popupMap[id];
                      popupEffect.src = effectImg;
                  
                      // 获取元素位置
                      const rect = element.getBoundingClientRect();
                  
                      // 设置弹出图位置（元素上方居中）
                      popupEffect.style.left = rect.left + rect.width / 2 - 30 + 'px';
                      popupEffect.style.top = rect.top - 40 + window.scrollY + 'px';
                      popupEffect.style.display = 'block';
                      popupEffect.style.opacity = '1';
                  
                      // 自动隐藏
                      setTimeout(() => {
                        popupEffect.style.opacity = '0';
                        setTimeout(() => {
                          popupEffect.style.display = 'none';
                        }, 300);
                      }, 600);
                    });
                  });


            })
        }


    });
})();
