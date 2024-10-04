import Aside from "./Aside";
import MainSection from "./mainSection";
import Menu from "./menu";

function App() {
  return (
    <div className="flex h-screen bg-bg text-white font-body">
      <Menu />
      <MainSection />
      <Aside />
    </div>
  );
}

export default App;

