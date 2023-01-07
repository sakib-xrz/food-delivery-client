import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Routes";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
