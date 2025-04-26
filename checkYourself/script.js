(function(){
    "use strict"
    console.log('reading js');

    async function getData(){
        const buttons=document.querySelectorAll('#table button');
        const coffeeDiv=document.querySelector('#coffee');
        //input data.json
        const theData = await fetch('data.json');
        const dataArray = await theData.json();
        const cupsData = {};
        dataArray.forEach(entry=>{
            cupsData[entry.day]=entry.cups;
        })

        buttons.forEach(button=>{
            button.addEventListener('mouseenter',()=>{
                const day = button.getAttribute('data-day');
                const cups= cupsData[day] || 0;

                coffeeDiv.innerHTML=''; //clear the cups

                for (let i=0; i<cups; i++){
                    const img = document.createElement('img');
                    img.setAttribute('src', 'images/cup.png');
                    coffeeDiv.appendChild(img);
                }
            });

            button.addEventListener('mouseleave',()=>{
                const cupImages = coffeeDiv.querySelectorAll('img'); // 👈 正确选取所有img
                cupImages.forEach(cup => {
                    cup.style.animation = 'popOut 0.5s ease forwards';
                    cup.addEventListener('animationend', () => {
                        cup.remove();
                    })
                })
            })
        })
    }
    getData();
})();