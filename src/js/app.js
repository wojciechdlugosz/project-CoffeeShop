import Contact from './components/Contact.js';
import Home from './components/Products.js';
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
        console.log(clickedElement);

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

  initProducts: function(){
    const thisApp = this;

    const productsElem = document.querySelector(select.containerOf.products);
    thisApp.home = new Home(productsElem);
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
        console.log('parsedResponse', parsedResponse);
        thisApp.data.products = parsedResponse;
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
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
    thisApp.initProducts();
    thisApp.initData();
  },
};

app.init();