import { Box, Stack, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Conversation from "../../components/Conversation";
import Chat from "./Chat";

const GeneralApp = () => {
  const theme = useTheme()
  return (
    <Stack direction="row" sx={{ width: "100%"}}>
      <Chat />
      <Box sx={{ height: "100%", width: "calc(100vw - 420px)", background: theme.palette.mode === "light"? "#fff": theme.palette.background.default }}>
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
