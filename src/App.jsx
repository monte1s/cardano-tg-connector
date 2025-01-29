import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useWallet, CardanoWallet } from "@meshsdk/react";

export default function ButtonAppBar() {
  const { address } = useWallet();
  console.log(address);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bison Valley
          </Typography>
          <CardanoWallet label={"Connect Wallet"} isDark />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
