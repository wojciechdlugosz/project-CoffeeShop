export const select = {
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
  },
  templateOf: {
    home: '#template-home',
    contact: '#template-contact',
  },
  nav: {
    links: '.header__nav a'
  }
}; 

export const classNames = {
  pages: {
    active: 'active'
  },
  nav: {
    active: 'active'
  }
};

export const templates = {
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML)
};