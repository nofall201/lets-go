
import React from 'react';
import { createRoot } from 'react-dom/client';
import TransportSearchInterface from './components/TransportSearchInterface';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';

const loginApp = document.getElementById('login-app');
if (loginApp) {
    createRoot(loginApp).render(React.createElement(LoginView));
}

const registerApp = document.getElementById('register-app');
if (registerApp) {
    createRoot(registerApp).render(React.createElement(RegisterView));
}

const transportApp = document.getElementById('transport-search-app');
if (transportApp) {
    createRoot(transportApp).render(React.createElement(TransportSearchInterface));
}