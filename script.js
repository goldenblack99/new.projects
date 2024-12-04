function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const message = document.getElementById('message');
    const clickMeText = document.getElementById('click-me');
    const dateText = document.getElementById('date');
  

    clickMeText.classList.add('hidden');
  

    createConfetti();
  

    giftBox.style.animation = 'shrink 0.5s forwards';
    setTimeout(() => {
        giftBox.style.display = 'none';
        

        dateText.classList.remove('hidden');
        message.classList.remove('hidden');
    }, 1000);
}
  
function createConfetti() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * -10}vh`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(confetti);
  
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
  

const style = document.createElement('style');
style.textContent = `
@keyframes shrink {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}

.confetti {
    position: fixed;
    opacity: 0.9;
    z-index: 10;
    border-radius: 50%;
    animation: fall 2s linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}`;
document.head.appendChild(style);

//Ambooo den nam hathi :( 