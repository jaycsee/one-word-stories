import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [story, setStory] = useState("");

  console.log(
    fetch("https://api.cohere.ai/generate", {
      method: "POST",
      headers: {
        Authorization: "BEARER ",
        "Content-Type": "application/json",
        "Cohere-Version": "2021-11-08",
      },
      body: JSON.stringify({
        prompt: "Once upon a time in a magical land called",
      }),
    })
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 0, p: 0, width: "100vw", height: "100vh" }}
    >
      <Box>one word stories</Box>
      <Box sx={{ width: "40rem", pt: 1, px: 3 }}>
        <TextField fullWidth placeholder="API Key" size="small" />
      </Box>
      <Box flexGrow={1} sx={{ pt: 2, px: 3 }}>
        <TextField
          fullWidth
          multiline
          placeholder="Start your story here"
          value={story}
          onChange={(event) => setStory(event.target.value)}
          sx={{ maxHeight: "100%" }}
          rows={30}
        />
      </Box>
    </Box>
  );
}

export default App;
