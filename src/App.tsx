import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

import generate from "./Cohere"

function App() {
  const [story, setStory] = useState("");


  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 0, p: 0, width: "100vw", height: "100vh" }}
    >
      <Box><h1>one word stories</h1></Box>
      <Box sx={{ width: "40rem", pt: 1, px: 3 }}>
        <TextField fullWidth placeholder="API Key" size="small" />
      </Box>
      <Box flexGrow={1} sx={{ pt: 2, px: 3 }}>
        <TextField
          fullWidth
          multiline
          placeholder="Start your story here"
          value={story}
          onChange={async (event) => { setStory(event.target.value); console.log(await generate(event.target.value)); }}
          sx={{ maxHeight: "100%" }}
          rows={30}
        />
      </Box>
    </Box>
  );
}

export default App;
