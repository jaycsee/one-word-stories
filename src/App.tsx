import {
  Box,
  TextField,
  FormControlLabel,
  Switch,
  CircularProgress,
  createTheme,
  ThemeProvider
} from "@mui/material";
import { useState } from "react";
import Settings, { InspirationButton, ResetButton } from "./Settings";

import generate from "./Cohere";
import createRandomStarter from "./randomStarter";
import randomColor from "randomcolor";

function App() {
  const [story, setStory] = useState(createRandomStarter("spicy"));
  const [paused, setPaused] = useState(false);
  const [lockedString, setLockedString] = useState(story);

  const apiKey = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "hi";

  const [words, setWords] = useState(1);
  const resetStory = () => {
    if (spicy) {
      setStory(createRandomStarter("spicy"));
    } else setStory(createRandomStarter("generic"))
    setLockedString("");
  };

  const [spicy, setSpicy] = useState(true)
  const [switchColor, setSwitchColor] = useState(randomColor());
  const [trackColor, setTrackColor] = useState(randomColor());
  const changeSpicyColor = () => {
    setSwitchColor(randomColor());
    setTrackColor(randomColor());
    setSpicy(!spicy);
  }

  const [cachedString, setCachedString] = useState("");

  const numWords = (s: string) => {
    let ans = 0;
    for (const p of s.trim().split(" ")) if (p !== "") ans++;
    return ans;
  };

  const [loading, setLoading] = useState(false);
  const needInspiration = async () => {
    setLoading(true);
    if (paused) return;
    setPaused(true);

    let newStory = lockedString;

    let cache = cachedString;
    console.log({ words, x: numWords(cachedString) })
    if (numWords(cachedString) < words) {
      cache += await generate(newStory.trim() + cachedString, apiKey, 2 * words + 4)
    }

    let alpha = false;
    let processed = 0;
    let generatedLength = 0;
    for (const c of cache) {
      generatedLength++;
      if (c.match(/[a-zA-Z]/)) alpha = true;
      newStory += c;
      if (alpha && c.match(/\s/)) processed++;
      if (processed === words) break;
    }

    setCachedString(cache.substring(generatedLength));
    setLockedString(newStory);
    setStory(newStory);
    setPaused(false);
    setLoading(false);
  }

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "808080"
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: switchColor
            }
          },
          track: {
            backgroundColor: "808080",
            ".Mui-checked.Mui-checked + &": {
              backgroundColor: trackColor
            }
          }
        }
      },
    }
  });

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
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ px: 3, py: 2 }}
      >
        <Box sx={{ mx: 2 }}>
          <Settings words={words} setWords={setWords} />
        </Box>
        <Box sx={{ mx: 5 }}>
          <ThemeProvider theme={theme}>
            <FormControlLabel
              sx={{
                display: 'block',
              }}
              control={
                <Switch
                  checked={spicy}
                  onChange={() => changeSpicyColor()}
                  name="loading"
                  color="primary"
                />
              }
              label="Spicy"
            />
          </ThemeProvider>
        </Box>
        <Box sx={{ mx: 2 }}>
          <ResetButton onClick={() => resetStory()} />
        </Box>
        <Box sx={{ mx: 2 }}>
          <InspirationButton onClick={() => needInspiration()} />
        </Box>
        <Box sx={{ mx: 2 }}>
          {loading && <CircularProgress />}
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

            setStory(newValue);
            if (
              newValue.endsWith(" ") &&
              numWords(lockedString) + words === numWords(newValue)
            ) {
              setLoading(true);
              setPaused(true);
              const generated = await generate(
                newValue.trim(),
                apiKey,
                words + 5
              );
              let newStory = story;
              let alpha = false;
              let processed = 0;
              let generatedLength = 0;
              for (const c of generated) {
                generatedLength++;
                if (c.match(/[a-zA-Z]/)) alpha = true;
                newStory += c;
                if (alpha && c.match(/\s/)) processed++;
                if (processed === words) break;
              }
              setCachedString(generated.substring(generatedLength));
              console.log(generated.substring(generatedLength));
              setLockedString(newStory);
              setStory(newStory);
              setPaused(false);
              setLoading(false);
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
