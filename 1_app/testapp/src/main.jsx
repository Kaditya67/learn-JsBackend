import { StrictMode, createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

export const MyContext = createContext();

const Root = () => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <StrictMode>
        <App />
      </StrictMode>
    </MyContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
