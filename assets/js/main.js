document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('button.text-white.p-2 span.material-symbols-outlined').parentElement;
    const nav = document.querySelector('nav');

    // Create Mobile Menu Container if it doesn't exist (it will be added in HTML but this is a safeguard/reference)
    let mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});
