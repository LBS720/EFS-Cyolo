import "./App.css";
import ImageUploader from "./components/imageUploader/ImageUploader";
import ParallaxPixelStars from "./components/utils/backgrounds/ParallaxPixelStars";

function App() {
  return (
    <div className="App">
      <ParallaxPixelStars></ParallaxPixelStars>
      <ImageUploader></ImageUploader>
    </div>
  );
}

export default App;
