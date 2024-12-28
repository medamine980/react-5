import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import NavAppBar from './components/shared/navAppBar/NavAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Div from './components/shared/themebased/Div';
import ReCAPTCHAModal from './components/shared/reCAPTCHAModal/ReCAPTCHAModal';
import { useSelector } from 'react-redux';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

let alreadyInitialized = false;

function App() {

  const [showRecpatcha, setShowRecaptcha] = useState(false);
  const { validUntil } = useSelector(state => state.recaptcha);

  function checkValidate() {
    if (validUntil < Date.now()) {
      setShowRecaptcha(true);
    }
  }

  useEffect(() => {
    if (alreadyInitialized) return;
    alreadyInitialized = true;
    checkValidate();
    setInterval(() => {
      if (showRecpatcha) return;
      checkValidate();
    }, 10000);
  }, []);

  // useEffect(() => {
  //   if (alreadyInitialized) return;
  //   alreadyInitialized = true;
  //   keycloak.init({ onLoad: 'login-required' }).then(isAuthenticated =>
  //     console.log(isAuthenticated)
  //   ).catch(console.log)
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {showRecpatcha && <ReCAPTCHAModal />}
      <NavAppBar />
      <Div className="home-container">
        <RouterProvider router={router} />
      </Div>
    </ThemeProvider>
  )
}

export default App
