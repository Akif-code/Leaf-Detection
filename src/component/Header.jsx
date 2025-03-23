// import { Box, Button, Typography } from "@mui/joy";
// import React from "react";

// import AgriLogo from "../assets/agri.svg";
// import Navbar from "./navbar";

// const Header = ({ reset }) => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       gap={"2rem"}
//       p="1rem"
//       sx={{ fontSize: "sm", fontWeight: "semi-bold" }}
//     >
//       <Box
//         display="flex"
//         justifyContent="space-around"
//         alignItems="center"
//         gap={"2rem"}
//       >
//         <img
//           src={AgriLogo}
//           alt="Nail Logo"
//           style={{ height: "1.25rem", borderRadius: "1.25rem" }}
//         />
//         <Typography color="#D8B4F8" level="h2" sx={{ color: "#8e50c4" }}>
//           Leaf Analyser
//         </Typography>
//       </Box>
//       <Box sx={{ fontSize: "sm", fontWeight: "semi-bold" }}><Navbar/></Box>
//       {/* <Button
//         variant="outlined"
//         startDecorator={<RestartAltIcon />}
//         onClick={reset}
//       >
//         Reset
//       </Button> */}
//     </Box>
//   );
// };

// export default Header;

import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/joy';
import { Leaf } from 'lucide-react';
import Navbar from './Navbar';

const Header = ({ reset }) => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        bgcolor: 'background.surface',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 2,
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <IconButton
            variant="soft"
            color="success"
            size="lg"
            sx={{
              borderRadius: '50%',
              bgcolor: 'success.softBg',
              '&:hover': {
                bgcolor: 'success.softHoverBg',
              },
            }}
          >
            <Leaf size={24} />
          </IconButton>
          <Typography
            level="h3"
            sx={{
              background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Leaf Analyser
          </Typography>
        </Box>
        <Navbar reset={reset} />
      </Box>
    </Box>
  );
}

export default Header;