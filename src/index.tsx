
import ReactDOM from 'react-dom/client';
import "./style/index.scss"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer';
import MyApp from './components/app/MyApp';

const store = configureStore({
  reducer: rootReducer,
});


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
} else {
  console.error("L'élément avec l'ID 'root' n'a pas été trouvé dans le DOM.");
}