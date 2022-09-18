import {
  Box,
  TextField,
  Button,
  styled,
  Slider,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import MuiInput from "@mui/material/Input";
import React, { useState } from "react";
import Settings, { ResetButton, InspirationButton } from "./Settings";

import generate from "./Cohere";

function App() {
  const [story, setStory] = useState("Once upon a time ");
  const [paused, setPaused] = useState(false);
  const [lockedString, setLockedString] = useState("");

  const [words, setWords] = useState(1);
  const resetStory = () => setStory("");

  const [apiKey, setApiKey] = useState("")

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 0, p: 0, width: "100vw", height: "100vh" }}
    >
      <Box>
        <h1>one word stories</h1>
      </Box>
      <Box sx={{ width: "40rem", pt: 1, px: 3 }}>
        <TextField fullWidth placeholder="API Key" size="small" value={apiKey} onChange={(event)=>setApiKey(event?.target.value ?? "")} />
      </Box>
      <Settings words={words} setWords={setWords} />
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
              const generated = await generate(newValue.trim(), apiKey);
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
      <Stack spacing={2} direction="row">
        <ResetButton onClick={() => resetStory()} />
        <InspirationButton />
      </Stack>
    </Box>
  );
}

export default App;
