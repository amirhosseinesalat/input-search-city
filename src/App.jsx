import { useState } from "react";
import Input from "./Input";
function App() {
  const handleChange = (event) => {
    const [searchTerm, setSearchTerm] = useState("");
    setSearchTerm(event.target.value);
  };
  return <Input/>
}

export default App;
