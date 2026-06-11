import "./styles/index.css";
import LandingPage from "./components/LandingPage";
import FormsPage from "./components/FormsPage";
import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import type { Cv } from "@/types/cv";

export function App() {
  const [page, setPage] = useState<number>(0);
  const [cv, setCv] = useState<Cv>({});

  return (
    <div className="flex flex-col flex-1 w-full">
      <div key={page} className="animate-page-enter flex flex-col flex-1">
        {page == 0 && <LandingPage handleNext={() => setPage(1)} />}

        {page == 1 && (
          <FormsPage
            handlePrev={() => setPage(0)}
            handleNext={() => setPage(2)}
          >
            <GeneralInfoForm
              initialData={cv.general ?? {}}
              updateGlobal={({ name, email, phone }) => {
                console.log({ name, email, phone });
                setCv((prevCv) => {
                  return {
                    ...prevCv,
                    general: {
                      name,
                      email,
                      phone,
                    },
                  };
                });
              }}
            />
          </FormsPage>
        )}

        {page == 2 && (
          <FormsPage
            handlePrev={() => setPage(1)}
            handleNext={() => setPage(3)}
          >
            {" Educational Experience "}
          </FormsPage>
        )}

        {page == 3 && (
          <FormsPage
            handlePrev={() => setPage(2)}
            handleNext={() => setPage(4)}
          >
            {" Professional Experience "}
          </FormsPage>
        )}
      </div>
    </div>
  );
}

export default App;
