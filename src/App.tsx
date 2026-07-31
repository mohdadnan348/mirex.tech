import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme';
import AppRoutes from './routes';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { CursorGlow } from './components/ui/CursorGlow';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { AIAssistant } from './components/ui/AIAssistant';
import { CookieConsent } from './components/ui/CookieConsent';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AnimatedBackground />
          <CursorGlow />
          <ScrollProgress />
          <ScrollToTop />
          <AppRoutes />
          <FloatingWhatsApp />
          <AIAssistant />
          <CookieConsent />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;