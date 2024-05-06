import ClassComponent from "./component/classComponent/ClassComponent";
import "./App.css";
import FuncComponent from "./component/funcComponent/FuncComponent";
import UserProfile from "./component/userProfile/UserProfile";
import UserProfileClass from "./component/userProfile/UserProfileClass";
function App() {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  return (
    <div className="App">
      <ClassComponent />
      <FuncComponent />
      <br></br>
      <UserProfile firstname={user.firstname} lastname={user.lastname} />
      <br></br>
      <UserProfileClass firstname={user.firstname} lastname={user.lastname} />
    </div>
  );
}

export default App;
