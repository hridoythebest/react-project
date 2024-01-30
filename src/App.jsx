import Navbar from "./components/Navbar"
import Home from './components/Home';
import Services from "./components/Services";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import MyFooter from "./components/MyFooter";


function App() {
  return (
   <>
   <Navbar />
   <Home/>
   <Services/>
   <About/>
   <Product />
   <Blog/>
   <NewsLetter/>
   <MyFooter/>
   </>
  )
}

export default App
