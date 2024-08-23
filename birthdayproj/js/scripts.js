document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('stars', {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#ffffff", "#FFD700", "#FF69B4", "#1E90FF"] },
            "shape": { "type": "star" },
            "opacity": { "value": 0.8, "random": true },
            "size": { "value": 10, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 5, "direction": "bottom", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } }, "resize": true },
        "retina_detect": true
    });

    // Initialize confetti
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

        // Create a function to start background music
        function playBackgroundMusic() {
            const backgroundMusic = document.getElementById('background-music');
            backgroundMusic.play().catch(error => {
                console.error('Error playing background music:', error);
            });
        }
    
        // Add event listener to play background music when the page is interacted with
        document.body.addEventListener('click', playBackgroundMusic);

    // Transition to quiz after 5 seconds
    setTimeout(() => transitionToQuiz(), 10000);

    function transitionToQuiz() {
        document.getElementById('birthday-screen').style.display = 'none';
        showQuiz();
    }

    function showQuiz() {
        const quiz = document.getElementById('quiz');
        quiz.style.display = 'block';

        const noBtn = document.getElementById('no-btn');
        noBtn.addEventListener('mouseover', () => moveButton(noBtn));

        document.getElementById('yes-btn').addEventListener('click', () => showPresent());
    }

    function moveButton(button) {
        button.style.position = 'absolute';
        button.style.top = `${Math.random() * 80}%`;
        button.style.left = `${Math.random() * 80}%`;
    }

    function showPresent() {
        document.getElementById('quiz').style.display = 'none';
        document.body.style.backgroundColor = "#008080";

        const present = document.getElementById('present');
        present.style.display = 'block';

        const invisibleBtn = document.getElementById('invisible-btn');
        invisibleBtn.addEventListener('click', () => revealFlowers());
    }

    function revealFlowers() {
        document.getElementById('present').style.display = 'none';
        const flowersSection = document.getElementById('flowers-section');
        flowersSection.style.display = 'block';

        const flowersInvisibleBtn = document.getElementById('flowers-invisible-btn');
        flowersInvisibleBtn.addEventListener('click', () => showCard());
    }

    function showCard() {
        // Hide the flowers section with a smooth transition
        const flowersSection = document.getElementById('flowers-section');
        flowersSection.style.opacity = '0';
        flowersSection.style.transition = 'opacity 1s ease-in-out';

        // Set the card message
        const cardMessage = document.getElementById('card-message');
        cardMessage.innerHTML = `
            Cassiopeia, your eyes hold the warmth of sunlight,<br>
            a quiet strength that speaks without words.<br>
            Cassiopeia, your face is a canvas of grace and allure,<br>
            carrying a story of fantasies and dreams.<br>
            Cassiopeia, in your gaze I find a spark of determination,<br>
            a soft light that guides you through every challenge.<br>
            Cassiopeia, you move with a poise that's both gentle and fierce,<br>
            a reminder of the beauty found within your strength.<br>
            Cassiopeia, you are my moon and stars,<br>
            the light that brightens my world.<br>
            I hope you have an amazing day.<br>
            Happy Birthday, Dearest.
        `;

        // After the transition, hide the flowers section and show the card
        setTimeout(() => {
            flowersSection.style.display = 'none';
            const card = document.getElementById('card');
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale to full size
        }, 1000); // Wait for the opacity transition to finish (1 second)

        document.getElementById('next-btn').addEventListener('click', () => showEnvelope());
    }

    function showEnvelope() {
        // Hide the card
        document.getElementById('card').style.display = 'none';

        // Display the envelope section
        const envelopeSection = document.getElementById('envelope-section');
        envelopeSection.style.display = 'block';

        // Handle envelope animations
        const heart = document.querySelector('.heart');
        const envelope = document.querySelector('.envelope-wrapper');

        heart.addEventListener('click', () => {
            envelope.classList.toggle('flap'); // Toggle the flap animation
            document.querySelector('.letter').classList.toggle('slide-out'); // Toggle the letter sliding out

            // Show the "Move On" button after the envelope animation completes
            setTimeout(() => {
                document.getElementById('move-on-btn').style.display = 'block';
            }, 2000); // Delay to match the envelope animation duration
        });

        document.getElementById('move-on-btn').addEventListener('click', () => fadeOutEnvelope());
    }

    function fadeOutEnvelope() {
        const envelopeSection = document.getElementById('envelope-section');
        envelopeSection.classList.add('fade-out');

        // Also fade out the "Move On" button
        const moveOnBtn = document.getElementById('move-on-btn');
        moveOnBtn.classList.add('fade-out');

        setTimeout(() => {
            envelopeSection.style.display = 'none';
            showSecondCard();
        }, 1000); // Wait for the fade-out transition to complete (1 second)
    }

    function showSecondCard() {
        const card2 = document.getElementById('card2');
        card2.style.display = 'block';
        setTimeout(() => {
            card2.style.opacity = '1'; // Fade in the second card
        }, 10); // Small delay to trigger the opacity transition

        const cardMessage2 = document.getElementById('card-message2');
        cardMessage2.innerHTML = `
            Gbubemi, I'm not sure if you can understand how much of an<br>
            impact you made in my life. I was never unsure, I always knew<br>
            I always knew that I would fall for you. Perhaps that was my flaw<br>
            I fell victim to you. But you seamlessly fell victim to me as well.<br>
            We caught each other, and have held on ever since<br>
            So I suppose you do understand, how much love I have for you.<br>
            Never forget how much you mean to me, never let your mind wander so far,<br>
            that you forget that you have my chest to fall upon in your times of need.<br>
            Everyone is a burden, but there are some burdens worth carrying, some that will only stengthen you,<br>
            I hope we will continue to help each other grow, and watch each other achieve our dreams.<br>
            Our seemingly idealistic dreams. I hope I have been able to make your day a little better.<br>
            Even though I cannot be there in person, I know you will bring me with you wherever you go.<br>
            Te amo, mi niña hermosa.
        `;
        const oneBtn = document.getElementById('one-btn');
        oneBtn.addEventListener('click', () => fadeOutCard2());
    }

    function fadeOutCard2() {
        const card2 = document.getElementById('card2');
        card2.classList.add('fade-out');

        setTimeout(() => {
            card2.style.display = 'none';
            showVideo();
        }, 1000); // Wait for the fade-out transition to complete (1 second)
    }

    function showVideo() {
        const videoSection = document.getElementById('video-section');
        videoSection.style.display = 'block'; // Show the video section
        videoSection.style.opacity = '0'; // Start with opacity 0 for fade-in effect
    
        // Access the video element
        const video = document.getElementById('birthday-video');
        
        // Ensure the video is set to autoplay
        video.autoplay = true;
    
        // Start video playback
        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
    
        // Access the background music element
        const backgroundMusic = document.getElementById('background-music');
        
        // Stop background music
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Optionally reset to the start
    
        // Fade in the video section
        setTimeout(() => {
            videoSection.style.opacity = '1'; // Fade in effect
        }, 10); // Small delay to trigger the opacity transition    
    }
});