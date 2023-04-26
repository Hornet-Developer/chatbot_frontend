// Modules
import { AppProps } from 'next/app';
import '@/assets/css/bootstrap.min.css';

// Global CSS
import "@/assets/css/global.css";
import "@/assets/css/header.css";
import "@/assets/css/footer.css";

// Page Specific CSS
import '@/assets/css/chatbord.css';
import '@/assets/css/chatbord-responsive.css';
import '@/assets/css/secttings.css';
import '@/assets/css/settings-responsive.css';
import '@/assets/css/login.css';
import '@/assets/css/login-responsive.css';
import '@/assets/css/newchatbot.css';

import '@/assets/css/backbtn.css';

// Files
import useToggle from '@/hooks/useToggle';
import { SideMenuContext } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen, onToggle } = useToggle();

  const value = {
    isSideMenuVisible: isOpen,
    toggleSideMenu: onToggle
  };

  return (
    <SideMenuContext.Provider value={value}>
      <Component {...pageProps} />
    </SideMenuContext.Provider>
  );
};
