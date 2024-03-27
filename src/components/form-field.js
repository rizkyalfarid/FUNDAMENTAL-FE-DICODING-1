class FormField extends HTMLElement {
  connectedCallback() {
    const placeholder = this.getAttribute('placeholder') || '';
    this.render(placeholder);

    const inputElement = this.querySelector('input');
    inputElement.addEventListener('input', () => {
      this.validateInput(inputElement);
    });
  }

  validateInput(inputElement) {
    const inputValue = inputElement.value.trim(); 
    if (inputValue === '') {
      inputElement.classList.add('invalid'); 
    } else {
      inputElement.classList.remove('invalid'); 
    }
  }
  
  render(placeholder) {
    this.innerHTML = `
      <form action="" class="form-field">
        <div class="form-group">
          <input type="text" placeholder="${placeholder}" id="textInput">
          <textarea name="" id="textareaInput" cols="30" rows="10" placeholder="Masukkan Body notes disini yaa:)"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    `;
  }

}

customElements.define('form-field', FormField);
