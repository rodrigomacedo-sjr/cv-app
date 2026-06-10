import "./styles/index.css";
import LandingPage from "./components/LandingPage.tsx";
import FormsPage from "./components/FormsPage.tsx";
import { useState } from "react";

export function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col flex-1 w-full">
      <div key={page} className="animate-page-enter flex flex-col flex-1">
        {page == 0 && <LandingPage handleNext={() => setPage(1)} />}
        {page == 1 && (
          <FormsPage
            handlePrev={() => setPage(0)}
            handleNext={() => setPage(1)}
          >
            {" "}
          </FormsPage>
        )}
      </div>
    </div>
  );
}

export default App;
