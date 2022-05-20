import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import React, { useState } from "react";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toogle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      {/* <Search/> */}
      {/* <Accordion items={items}/> */}
    </div>
  );
}

export default App;
