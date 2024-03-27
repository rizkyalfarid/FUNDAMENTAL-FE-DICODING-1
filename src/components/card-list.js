import notesData  from "../data/data.js";

class CardList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = notesData.map(item => `
      <div class="note">
        <h2 class="note-title">${item.title}</h2>
        <p class="note-body">${item.body}</p>
        <p class="note-date">${item.createdAt}</p>
      </div>
    `).join('');
  }
}

customElements.define('card-list', CardList);
