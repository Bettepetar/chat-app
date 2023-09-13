import { Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Footer = () => {
    const theme = useTheme()
    return (
      <Box
        sx={{
          width: "100%",
          background:
            theme.palette.mode === "light"
              ? "#F8FaFF"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <StyledInput
            placeholder="Write a message..."
            fullWidth
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  {" "}
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  {" "}
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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