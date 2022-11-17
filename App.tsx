import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppRoutes } from "./source/Routes/AppRoutes";
import { Provider as PaperProvider, Portal } from 'react-native-paper';
import { ToastProvider } from "react-native-toast-notifications";
export default function App() {
 return (
   <Provider store={store}>
     <PaperProvider>
      <ToastProvider>
         <AppRoutes />
      </ToastProvider>
     </PaperProvider>
   </Provider>
 );
}


