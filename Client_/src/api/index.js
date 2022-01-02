import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const getAllTickers = async () => {
    const { data } = await api.get('allTickers')
    return data
}

export const getTickerData = async (tickerName) => {
    const { data } = await api.get(`tickerInfo/${tickerName}`) //add filter by index
    return data
}