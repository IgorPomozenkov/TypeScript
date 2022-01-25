
interface TodosResponse {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export async function getTodosByCount(count: number) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    const data:TodosResponse = await res.json()
    console.log(data)
    console.log(data.id)

  } catch(err) {
    console.log(err)
  }
}
