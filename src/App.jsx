import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/posts/PostsPage";
import CreatePage from "./pages/posts/CreatePage";
import DetailPage from "./pages/posts/DetailPage";

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
            <Route path="detail" element={<DetailPage />} />
           </Route>
           <Route path="/about" element={<AboutPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
