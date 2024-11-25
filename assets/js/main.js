document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('modelSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const modelCards = document.querySelectorAll('.model-card');

        modelCards.forEach(card => {
            const modelName = card.querySelector('h3').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            const isVisible = modelName.includes(searchTerm) || 
                            tags.some(tag => tag.includes(searchTerm));
            
            card.style.display = isVisible ? 'block' : 'none';
        });
    });
}); 