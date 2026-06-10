import "./styles/index.css";
import LandingPage from "./components/LandingPage.tsx";
import FormsPage from "./components/FormsPage.tsx";

export function App() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {false && <LandingPage />}
      {true && <FormsPage />}
    </div>
  );
}

export default App;
