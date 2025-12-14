document.addEventListener('DOMContentLoaded', () => {
    const showAnimationBtn = document.getElementById('showAnimationBtn');
    const modal = document.getElementById('animationModal');
    const closeBtn = document.getElementById('closeBtn');
    const animationStage = document.getElementById('animationStage');
    const soup = document.getElementById('soup');
    const hops = document.getElementById('hops');
    const hopsRunning = document.getElementById('hopsRunning');

    let animationTimeout;

    showAnimationBtn.addEventListener('click', () => {
        modal.classList.add('active');
        startAnimation();
    });

    closeBtn.addEventListener('click', () => {
        stopAnimation();
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            stopAnimation();
            modal.classList.remove('active');
        }
    });

    function startAnimation() {
        // Reset everything
        resetAnimation();
        
        // Scene 1: Show Soup and Hops in initial positions
        setTimeout(() => {
            animationStage.className = 'animation-stage scene1';
            soup.style.opacity = '1';
            hops.style.opacity = '1';
        }, 100);

        // Scene 2: Hops runs towards Soup with zoom
        setTimeout(() => {
            animationStage.className = 'animation-stage scene2';
            hops.style.display = 'none';
            hopsRunning.style.display = 'block';
        }, 2000);

        // Scene 3: Hops reaches Soup, both are close
        setTimeout(() => {
            animationStage.className = 'animation-stage scene3';
            hopsRunning.style.display = 'none';
            hops.style.display = 'block';
            hops.style.right = 'auto';
            hops.style.left = '280px';
        }, 6000);

        // Scene 4: Transform - Soup gets flowers, Hops gives away bucket
        setTimeout(() => {
            animationStage.className = 'animation-stage scene4';
            
            // Fade out original images
            soup.style.opacity = '0';
            hops.style.opacity = '0';
            
            // After fade out, change images and fade in
            setTimeout(() => {
                soup.src = 'soup_with_flowers.png';
                hops.src = 'hops_without_flowers.png';
                
                soup.classList.add('with-flowers');
                hops.classList.add('without-bucket');
                
                soup.style.opacity = '1';
                hops.style.opacity = '1';
            }, 500);
        }, 8000);
    }

    function resetAnimation() {
        // Clear any existing timeouts
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
        
        // Reset stage
        animationStage.className = 'animation-stage';
        animationStage.style.transform = 'scale(1)';
        
        // Reset Soup
        soup.src = 'soup_without_flowers.png';
        soup.style.opacity = '0';
        soup.style.left = '50px';
        soup.style.right = 'auto';
        soup.classList.remove('with-flowers');
        
        // Reset Hops
        hops.src = 'hops_giving_bucket.png';
        hops.style.opacity = '0';
        hops.style.right = '50px';
        hops.style.left = 'auto';
        hops.style.display = 'block';
        hops.classList.remove('without-bucket');
        
        // Reset Running Hops
        hopsRunning.style.opacity = '0';
        hopsRunning.style.display = 'none';
        hopsRunning.style.right = '50px';
        hopsRunning.style.left = 'auto';
    }

    function stopAnimation() {
        resetAnimation();
    }
});
