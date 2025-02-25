

export async function fetchTodos() {
  const urlData = await fetch('http://localhost:8080/todos');
  try {
    if (urlData.ok) {
      const todos = await urlData.json();
      return todos;
    } else {
      console.error('Erro na requisição:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    return [];
  }
 
}

export async function postTodo(data) {
  const urlData = await fetch('http://localhost:8080/todos');
 fetch(urlData, {
  method: "POST",
  headers: {
    'Content-Type': 'application.json'
  },
  body: json.stringify({data})
})
}

export async function editTodo(id, data) {
  await fetch(`http://localhost:8080/todos/${id}`, {
   method: "PUT",
   headers: {
     'Content-Type': 'application.json'
   },
   body: json.stringify({id, data})
 })
 }

export async function deleteTodo(id) {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});
  
}