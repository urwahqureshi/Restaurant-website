document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: '$12' },
        { name: 'Margherita Pizza', description: 'Traditional pizza with tomato, mozzarella, and fresh basil.', price: '$10' },
        { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.', price: '$8' },
    ];

    const menuContainer = document.querySelector('.menu-items');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;
        menuContainer.appendChild(menuItem);
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        this.reset();
    });
});