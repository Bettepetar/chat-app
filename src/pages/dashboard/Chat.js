import { Box, Button, Divider, IconButton, InputBase, Stack, Typography } from "@mui/material"
import { alpha, styled, useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElement from "./ChatElement";



const Chat = () => {
    const  theme  = useTheme()
    const Search = styled("div")(({ theme })=> ({
        position: "relative",
        borderRadius: 20,
        backgroundColor:alpha(theme.palette.background.paper, 1),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%" 
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }))
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1,1,1,0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: "100%"
        }
    }))

    return (
      <Box
        sx={{
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0, .25)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction={"row"}
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="search..."
                inputProps={{ "arial-lebel": "search" }}
              />
            </Search>
          </Stack>
          <Stack
            alignItems={"center"}
            direction="row"
            spacing={1.5}
            justifyContent="flex-start"
          >
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Stack
            spacing={2}
            sx={{ flexGrow: 1, overflowY: "scroll", maxHeight: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
              <Stack spacing={2.4}>
                <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
                  All chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    );
}

export default Chat;