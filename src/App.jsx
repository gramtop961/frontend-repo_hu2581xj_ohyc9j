import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ThreeDScene from "./components/ThreeDScene";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <ThreeDScene />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
