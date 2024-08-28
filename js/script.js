document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.food-item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const details = this.querySelector('.item-details');
            if (details.style.display === 'table-row') {
                details.style.display = 'none';
            } else {
                details.style.display = 'table-row';
            }
        });
    });
});
