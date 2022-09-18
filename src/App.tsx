import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

import generate from "./Cohere";

function App() {
  const [story, setStory] = useState("Once upon a time ");
  const [paused, setPaused] = useState(false);
  const [lockedString, setLockedString] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 0, p: 0, width: "100vw", height: "100vh" }}
    >
      <Box sx={{ width: "40rem", pt: 1, px: 3 }}>
        <TextField fullWidth placeholder="API Key" size="small" />
      </Box>
      <Box flexGrow={1} sx={{ pt: 2, px: 3 }}>
        <TextField
          fullWidth
          multiline
          placeholder="Start your story here"
          value={story}
          onChange={async (event) => {
            if (paused) return;
            const newValue = event.target.value;
            if (!newValue.startsWith(lockedString)) return;
            setStory(newValue);
            if (
              newValue.endsWith(" ") &&
              newValue.length !== lockedString.length
            ) {
              setPaused(true);
              const generated = await generate(newValue.trim());
              let newStory = story;
              let alpha = false;
              for (const c of generated) {
                if (c.match(/[a-zA-Z]/)) alpha = true;
                newStory += c;
                if (alpha && c.match(/\s/)) break;
              }
              setLockedString(newStory);
              console.log(generated);
              setStory(newStory);
              setPaused(false);
            }
          }}
          sx={{ maxHeight: "100%" }}
          rows={30}
        />
      </Box>
    </Box>
  );
}

export default App;
