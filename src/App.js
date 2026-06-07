import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
 
      <NavBar />

      <Routes>

        {/* الصفحة الرئيسية */}
       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Featured />
              <Services />
              <Blog />
              
              <Footer />
            </>
          }
        />

        {/* صفحات أخرى */}
        <Route path="/about" element={<About />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
