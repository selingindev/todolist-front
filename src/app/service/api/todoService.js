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
  
  const urlData = await fetch('http://localhost:8080/todos',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if(urlData.ok){
    const updatedTodos = await urlData.json();
    return updatedTodos;
  } else {
    console.error('Erro ao deletar:', response.status);
    return [];
  }
}

export async function editTodo(id, data) {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: json.stringify({ id, data })
  })
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {

    const updatedTodos = await response.json();
    return updatedTodos;
  } else {
    console.error('Erro ao deletar:', response.status);
    return [];
  }
}
