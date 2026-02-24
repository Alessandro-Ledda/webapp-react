import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/Homepage"
import MoviePages from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePages />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
