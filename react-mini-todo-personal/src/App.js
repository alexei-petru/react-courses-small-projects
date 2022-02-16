import { useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos/ToDos";
import Form from "./components/Form/Form";
import NoToDoFound from "./components/ToDos/NoToDoFound";
import Pagination from "./components/Pagination.jsx/Pagination";

const STARTER_DATA = [
  { text: "Buy apples", id: "1tdba" },
  { text: "Buy Oranges", id: "2tdbo" },
];

function App() {
  const [toDosData, setToDosData] = useState(STARTER_DATA);

  const newToDoHandler = (newTodo) => {
    const newObj = { text: newTodo, id: Math.random().toString() };
    setToDosData((prevData) => [newObj, ...prevData]);
  };

  const toDoDeleteHandler = (deletedId) => {
    setToDosData((prevData) => {
      return prevData.filter((obj) => obj.id !== deletedId);
    });
  };

  return (
    <div className="App">
      <Form onSubmit={newToDoHandler} />
      {toDosData.length === 0 ? (
        <NoToDoFound />
      ) : (
        <ToDos onToDoDelete={toDoDeleteHandler} toDosData={toDosData} />
      )}
      <Pagination />
    </div>
  );
}

export default App;
