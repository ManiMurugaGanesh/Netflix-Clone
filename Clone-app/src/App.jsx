import Nav from "./Nav";
import Trends from "./Trends";
import Reasons from "./Reasons";
import Questions from "./Questions";
import Subscription from "./subscription";
import Footer from "./Footer";

function App() {
  return (
    <>
     <div className="bg-black px-30 text-white">
        <Nav/>
        <Trends/>
        <Reasons/>
        <Questions/>
       <Subscription/>
       <Footer/>
     </div>
    </>
  )
}

export default App;
