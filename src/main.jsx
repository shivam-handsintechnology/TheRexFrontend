import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegisterContextProvider } from './services/registerContext.jsx';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.js';
import { SpinLoader } from './hooks/index.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<SpinLoader />} persistor={persistor}>
          <RegisterContextProvider>
            <App />
          </RegisterContextProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </>
  // </StrictMode>,
)
