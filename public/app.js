const app = new Vue({
  el: '#app',
  data: {
    title: 'TodoApp',
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
  },
});
