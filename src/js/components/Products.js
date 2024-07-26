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
    thisProducts.dom.wrapper = document.querySelector(select.containerOf.products);

    const generatedHTML = templates.products(thisProducts.data);
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    thisProducts.dom.wrapper.appendChild(thisProducts.element);
    console.log(thisProducts.dom.wrapper);
  }
}

export default Products;