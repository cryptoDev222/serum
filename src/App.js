import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "./context";
import Snackbar from "./components/shared/Snackbar";

import AppRouter from "./router";

const App = () => {
  return (
    <SnackbarProvider>
      <div className="App">
        <Router>
          <AppRouter />
        </Router>
        <Snackbar />
      </div>
    </SnackbarProvider>
  );
};

export default App;
