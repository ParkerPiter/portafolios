import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import i18n from './i18n';

test('el boton de idioma alterna entre español e ingles', async () => {
  await i18n.changeLanguage('es');
  render(<App />);

  screen.getByRole('heading', { name: 'Portafolios Gabriel Leal' });
  screen.getByRole('button', { name: 'Proyectos' });

  fireEvent.click(screen.getByRole('button', { name: /Cambiar idioma a inglés/i }));

  // Cambia a inglés: encabezado, pestañas y <html lang> actualizados
  screen.getByRole('heading', { name: "Gabriel Leal's Portfolio" });
  screen.getByRole('button', { name: 'Projects' });
  screen.getByRole('button', { name: 'Contact' });
  expect(document.documentElement.lang).toBe('en');

  // Y vuelve a español
  fireEvent.click(screen.getByRole('button', { name: /Switch language to Spanish/i }));
  screen.getByRole('button', { name: 'Proyectos' });
  expect(document.documentElement.lang).toBe('es');
});
