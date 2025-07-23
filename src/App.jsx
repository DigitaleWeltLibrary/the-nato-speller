import { lazy, Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./style/fonts.scss";

/* NOTE lazy loading of pages */
const Quiz = lazy(() => import("./pages/Quiz"));
const FlashCards = lazy(() => import("./pages/FlashCards"));
const TextToPhonetic = lazy(() => import("./pages/TextToAlphabet"));

function App() {
  return (
    <>
      {/* NOTE BrowserRouter for changing between pages */}
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>
            <Routes>
              <Route path="/flashcards" element={<FlashCards />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/texttoalphabet" element={<TextToPhonetic />} />
              {/* NOTE redirect not known paths to flashcards */}
              <Route path="*" element={<Navigate to="/flashcards" replace />} />
            </Routes>
          </main>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
