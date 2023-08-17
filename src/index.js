import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'


const loadingContent = (
  <div style={{textAlign:'center'}}>
    <h2>Loading...</h2>
  </div>
)
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<h2>Loading...</h2>}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);