import axios from 'axios';
import { BASE_URL_API, collections } from '../constans/urls';

export const getAllCharacters = async() => {
    await axios.get(`${BASE_URL_API}${collections.allCharacters}`)
    .then(response => {
        const allCharacters = response.data
        console.log(allCharacters);
        return allCharacters
    }).catch(error => {
        console.log(error.message);
    })
}
