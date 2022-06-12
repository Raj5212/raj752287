import React from "react";
import "./App.css";
import { useState } from "react";


const Countries = () => {
  const [name, setName] = useState("");

  const Search = async () => {
    const data = {setName}
    await fetch("https://restcountries.com/v3.1/name", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((resp) => {
        console.log("resp", resp);;
        resp.json().then((result) => {
            console.warn("result", result);
          

        })
    })
}

  return (
    <div className="App">
      <form >
        <label>
          Enter the country name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit' onClick={Search}>Submit</button>
      </form>
    </div>
  );
};

export default Countries