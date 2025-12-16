document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    const star = document.getElementById('tree-star');
    const lightColors = [
        'var(--light-color-1)',
        'var(--light-color-2)',
        'var(--light-color-3)',
        'var(--light-color-4)'
    ];

    // Função para fazer uma luz piscar e mudar de cor
    function animateLight(lightElement) {
        let currentColorIndex = 0;
        setInterval(() => {
            // Alterna a cor
            currentColorIndex = (currentColorIndex + 1) % lightColors.length;
            const newColor = lightColors[currentColorIndex];
            lightElement.style.backgroundColor = newColor;
            lightElement.style.boxShadow = `0 0 8px ${newColor}, 0 0 15px ${newColor}`;
        }, Math.random() * 2000 + 1000); // Pisca entre 1 e 3 segundos
    }

    // Aplica a animação para cada luz
    lights.forEach(light => {
        animateLight(light);
    });

    // Adiciona uma animação de brilho à estrela
    star.classList.add('blinking-star');
});