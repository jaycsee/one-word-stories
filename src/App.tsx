import {
  Box,
  TextField,
  Stack,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";
import Settings, { InspirationButton, ResetButton } from "./Settings";

import generate from "./Cohere";
import createRandomStarter from "./randomStarter";

function App() {
  const [story, setStory] = useState(createRandomStarter("spicy"));
  const [paused, setPaused] = useState(false);
  const [lockedString, setLockedString] = useState("");

  const [words, setWords] = useState(1);
  const resetStory = () => {
    if (spicy) {
      setStory(createRandomStarter("spicy"));
    } else setStory(createRandomStarter("generic"))
    setLockedString("");
  };

  const [apiKey, setApiKey] = useState(
    localStorage.getItem("cohereAPIKey") ?? ""
  );

  const [spicy, setSpicy] = useState(true)

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ m: 0, p: 0, width: "100vw", height: "100vh" }}
    >
      <Box>
        <h1>one word stories</h1>
      </Box>
      <Box sx={{ width: "25rem", pt: 1, px: 3 }}>
        <TextField
          fullWidth
          placeholder="API Key"
          size="small"
          value={apiKey}
          onChange={(event) => {
            setApiKey(event?.target.value ?? "");
            localStorage.setItem("cohereAPIKey", event.target.value);
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ px: 3, py: 2 }}
      >
        <Box sx={{ mx: 1 }}>
          <Settings words={words} setWords={setWords} />
        </Box>
        <Box sx={{ mx: 1 }}>
          <FormControlLabel
            sx={{
              display: 'block',
            }}
            control={
              <Switch
                checked={spicy}
                onChange={() => setSpicy(!spicy)}
                name="loading"
                color="primary"
              />
            }
            label="Spicy"
          />
        </Box>
        <Box sx={{ mx: 1 }}>
          <ResetButton onClick={() => resetStory()} />
        </Box>
        <Box sx={{ mx: 1 }}>
          <InspirationButton onClick={() => { }} />
        </Box>
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

            if (lockedString === "") setLockedString(story);

            const numWords = (s: string) => {
              let ans = 0;
              for (const p of s.trim().split(" ")) if (p !== "") ans++;
              return ans;
            };

            setStory(newValue);
            if (
              newValue.endsWith(" ") &&
              numWords(lockedString) + words === numWords(newValue)
            ) {
              setPaused(true);
              const generated = await generate(
                newValue.trim(),
                apiKey,
                words + 5
              );
              let newStory = story;
              let alpha = false;
              let processed = 0;
              for (const c of generated) {
                if (c.match(/[a-zA-Z]/)) alpha = true;
                newStory += c;
                if (alpha && c.match(/\s/)) processed++;
                if (processed === words) break;
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
    </Box >
  );
}

export default App;
