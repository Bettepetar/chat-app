import { faker } from "@faker-js/faker";
import { Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import { SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import { UpdateSidebar } from "./redux/slices/appSlice";
import { dispatch } from "./redux/store";

const Docs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

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
            spacing={3}
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
          </Stack>
        </Box>
        {/* Tabs */}
        <Tabs
          sx={{ px: 0.5, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Stack
          sx={{
            height: "100",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
        >
          {(() => {
            switch (value) {
              case 0:
                //Image
                return (
                  <>
                    {[0, 1].map((el, idx) => (
                      <>
                        <Typography variant="caption" pt={2} px={2}>
                          22 Dec 2022
                        </Typography>
                        <Grid container spacing={2} p={2}>
                          {[0, 1, 2, 3, 4, 5].map((el, idx) => (
                            <Grid item xs={4} key={idx}>
                              <img
                                src={faker.image.abstract()}
                                alt="grid-img"
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </>
                    ))}
                  </>
                );
              case 1:
                //Links
                return SHARED_LINKS.map((el, idx) => <LinkMsg el={el} />);
              case 2:
                //Jobs
                return SHARED_LINKS.map((el, idx) => <DocMsg el={el} />);
              default:
                break;
            }
          })()}
        </Stack>
        {/* Body */}
        {/* <Stack>
            [0,1].map((el) => (
                <Typography variant="subtitle2">22 Dec 2022</Typography>
            ))
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default Docs;
