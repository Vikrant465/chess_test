
import axios from "axios";

// Function to fetch user profile from Lichess
const fetchLichessProfile = async (username) => {
    try {
        // Lichess API endpoint for user profile
        const url = `https://lichess.org/api/user/${username}`;

        // Make the GET request to the Lichess API
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json', // Set header to accept JSON response
            },
        });

        // Log and return the user profile data
        console.log('User Profile:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error.response ? error.response.data : error.message);
    }
};

// Replace with the username you want to fetch
const username = 'lichess_username'; // e.g., 'MagnusCarlsen'

// Fetch and display the user's profile
fetchLichessProfile(username);
