import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { UpdateSidebar } from "./redux/slices/appSlice";
import { dispatch } from "./redux/store";
import { CaretLeft } from "phosphor-react";
import Messages from "./Conversation/Messages";

const StarredMessages = () => {
    const theme = useTheme()

    return (
      <Box width={320}>
        <Stack sx={{ height: "100%" }}>
          {/* header */}
          <Box
            sx={{
              boxShadow: "0 0 2px rgba(0,0,0, .25)",
              width: "100%",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background,
            }}
          >
            <Stack
              p={3}
              spacing={1}
              direction="row"
              sx={{ height: "100%" }}
              alignItems="center"
            >
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebar("CONTACT"));
                }}
              >
                <CaretLeft />
              </IconButton>
            <Typography> Starred Messages</Typography>
            </Stack>
          </Box>
          {/* Body */}
          <Messages />
        </Stack>
      </Box>
    );
}

export default StarredMessages;