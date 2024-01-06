import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Theme from './components/Theme/Theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Theme>
            <App />
        </Theme>
    </React.StrictMode>
);
