import axiosInstance from '../api/axiosInstance'
import API_ENDPOINTS from '../api/endpoints'
import useSWR from 'swr'

const fetcher = url => axiosInstance.get(url).then(r => r.data)

export default function useDatabaseTodos() {
    const { data: todos,  isLoading: loading, mutate } = useSWR(API_ENDPOINTS.FETCH_DATA, fetcher)

    const addTodo = async (todo) => {
        console.log("addTodo()");
        
        try {
            const { data } = await axiosInstance.post(API_ENDPOINTS.SUBMIT_DATA, { text: todo })
            mutate([...todos, data.receivedData.newTodo], false) 
        } catch (error) {
            console.error("Error adding todo:", error)
        }
    }

    const removeTodo = async (id) => {
        try {
            mutate(todos.filter(todo => todo._id !== id), false) 
            await axiosInstance.post(API_ENDPOINTS.REMOVE_DATA, { id })
        } catch (error) {
            console.error("Error removing todo:", error)
        }
    }

    return {
        addTodo,
        removeTodo,
        todos,
        loading
    }
}
