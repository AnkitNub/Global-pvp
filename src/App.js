import "./App.css";
import Products from "./Components/products";
import Details from "./Components/Details";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <p className="head">Welcome to Global VoV Trading Private Limited</p>
      </div>
      <div className="text">
        <p>
          At Global VoV Trading Private Limited, we are dedicated to providing
          high-quality medical and surgical products to healthcare
          professionals, institutions, and distributors worldwide. With a
          commitment to excellence, innovation, and customer satisfaction, we
          have become a trusted partner in the healthcare industry.
        </p>
        <h1>Our Misson </h1>
        <p>
          Our mission is to enhance healthcare outcomes by delivering top-notch
          medical and surgical supplies that meet the evolving needs of the
          medical community. We strive to contribute to the well-being of
          patients and support the tireless efforts of healthcare professionals.
        </p>
      </div>

      <Products />
      <Details />
      <Contact />
    </div>
  );
}

export default App;
