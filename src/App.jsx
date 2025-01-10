import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/posts/PostsPage";
import CreatePage from "./pages/posts/CreatePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
           <Route path="/" element={<HomePage />}/> 
           <Route path="/posts">
            <Route index element={<PostsPage />} />
            <Route path="create" element={<CreatePage />} />
           </Route>
           <Route path="/about" element={<AboutPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
