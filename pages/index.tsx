import localFont from "next/font/local";
import Nav from "../pages/navbar";
import { HeroUIProvider } from "@heroui/react";
import { Button, Input } from "@heroui/react";
import { useState } from "react";
import axios from "axios";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLichessProfile = async (username: string) => {
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/profile", { username });
      setUserData(response.data);
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError("Failed to fetch user data. Please check the username.");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HeroUIProvider>
      {/* <Nav /> */}
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">Lichess Profile Search</h1>
        <Input
          isClearable
          className="max-w-xs"
          label="UserName"
          placeholder="Enter your username"
          type="text"
          variant="bordered"
          onChange={(e) => setUsername(e.target.value)}
          onClear={() => setUsername("")}
        />
        <Button color="primary" onPress={() => fetchLichessProfile(username)} isLoading={loading}>
          {loading ? "Fetching..." : "Get The Data"}
        </Button>

        {error && <p className="text-red-500">{error}</p>}

        {userData && (
          <div className="flex flex-col gap-2 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              Username: <a href={userData.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{userData.username}</a>
            </h2>
            <p>Rating (Blitz): {userData.perfs?.blitz?.rating || "N/A"}</p>
            <p>Rating (Bullet): {userData.perfs?.bullet?.rating || "N/A"}</p>
            <p>Games Played: {userData.count?.all || 0}</p>
            <p>Wins: {userData.count?.win || 0}</p>
            <p>Losses: {userData.count?.loss || 0}</p>
            <p>Draws: {userData.count?.draw || 0}</p>
            <p>Followers: {userData.nbFollowers || 0}</p>
            <p>Joined: {new Date(userData.createdAt).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </HeroUIProvider>
  );
}
