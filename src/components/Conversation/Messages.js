import { Box, Stack, Typography } from "@mui/material";
import { Chat_History } from "../../data";
import { Document, Message, Reply, Timeline, Link } from "./MsgTypes";

const Messages = () => {
    return (
      <Box sx={{ width: "100%", flexGrow: 1 }} p={4}>
        <Stack spacing={3}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <Timeline el={el}/>;
                case "msg":
                    switch (el.subtitle) {
                      case "img":
                        return <Message incoming={el.incoming} />;
                      case "reply":
                        return <Reply />;
                      case "doc":
                        return <Document /> 
                      case "link":
                        return <Link />
                      default:
                        return <></>
                    }
              default:
                return <Typography /> 
            }
          })}
        </Stack>
      </Box>
    );
}

export default Messages;