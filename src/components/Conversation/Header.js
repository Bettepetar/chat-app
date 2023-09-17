import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/appSlice";
import { StyledBadge } from "../StyledBadge";
const Header = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    // access the store
    // let useSelector()
  return (
    <Box
      sx={{
        width: "100%",
        background:
          theme.palette.mode === "light"
            ? "#F8FaFF"
            : theme.palette.background.default,
        boxShadow: "0 0 2px rgba(0,0,0, .25)",
      }}
      p={3}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        sx={{ height: "100%", width: "100%" }}
        //   p={3}
      >
        <Stack 
            onClick={() => {
              dispatch(ToggleSidebar())
            }} 
            sx={{ cursor: "pointer"}}
            direction={"row"} spacing={3}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()}></Avatar>
          </StyledBadge>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">Bette Peter</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems="center">
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Header;
