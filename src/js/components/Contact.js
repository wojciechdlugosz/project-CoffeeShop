import { select } from '../settings.js';
import utils from '../utils.js';

class Contact{
  constructor(element){
    const thisContact = this;

    thisContact.render(element);
  }

  render(element){
    const thisContact = this;

    thisContact.dom = {};
    thisContact.dom.wrapper = element;

    const generatedHTML = document.querySelector(select.templateOf.contact).innerHTML;
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    thisContact.dom.wrapper.appendChild(generatedDOM);
  }
}

export default Contact;