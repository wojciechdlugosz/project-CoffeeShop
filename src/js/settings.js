export const select = {
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
  },
  templateOf: {
    home: '#template-home',
    products: '#template-products',
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

export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML)
};