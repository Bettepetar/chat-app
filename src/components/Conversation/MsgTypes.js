import { useTheme } from "@mui/material/styles";
import { Divider, Stack, Typography } from "@mui/material"

const Timeline = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider width={"46%"}/>
                <Typography variant="caption" sx={{ color: theme.palette.text }}>{ el.text }</Typography>
            <Divider width={"46%"}/>
        </Stack>
    )
}

const Message = ({ incoming }) => {
    return (
        <Stack justifyContent={ incoming ? "flex-Start" : "flex-end"}>
            <Typography> Hello world</Typography>
        </Stack>
    )
}

const Reply = () => {
    return (
        <Stack>

        </Stack>
    )
}

const Document = () => {
  return <Stack></Stack>;
};

const Link = () => {
  return <Stack></Stack>;
};

export { Timeline, Message, Reply, Document, Link};