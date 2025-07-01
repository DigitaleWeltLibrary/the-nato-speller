import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header";

/* NOTE lazy loading of pages */
const Quiz = lazy(() => import("./pages/Quiz"));
const FlashCards = lazy(() => import("./pages/FlashCards"));
const TextToPhonetic = lazy(() => import("./pages/TextToAlphabet"));



function App() {
  return (
    <>
      {/* NOTE BrowserRouter for changing between pages */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/flashcards" element={<FlashCards />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/texttoalphabet" element={<TextToPhonetic />} />
            {/* NOTE redirect not known paths to flashcards */}
            <Route path="*" element={<Navigate to="/flashcards" replace />} />          </Routes>
        </Suspense >
      </BrowserRouter>
    </>
  )
}

export default App
