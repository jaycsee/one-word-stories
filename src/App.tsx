import { Box, TextField, Button, styled, Slider, Typography, Grid, Stack } from "@mui/material";
import MuiInput from '@mui/material/Input';
import React, { useState } from "react";

import generate from "./Cohere"
import Settings, { ResetButton, InspirationButton } from "./Settings";

function App() {
  const [story, setStory] = useState("");

  const [words, setWords] = useState(1);

  const resetStory = () => setStory("")

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
      <Settings words={words} setWords={setWords} />
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
      <Stack spacing={2} direction="row">
        <ResetButton onClick={() => resetStory()} />
        <InspirationButton />
      </Stack>
    </Box>
  );
}

export default App;
