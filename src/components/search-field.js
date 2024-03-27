class SearchField extends HTMLElement {
  connectedCallback() {
    const placeholder = this.getAttribute('placeholder') || '';
    const titleNotes = this.getAttribute('title') || '';
    this.render(placeholder, titleNotes);
  }

  render(placeholder, titleNotes) {
    this.innerHTML = `
        <header>
        <form action="" class="form-search">
          <div class="title">
            ${titleNotes}
          </div>
          <div class="form-group">
            <input type="search" placeholder="${placeholder}" class="search">
            <button type="submit" class="submit">Search</button>
          </div>
        </form>
      </header>
    `;
  }
}

customElements.define('search-field', SearchField);