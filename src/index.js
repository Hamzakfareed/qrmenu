import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Import your Redux store
import App from './App';
import store from './components/login/store';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
