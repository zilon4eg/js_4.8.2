const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function(rotator) {
    let rotatorItems = rotator.querySelectorAll('.rotator__case');
    let position = 0;
    let lastPosition = rotatorItems.length;

    setInterval(() => {
        for (i=0; i<lastPosition; i++) {
            if (i === position) {
                rotatorItems[i].classList.add('rotator__case_active');
            }
            else {
                rotatorItems[i].classList.remove('rotator__case_active');
            }
        }
    
        position += 1;
        if (position > lastPosition - 1) {
            position = 0;
        }
    
    }, 1000);
});