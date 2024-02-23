import "./App.css";
import Subscription from "./components/Subscription/Subscription";
import Introduction from "./components/Introduction/Introduction";
function App() {
  return (
    <main className="flex flex-col max-w-[85%] text-center mt-16 lg:mt-0 xl:flex-row xl:max-w-full xl:px-[150px] xl:text-left xl:items-center xl:gap-8 mx-auto">
      <Introduction />
      <Subscription />
    </main>
  );
}

export default App;
