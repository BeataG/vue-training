import axios from 'axios';


const store = {
  state: {
    todoList : []
  },

  async fetchProducts() {
    this.state.todoList = await axios.get('https://ghibliapi.herokuapp.com/films').then(res => res.data);
  },
  addProduct(product) {
    this.state.todoList.push(product);
  }
};

export default store;