import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { MediaMessage, ReplyMsg, Timeline, LinkMsg, TextMsg, DocMsg } from "./MsgTypes";

const Messages = () => {
    return (
      <Box sx={{ width: "100%", flexGrow: 1, overflow: "auto"}} p={4}>
        <Stack spacing={3}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <Timeline el={el}/>;
                case "msg":
                    switch (el.subtype) {
                      case "img":
                        return <MediaMessage el={el} />;
                      case "reply":
                        return <ReplyMsg el={el} />;
                      case "doc":
                        return <DocMsg el={el} />;
                      case "link":
                        return <LinkMsg el={el}/>;
                      default:
                        return <TextMsg el={el} />;
                    }
              default:
                return <></>
            }
          })}
        </Stack>
      </Box>
    );
}

export default Messages;