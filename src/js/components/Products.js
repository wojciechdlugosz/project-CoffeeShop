import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor(id, data){
    const thisProducts = this;

    thisProducts.id = id;
    thisProducts.data = data;

    thisProducts.render();
  }

  render(){
    const thisProducts = this;

    thisProducts.dom = {};
    thisProducts.dom.wrapper = document.querySelectorAll(select.containerOf.products);

    const generatedHTML = templates.products(thisProducts.data);
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    
    for(let productsWrapper of thisProducts.dom.wrapper){
      const clonedDomElement = thisProducts.element.cloneNode(true);
      productsWrapper.appendChild(clonedDomElement);
    }
  }
}

export default Products;