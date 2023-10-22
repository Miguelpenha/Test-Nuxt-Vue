import axios from 'axios'

const config = useRuntimeConfig()

const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Authorization': `Bearer ${config.apiKey}`
    }
})

export default api