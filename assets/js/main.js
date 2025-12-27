document.addEventListener('DOMContentLoaded', () => {
    // The button will now have a specific ID or class structure for easier selection
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the menu visibility
            mobileMenu.classList.toggle('hidden');

            // Toggle the animation classes on the button (rotate lines)
            mobileMenuButton.classList.toggle('active');

            // Toggle body scroll lock
            if (mobileMenu.classList.contains('hidden')) {
                document.body.style.overflow = '';
            } else {
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Close menu when clicking on a link inside the menu
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
