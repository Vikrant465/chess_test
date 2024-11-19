
import axios from "axios";


const fetchLichessProfile = async (username) => {
    try {
       
        const url = `https://lichess.org/api/user/${username}`;

        // Make the GET request to the Lichess API
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
            },
        });

        
        console.log('User Profile:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error.response ? error.response.data : error.message);
    }
};


const username = 'visugh'; 

fetchLichessProfile(username);
