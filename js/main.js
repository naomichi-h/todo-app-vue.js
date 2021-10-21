const STORAGE_KEY = 'todos_storage'

const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    checkbox: false,
    todos: []
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted () {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    }
  },
  methods: {
    addItem () {
      if (this.newItem === '') return

      const todo = {
        item: this.newItem,
        isDone: this.checkbox,
        editflg: false
      }

      this.todos.push(todo)
      this.newItem = ''
      this.saveItem()
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
      this.saveItem()
    },
    editItemOn (index) {
      this.todos[index].editflg = true
    },
    editItemOff (index) {
      this.todos[index].editflg = false
      this.saveItem()
    },
    saveItem () {
      const stringTodos = JSON.stringify(this.todos)
      localStorage.setItem(STORAGE_KEY, stringTodos)
    }
  }
})
