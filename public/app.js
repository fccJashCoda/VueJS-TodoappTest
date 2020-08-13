const app = new Vue({
  el: '#app',
  data: {
    title: 'TodoApp',
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    },
    deleteTodo(todo) {
      const target = this.todos.indexOf(todo);
      this.todos.splice(target, 1);
    },
  },
});
