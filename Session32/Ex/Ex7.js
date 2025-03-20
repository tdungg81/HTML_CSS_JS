document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlargedImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            enlargedImage.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});