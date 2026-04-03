import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'
import { TodoFooter } from './components/TodoFooter'
import './App.css'

export default function App() {
  const {
    todos,
    filter,
    setFilter,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  } = useTodos()

  return (
    <div className="app">
      <div className="card">
        <h1>Todo</h1>
        <TodoInput onAdd={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}
