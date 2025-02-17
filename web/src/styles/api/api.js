import axios from 'axios';

const URL_API = 'http://localhost:5555';

export const makeRequest = async (message) => {
    try {
        const { data } = await axios.post(`${URL_API}/api/prompt`, { message }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000 // Timeout de 10 segundos
        });

        return data;
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);

        if (error.response) {
            console.error('Resposta do servidor:', error.response.data);
            console.error('Status do servidor:', error.response.status);
        } else if (error.request) {
            console.error('Nenhuma resposta recebida:', error.request);
        } else {
            console.error('Erro ao configurar a requisição:', error.message);
        }

        throw error; // Rejeita o erro para ser tratado no componente
    }
};