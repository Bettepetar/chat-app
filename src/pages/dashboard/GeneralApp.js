import { Box, Stack, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import Conversation from "../../components/Conversation";
import Docs from "../../components/Docs";
import { selectNavbar } from "../../components/redux/slices/appSlice";
import StarredMessages from "../../components/StarredMessages";
import Chat from "./Chat";

const GeneralApp = () => {
  const theme = useTheme()
  const sidebar = useSelector(selectNavbar)
  console.log(sidebar)
  const app = useSelector((store) => store.app);
  // console.log(app)

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: `calc(${app.sidebar.open ? " 100vw - 740px" : "100vw - 420px"})`,
          background:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {/* contact */}
      { 
        app.sidebar.open &&  
        (() => {
          switch (app.sidebar.type){
            case "CONTACT": 
              return <Contact />;
            case "DOCS": 
              return <Docs />
            case "STARRED": 
              return <StarredMessages />
            default:
              break;
          }
        })()
      }
      {/* <Contact /> */}
    </Stack>
  );
};

export default GeneralApp;
