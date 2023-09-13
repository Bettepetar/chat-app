import { Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";


const Conversation = () => {
  return (
    <Stack
      height="100%"
      maxHeight={"100vh"}
      justifyContent="space-between"
      alignItems={"center"}
    >
     <Header />
      <Messages />
      <Footer />
    </Stack>
  );
};

export default Conversation;
