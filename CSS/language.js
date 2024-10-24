
const translations = {
    'vi': {
        'home': 'Trang Chủ',
        'about': 'Về Chúng Tôi',
        'activities': 'Hoạt Động',
        'research': 'Nghiên Cứu',
        'search': 'Tìm kiếm...',
        'login': 'Đăng nhập',
        'register': 'Đăng ký',
        'heading1': 'Hội Fan Jack',
        'paragraph1': 'Chúng tôi cam kết bảo vệ quyền lợi và sự an toàn của trẻ em...',
        'support-heading': 'Hoạt Động Hỗ Trợ Các Em Nhỏ',
        'support-details': 'Mỗi bữa, các bé sẽ được ăn thịt, đậu, canh, rau với giá 8,500đ/suất...',
        'donate-button': 'Ủng Hộ',
        'news-heading': 'Tin Tức',
        'footer': '© 2024 Hội Người Fan Jack. All rights reserved.',
    },
    'en': {
        'home': 'Home',
        'about': 'About Us',
        'activities': 'Activities',
        'research': 'Research',
        'search': 'Search...',
        'login': 'Login',
        'register': 'Register',
        'heading1': 'Jack Fan Club',
        'paragraph1': 'We are committed to protecting children\'s rights and safety...',
        'support-heading': 'Activities Supporting Children',
        'support-details': 'Each meal consists of meat, beans, soup, and vegetables at 8,500 VND per meal...',
        'donate-button': 'Donate',
        'news-heading': 'News',
        'footer': '© 2024 Jack Fan Club. All rights reserved.',
    }
};

function changeLanguage(language) {
    document.querySelector('.content h1').innerText = translations[language]['heading1'];
    document.querySelector('.content p').innerText = translations[language]['paragraph1'];
    document.querySelector('.btn.primary').innerText = translations[language]['login'];
    document.querySelector('.btn.secondary').innerText = translations[language]['register'];
    document.querySelector('.split-section h2').innerText = translations[language]['support-heading'];
    document.querySelector('.split-section p').innerHTML = translations[language]['support-details'];
    document.querySelector('.menu-btn').innerText = translations[language]['donate-button'];
    document.querySelector('.tieude h2').innerText = translations[language]['news-heading'];
    document.querySelector('.footer-logo p').innerText = translations[language]['footer'];

    // Cập nhật menu
    const menuItems = document.querySelectorAll('#nav-menu li a');
    menuItems[0].innerText = translations[language]['home'];
    menuItems[1].innerText = translations[language]['about'];
    menuItems[2].innerText = translations[language]['activities'];
    menuItems[3].innerText = translations[language]['research'];

    // Cập nhật placeholder tìm kiếm
    document.querySelector('.search-box input').placeholder = translations[language]['search'];
}