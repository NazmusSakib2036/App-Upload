import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './pages/header';
import Write_review from './pages/write_review';
import Write_show from './pages/write_show';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Header />
      <Write_review />
      <Write_show />
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}
