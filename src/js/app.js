import Contact from './components/Contact.js';
import Products from './components/Products.js';
import utils from './utils.js';
import {select, classNames, settings} from './settings.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

  generateProducts: function(){
    const thisApp = this;

    const productsHeaderHTML = '<h2 class="page__title">products</h2>';
    const productsHeaderDOM = utils.createDOMFromHTML(productsHeaderHTML);
    const productsWrapper = document.querySelector(select.containerOf.products);
    productsWrapper.appendChild(productsHeaderDOM);

    for (let productData in thisApp.data.products){
      new Products(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        //console.log('parsedResponse', parsedResponse);
        thisApp.data.products = parsedResponse;

        thisApp.generateProducts();
      });
  },

  initContact: function(){
    const thisApp = this;

    const contactElem = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactElem);
  },

  init: function() {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initContact();
    thisApp.initData();
  },
};

app.init();