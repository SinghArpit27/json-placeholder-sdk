import todos from './api/todos'
import { IFetchTodo } from './interface'

export class JSONPlaceholderSDK {
    constructor() {}
    fetchTodo = async (todoIndex: number) => {
        try {
            const { data: fetchedTodo }: { data: IFetchTodo } = await todos.fetchTodo(todoIndex)
            return fetchedTodo
        } catch (error) {
            throw error
        }
    }
}

