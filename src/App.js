import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript Library",
  },
  {
    title: "What is special about the virtual DOM?",
    content:
      "The virtual DOM is a shallow copy of the actual DOM, it is much faster",
  },
  {
    title: "What is a component in React?",
    content: "Components are blocks of code that can be reused over time",
  },
];

function App() {
  return (
    <div>
      <Search/>
      {/* <Accordion items={items}/> */}
    </div>
  );
}

export default App;
