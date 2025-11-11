import { useState } from "react";
import cities from "./cities.json";

const Input = ({ hint }) => {
  const [city, setCity] = useState(cities);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const result = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(result);
  };
  const handleSelect = (city) => {
    setSearchTerm(city);
    setFilteredCities([]);
  };
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        value={searchTerm}
        onChange={handleChange}
      />

      <ul>
        {filteredCities.length > 0 &&
          filteredCities.map((city, index) => (
            <li key={index} onClick={() => handleSelect(city)}>
              {city}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Input;
