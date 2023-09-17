import React from "react"
import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AntSwitch from "./AntSwitch";
import { ToggleSidebar, UpdateSidebar } from "./redux/slices/appSlice";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogBox = ({ action, handleClose, open}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        { `Are you sure you want to ${action} User` }
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
const Contact = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [openDialog, setOpenDialog] = useState(false)
    const [dialogAct, setDialogAct] = useState(null)
    const handleClose = (action) => {
      setDialogAct(action)
      setOpenDialog(!openDialog)
    }
    return (
      <Box sx={{ width: 320 }}>
        <Stack sx={{ height: "100%", maxHeight: "100%" }}>
          {/* header  */}
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
              direction="row"
              sx={{ height: "100%", p: 3 }}
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
            >
              <Typography variant="subtitle2">Contact Info</Typography>
              <IconButton onClick={() => dispatch(ToggleSidebar())}>
                <X />
              </IconButton>
            </Stack>
          </Box>
          {/* Body  */}
          <Stack
            sx={{
              height: "100px",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={2}
            spacing={3}
          >
            {/* avatar */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                sx={{ width: 64, height: 64 }}
                src={faker.image.avatar()}
              />
              <Stack>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">{"+234 8160384304"}</Typography>
              </Stack>
            </Stack>
            {/* Icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Video</Typography>
              </Stack>
            </Stack>
            <Divider />
            {/* About */}
            <Stack spacing={0.5}>
              <Typography variant="article">About</Typography>
              <Typography variant="body2">Hi there, i am using Chat</Typography>
            </Stack>
            <Divider />
            {/* Media Shares */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(UpdateSidebar("DOCS"));
              }}
            >
              <Typography variant="subtitle2">Media, Link & Docs</Typography>
              <Button endIcon={<CaretRight />}>401</Button>
            </Stack>
            {/* Media/ Share Img */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.imageUrl()} alt="media"></img>
                </Box>
              ))}
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(UpdateSidebar("STARRED"));
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Star />
                <Typography variant="subtitle2">Starred Message</Typography>
              </Stack>
              <CaretRight />
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Bell />
                <Typography variant="subtitle2">Mute Notifications</Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
            {/* bottom */}
            <Stack spacing={2}>
              <Typography variant="body2">{1} group in common</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src={faker.image.avatar()} />
                <Stack spacing={0.2}>
                  <Typography variant="body2">camels Gang</Typography>
                  <Typography variant="caption">
                    Owl, Paarot, Rabbit, you
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Button
                  onClick={() => {
                    handleClose("Block");
                  }}
                  startIcon={<Prohibit />}
                  fullWidth
                  variant="outlined"
                >
                  Block
                </Button>
                <Button
                  onClick={() => {
                    handleClose("Delete");
                  }}
                  startIcon={<Trash />}
                  fullWidth
                  variant="outlined"
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
            {openDialog && (
              <DialogBox
                handleClose={handleClose}
                open={openDialog}
                action={dialogAct}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    );
}

export default Contact