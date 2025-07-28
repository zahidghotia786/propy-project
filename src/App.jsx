import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white text-3xl font-custom ">
      <Navbar />
      <Hero />
    </div>
  );
}
