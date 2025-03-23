
// import * as React from 'react';
// import { CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy/styles';
// import GlobalStyles from '@mui/joy/GlobalStyles';
// import CssBaseline from '@mui/joy/CssBaseline';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Checkbox from '@mui/joy/Checkbox';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import IconButton from '@mui/joy/IconButton';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';
// import Stack from '@mui/joy/Stack';
// import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
// import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

// import AgriLogo from "../assets/agri.svg";
// import { CircularProgress, Link } from '@mui/joy';
// import { AuthContext } from '../context/Auth/AuthProvider';
// import LogImg from "../assets/logImg.jpeg"


// function ColorSchemeToggle(props) {
//   const { onClick, ...other } = props;
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);


//   React.useEffect(() => setMounted(true), []);

//   return (
//     <IconButton
//       aria-label="toggle light/dark mode"
//       size="sm"
//       variant="outlined"
//       disabled={!mounted}
//       onClick={(event) => {
//         setMode(mode === 'light' ? 'dark' : 'light');
//         onClick?.(event);
//       }}
//       {...other}
//     >
//       {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
//     </IconButton>
//   );
// }

// const customTheme = extendTheme({ defaultColorScheme: 'dark' });

// export default function AuthPage() {
//     const [isSignup, setIsSignup] = React.useState(false);
//     const [formData, setFormData] = React.useState({
//        name: "",
//        email: "",
//        password: "",
//        remember: false
//      });

//     const {signin, signup, isLoading, isError, errorMessage} = React.useContext(AuthContext)
   
//   return (
//     <CssVarsProvider theme={customTheme} disableTransitionOnChange>
//       <CssBaseline />
//       <GlobalStyles
//         styles={{
//           ':root': {
//             '--Form-maxWidth': '800px',
//             '--Transition-duration': '0.4s', // set to `none` to disable transition
//           },
//         }}
//       />
//       <Box
//         sx={(theme) => ({
//           width: { xs: '100%', md: '50vw' },
//           transition: 'width var(--Transition-duration)',
//           transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
//           position: 'relative',
//           zIndex: 1,
//           display: 'flex',
//           justifyContent: 'flex-end',
//           backdropFilter: 'blur(12px)',
//           backgroundColor: 'rgba(255 255 255 / 0.2)',
//           [theme.getColorSchemeSelector('dark')]: {
//             backgroundColor: 'rgba(19 19 24 / 0.4)',
//           },
//         })}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             minHeight: '100dvh',
//             width: '100%',
//             px: 2,
//           }}
//         >
//           <Box
//             component="header"
//             sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
//           >
//             <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
//               <img
//           src={AgriLogo}
//           alt="Nail Logo"
//           style={{ height: "1.25rem", borderRadius: "1.25rem" }}
//         />
              
//               <Typography level="title-lg">Leaf Analyser</Typography>
//             </Box>
//             <ColorSchemeToggle />
//           </Box>
//           <Box
//             component="main"
//             sx={{
//               my: 'auto',
//               py: 2,
//               pb: 5,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//               width: 400,
//               maxWidth: '100%',
//               mx: 'auto',
//               borderRadius: 'sm',
//               '& form': {
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 2,
//               },
//               [`& .MuiFormLabel-asterisk`]: {
//                 visibility: 'hidden',
//               },
//             }}
//           >
//             <Stack sx={{ gap: 4, mb: 2 }}>
//               <Stack sx={{ gap: 1 }}>
//                 <Typography component="h1" level="h3">
//                   Sign in
//                 </Typography>
//                 <Typography level="body-sm">
//                   {!isSignup?  "New to company?": "Already have an account?"}{' '}
//                   <Link onClick={() => setIsSignup(!isSignup)}  level="title-sm">
//                     {!isSignup ? "Sign up!" : "Sign in"}
//                   </Link>
//                 </Typography>
//               </Stack>
//             </Stack>
           
//             <Stack sx={{ gap: 4, mt: 2 }}>
//               <form
//                 onSubmit={(event) => {
//                   event.preventDefault();
//                   const formElements = event.currentTarget.elements;
//                   const data = {
//                     email: formElements.email.value,
//                     password: formElements.password.value,
//                     persistent: formElements.persistent.checked,
//                   };

//                   if(isSignup){
//                     signup(formData.name, "", formData.email, formData.password)
//                   } else {
//                     signin(formData.email, formData.password, formData.remember)
//                   }

//                 }}
//               >
//                 { isSignup && <FormControl required>
//                   <FormLabel>Name</FormLabel>
//                   <Input type="text" name="name"  value={formData.name} onChange={(e) => setFormData((prev) => ({... prev, name: e.target.value}))} />
//                 </FormControl> }
//                 <FormControl required>
//                   <FormLabel>Email</FormLabel>
//                   <Input type="email" name="email"  value={formData.email} onChange={(e) => setFormData((prev) => ({... prev, email: e.target.value}))} />
//                 </FormControl>
//                 <FormControl required>
//                   <FormLabel>Password</FormLabel>
//                   <Input type="password" name="password" value={formData.password} onChange={(e) => setFormData((prev) => ({... prev, password: e.target.value}))}  />
//                 </FormControl>
//                 <Stack sx={{ gap: 4, mt: 2 }}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Checkbox size="sm" label="Remember me" name="persistent" checked={formData.remember} onChange={(e) => setFormData((prev) => ({...prev, remember: e.target.checked}))} />
//                   </Box>
//                   {isLoading ? <Box display="flex" justifyContent="center"><CircularProgress /></Box> :<Button type="submit" fullWidth>
//                     {isSignup ? "Sign up" : "Sign in"}
//                   </Button>}
//                   {isError && <Typography color="danger" >{errorMessage}</Typography>}
//                 </Stack>
//               </form>
//             </Stack>
//           </Box>
//           <Box component="footer" sx={{ py: 3 }}>
//             <Typography level="body-xs" sx={{ textAlign: 'center' }}>
//               © Leaf Analysis {new Date().getFullYear()}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         sx={(theme) => ({
//           height: '100%',
//           position: 'fixed',
//           right: 0,
//           top: 0,
//           bottom: 0,
//           left: { xs: 0, md: '50vw' },
//           transition:
//             'background-image var(--Transition-duration), left var(--Transition-duration) !important',
//           transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
//           backgroundColor: 'background.level1',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundImage:
//             `url(${LogImg})`,
//           [theme.getColorSchemeSelector('dark')]: {
//             backgroundImage:
//               `url(${LogImg})`,
//           },
//         })}
//       />
//     </CssVarsProvider>
//   );
// }

import * as React from 'react';
import { CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { CircularProgress, Link, Card } from '@mui/joy';
import { Leaf, Sun, Moon } from 'lucide-react';
import { AuthContext } from '../context/Auth/AuthProvider';
import LogImg from "../assets/logImg.jpeg"

function ColorSchemeToggle(props) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      color="neutral"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </IconButton>
  );
}

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
    },
  },
});

export default function AuthPage() {
  const [isSignup, setIsSignup] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    remember: false
  });

  const { signin, signup, isLoading, isError, errorMessage } = React.useContext(AuthContext);

  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            backgroundColor: 'background.surface',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            component="header"
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                size="sm"
                variant="soft"
                color="success"
                sx={{ borderRadius: '50%' }}
              >
                <Leaf size={24} />
              </IconButton>
              <Typography
                level="h4"
                sx={{
                  background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Leaf Analyser
              </Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>

          <Box
            component="main"
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                width: 400,
                maxWidth: '100%',
                p: 4,
              }}
            >
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography level="h3">
                    {isSignup ? 'Create Account' : 'Welcome Back'}
                  </Typography>
                  <Typography level="body-sm">
                    {!isSignup ? "New to Leaf Analyser?" : "Already have an account?"}{' '}
                    <Link
                      component="button"
                      onClick={() => setIsSignup(!isSignup)}
                      color="success"
                    >
                      {!isSignup ? "Sign up!" : "Sign in"}
                    </Link>
                  </Typography>
                </Stack>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (isSignup) {
                      signup(formData.name, "", formData.email, formData.password);
                    } else {
                      signin(formData.email, formData.password, formData.remember);
                    }
                  }}
                >
                  <Stack spacing={2}>
                    {isSignup && (
                      <FormControl required>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </FormControl>
                    )}
                    <FormControl required>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </FormControl>
                    <FormControl required>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      />
                    </FormControl>

                    {!isSignup && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Checkbox
                          size="sm"
                          label="Remember me"
                          checked={formData.remember}
                          onChange={(e) => setFormData((prev) => ({ ...prev, remember: e.target.checked }))}
                        />
                      </Box>
                    )}

                    {isError && (
                      <Typography
                        level="body-sm"
                        color="danger"
                        sx={{ mt: 1 }}
                      >
                        {errorMessage}
                      </Typography>
                    )}

                    <Button
                      type="submit"
                      loading={isLoading}
                      color="success"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      {isSignup ? "Create Account" : "Sign in"}
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Card>
          </Box>

          <Box component="footer" sx={{ p: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © Leaf Analyser {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '50%',
            backgroundImage: `url(${LogImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </CssVarsProvider>
  );
}