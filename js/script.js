document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('play-pause');
    const progressBar = document.querySelector('.progress');
    const cards = document.querySelectorAll('.card');
    
    let isPlaying = false;

    // Alternar Play/Pause
    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playPauseBtn.textContent = '⏸';
            console.log('PetiFy: Reproduzindo música...');
        } else {
            playPauseBtn.textContent = '▶';
            console.log('PetiFy: Música pausada.');
        }
    });

    // Simulação de seleção de música nos cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const trackName = card.querySelector('h4').textContent;
            const trackArtist = card.querySelector('p').textContent;
            
            document.querySelector('.track-name').textContent = trackName;
            document.querySelector('.track-artist').textContent = trackArtist;
            
            // Ao clicar, começa a tocar automaticamente (simulação)
            isPlaying = true;
            playPauseBtn.textContent = '⏸';
            
            console.log(`PetiFy: Agora tocando ${trackName}`);
        });
    });

    // Simulação de progresso (apenas visual para o exemplo estático)
    let progress = 30;
    setInterval(() => {
        if (isPlaying) {
            progress = (progress + 0.5) % 100;
            progressBar.style.width = `${progress}%`;
        }
    }, 1000);

    console.log('PetiFy: Sistema carregado com sucesso!');
});
