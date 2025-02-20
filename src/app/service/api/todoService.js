export async function fetchTodos() {
  const urlData = await fetch('http://localhost:8080/todos');
  const todos = await urlData.json();
  return todos;
}
