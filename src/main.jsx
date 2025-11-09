import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
import './index.css';
import AuthProvider from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename="/OrangeFoods">
		<AuthProvider>
			<StoreContextProvider>
				<App />
			</StoreContextProvider>
		</AuthProvider>
	</BrowserRouter>

)
