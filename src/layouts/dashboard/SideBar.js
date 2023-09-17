import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";

const SideBar = () => {
    
  const theme = useTheme();
  const [selectedBtn, setSelectedBtn] = useState(0);
  const { onToggleMode } = useSettings();

  // console.log(theme);
  const handleClick = (index) => {
    setSelectedBtn(index);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handledClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          width: 100,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent="space-between"
          width={"100%"}
          alignItems={"center"}
          height={"100%"}
          spacing={3}
        >
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            spacing={3}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 2.5,
              }}
            >
              <img src={Logo} alt="logo" />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              align-Items={"center"}
              spacing={2}
            >
              {Nav_Buttons.map((btn) =>
                selectedBtn === btn.index ? (
                  <Box
                    sx={{
                      color: "white",
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={btn.index}
                    >
                      {btn.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      color: theme.palette.mode === "light" ? "#000" : "#fff",
                    }}
                    onClick={() => handleClick(btn.index)}
                    key={btn.index}
                  >
                    {btn.icon}
                  </IconButton>
                )
              )}
              <Divider />
              {selectedBtn === 3 ? (
                <Box
                  sx={{
                    color: "white",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                  onClick={() => handleClick(3)}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handledClick}
              src={faker.image.avatar()}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Stack px={1} spacing={1}>
                {Profile_Menu.map((el, idx) => (
                  <MenuItem onClick={handledClick} key={idx}>
                    <Stack
                      sx={{ width: 100 }}
                      direction="row"
                      alignItems="row"
                      justifyContent="space-between"
                    >
                      <span>{el.title}</span>
                      {el.icon}
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
        </Stack>
      </Box>
    );
}

export default SideBar