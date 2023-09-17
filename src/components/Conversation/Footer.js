import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from "phosphor-react";
import { useState } from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];
const ChatInput = ({ setShowPicket }) => {
  const [openActs, setOpenActs] = useState(false)
  return (
    <StyledInput
      placeholder="Write a message..."
      fullWidth
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            {openActs && (
              <Stack sx={{ position: "relative" }}>
                {Actions.map((el) => (
                  <Tooltip title={el.title} placement="right">
                    <Fab
                      sx={{
                        position: "absolute",
                        top: -el.y,
                        backgroundColor: el.color,
                      }}
                    >
                      {el.icon}
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>
            )}
            <InputAdornment>
              {" "}
              <IconButton onClick={() => setOpenActs((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            {" "}
            <IconButton onClick={() => setShowPicket((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const Footer = () => {
    const theme = useTheme()
    const [showPicker, setShowPicket] = useState(false)
    // const [showPicker, setShowPicket] = useState(false);
    return (
      <Box
        sx={{
          width: "100%",
          background:
            theme.palette.mode === "light"
              ? "#F8FaFF"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <Stack width={"100%"}>
            <Box sx={{ position: "fixed", bottom: 81, right: 100, zIndex: 10 }}>
              {showPicker && (
                <Picker
                  data={data}
                  onEmojiSelect={console.log}
                  theme={theme.palette.mode}
                />
              )}
            </Box>
            <ChatInput setShowPicket={setShowPicket} />
          </Stack>
          <Box
            sx={{
              width: 38,
              height: 38,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContens: "center",
              }}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
}

export default Footer