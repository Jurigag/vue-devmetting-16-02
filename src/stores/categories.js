import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
  //3/ It holds a state itself
  state: {
    items: []
  },
  //6/ And methods to update
  async fetch() {
    this.state.items = await axios.get('http://jservice.io/api/clues').then(res => res.data);
  },
  add(product) {
    this.state.items.push(product);
  },
  remove(key) {
    this.state.items.splice(key, 1)
  },
  sort(key, type) {
    this.state.items = _.orderBy(this.state.items, key, type);
  }
};

export default store;
