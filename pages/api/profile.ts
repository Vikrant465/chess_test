import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { username } = req.body;

    if (!username || typeof username !== "string" || !username.trim()) {
        return res.status(400).json({ error: "Invalid username" });
    }

    try {
        const url = `https://lichess.org/api/user/${username}`;
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
            },
        });

        return res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching profile:", error);
        return res.status(500).json({ error: "Failed to fetch user data" });
    }
}
