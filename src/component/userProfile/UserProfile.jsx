import { useState } from "react";
export default function UserProfile({ firstname, lastname }) {
  const [name, setName] = useState(firstname);
  const [surname, setSurname] = useState(lastname);
  const [age, setAge] = useState(null);
  const [points, setPoints] = useState(null);

  return (
    <>
      <p>
        First name :<b>{name}</b>
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>
        Last name:<b>{surname}</b>
      </p>
      <p>
        Age:<b>{age}</b>
      </p>
      <p>
        Points:<b>{points}</b>
      </p>
      <br></br>
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <br></br>
      <input
        type="number"
        min={0}
        max={100}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <br></br>
      <input
        type="number"
        min={0}
        onChange={(e) => setPoints(e.target.value)}
      ></input>
    </>
  );
}
