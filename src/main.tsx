import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

<BrowserRouter basename="/ace-de-interviews">
  <App />
</BrowserRouter>

<BrowserRouter basename="/ace-de-interviews">
  {/* your routes */}
</BrowserRouter>
