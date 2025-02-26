import localFont from "next/font/local";
import Nav from "../pages/navbar"
import { HeroUIProvider } from "@heroui/react"
import { Button, Input } from "@heroui/react"
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

const fetchLichessProfile = async (username: string) => {
  if (!username.trim()) {
    alert("Please enter a username.");
    return;
  }
  // write the API call here
  

  // try {
  //   const url = `https://lichess.org/api/user/${username}`;
  //   const response = await axios.get(url, {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });

  //   console.log("User Profile:", response.data);
  //   alert(JSON.stringify(response.data, null, 2)); // Display in an alert for now
  //   return response.data;
  // } catch (error: any) {
  //   console.error(
  //     "Error fetching profile:",
  //     error.response ? error.response.data : error.message
  //   );
  //   alert("Failed to fetch user data.");
  // }
};


export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <HeroUIProvider>
      <Nav/>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">
          Lichess Profile
        </h1>
        <Input
          isClearable
          className="max-w-xs"
          label="UserName"
          placeholder="Enter your username"
          type="name"
          variant="bordered"
          onChange={(e) => setUsername(e.target.value)}
          // eslint-disable-next-line no-console
          onClear={() => setUsername("")}
        />
        <Button 
          color="primary"
          onPress={() => fetchLichessProfile(username)}
        >
          Get The Data
        </Button>
      </div>

    </HeroUIProvider>
  );
}
