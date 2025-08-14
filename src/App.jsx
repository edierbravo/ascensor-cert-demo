import { LoginPage } from "./pages/LoginPage"
import { Provider } from "react-redux";
import { store } from "./store/Store"
import { AppRoutes } from "./AppRoutes";


function App() {

  // return (
  //   <LoginPage />
  // )

  return (
        <>
            <Provider store={ store }>
                <AppRoutes />
            </Provider>
        </>
    )
}

export default App
