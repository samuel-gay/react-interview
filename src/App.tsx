import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useState } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Slider,
} from "@mui/material";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="card-container">
      <Card className="device-card">
        <CardHeader
          className="content-container"
          title="React Interview Example"
        />

        <CardContent className="content-container">
          <Typography>{counter}</Typography>
        </CardContent>
        <CardContent className="content-container">
          <Slider
            min={0}
            max={20}
            step={1}
            value={counter}
            onChange={(_event, value: number | number[]) =>
              setCounter((Array.isArray(value) ? value[0] : value) ?? 0)
            }
          />
          <Button
            className="flex-item"
            variant="outlined"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </Button>
          <Button
            className="flex-item"
            variant="outlined"
            onClick={() => setCounter(0)}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
