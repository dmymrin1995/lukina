let comissionLink = document.querySelector('.comission-link');

comissionLink.addEventListener('click', function(){
    
        const intervalId  = setInterval(()=>{
            const content = document.querySelector('.window');

            
            const currentLeftMargin = parseFloat(getComputedStyle(content).marginLeft);
            const currentOpacity = parseFloat(getComputedStyle(content).opacity);

            content.style.marginLeft = (currentLeftMargin - 10) + 'px';
            console.log(content.style.marginLeft, content.style.marginRight)
            content.style.opacity = currentOpacity + .01

            if (parseFloat(getComputedStyle(content).marginLeft) <= -145.4) {
                clearInterval(intervalId); // Остановка интервала
            };
             
            
        }, 1);

})