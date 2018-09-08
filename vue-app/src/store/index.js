import axios from 'axios';


const store = {
  state: {
    todoList : []
  },

  async fetchProducts() {
    this.state.todoList = await axios.get('https://ghibliapi.herokuapp.com/films').then(res => res.data);
  },
  addItem(item) {
    this.state.todoList.push(item);
  },
  removeItem(item) {
    this.state.todoList.splice(item, 1);
  }
};

export default store;