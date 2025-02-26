import axios from "axios";

const fetchLichessProfile = async (username: string) => {
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
        console.error('Error fetching profile:');
    }
};

const username: string = 'visugh';
fetchLichessProfile(username);
