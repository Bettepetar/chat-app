import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Bell, CaretLeft, Image, Info, Key, Keyboard,  Lock, Note, PencilCircle } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { StyledBadge } from "../../components/StyledBadge";
import { useState } from "react";
import { DialogBox } from "../../components/Contact";
import Shortcuts from "../../sections/dashboard/ShortCuts";


const Setting = () => {
    const theme = useTheme()
    const [openDialog, setOpenDialog] = useState(false)
    const [openSettingDialog, setOpenSettinDialog] = useState(false)

    const handleSetDial = () => {
      setOpenSettinDialog(!openSettingDialog)
    }

   const  handleDialog = () => {
      setOpenDialog(!openDialog)
   }

   
    const LIST_SET_OPT = [
      {
        key: 0,
        icon: <Bell size={20} />,
        title: "Notification",
      },
      {
        key: 1,
        icon: <Lock size={20} />,
        title: "Privacy",
      },
      {
        key: 2,
        icon: <Key size={20} />,
        title: "Security",
      },
      {
        key: 3,
        icon: <PencilCircle size={20} />,
        title: "Theme",
        onClick: () => handleDialog(),
      },
      {
        key: 4,
        icon: <Image size={20} />,
        title: "Chat wlapaper",
      },
      {
        key: 5,
        icon: <Note sizze={20} />,
        title: "Request account info",
      },
      {
        key: 6,
        icon: <Keyboard size={20} />,
        title: "Keyboard Shortcut",
        onClick: () => handleSetDial(),
      },
      {
        key: 7,
        icon: <Info size={20} />,
        title: "Help",
      },
    ];

    return (
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* LeftSettings */}
        <Box
          sx={{
            oveerflowY: "scroll",
            width: 320,
            height: "100vh",
            boxShadow: "0 0 2px rgba(0,0,0, .24)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FaF8FF"
                : theme.palette.background,
          }}
          p={3}
        >
          {/* header */}
          <Stack direction="row" spacing={3} alignItems="center">
            <IconButton>
              <CaretLeft />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          {/* Profile */}
          <Stack direction="row" py={3} spacing={2} alignItems="center">
            {/* Avatar & Badge */}
            <StyledBadge>
              <Avatar
                sx={{ height: 56, width: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
            </StyledBadge>
            <Stack spacing={0.5}>
              <Typography variant="article">{faker.name.fullName()}</Typography>
              <Typography variant="body2">{faker.random.words()}</Typography>
            </Stack>
          </Stack>
          {/* List */}
          <Stack alignItems={"center"}>
            {LIST_SET_OPT.map((el) => (
              <Stack key={el.key} width="100%" sx={{ cursor: "pointer"}} 
                onClick={el.onClick}
              >
                <Stack direction={"row"} spacing={3} alignItems="center" py={2}>
                  {el.icon}
                  <Typography>{el.title}</Typography>
                </Stack>
                {!(el.key === LIST_SET_OPT.length - 1) && <Divider />}
              </Stack>
            ))}
          </Stack>
        </Box>
        {openDialog && <DialogBox handleClose={handleDialog} open={openDialog} action={"Theme"} />}
        {/* RightSettings */}
        <div>Settings</div>
       { openSettingDialog && <Shortcuts open={openSettingDialog} handleClose={handleSetDial} />}
      </Stack>
    );
}

export default Setting;