import { templates } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor(element){
    const thisProducts = this;

    thisProducts.render(element);
  }

  render(element){
    const thisProducts = this;

    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;

    const generatedHTML = templates.products();
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    thisProducts.dom.wrapper.appendChild(generatedDOM);
  }
}

export default Products;