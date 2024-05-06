import React from "react";

class UserProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstname,
      lastName: props.lastname,
      age: null,
      points: null,
    };
  }

  render() {
    const { firstName, lastName, age, points } = this.state;
    return (
      <>
        <p>
          First name: <b>{firstName}</b>
        </p>
        <input
          value={firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        ></input>
        <p>
          Last name: <b>{lastName}</b>
        </p>
        <input
          value={lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        ></input>
        <p>
          Age: <b>{age}</b>
        </p>
        <input
          type="number"
          min={0}
          max={100}
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <p>
          Points: <b>{points}</b>
        </p>
        <input
          type="number"
          min={0}
          value={points}
          onChange={(e) => this.setState({ points: e.target.value })}
        ></input>
      </>
    );
  }
}

export default UserProfileClass;
