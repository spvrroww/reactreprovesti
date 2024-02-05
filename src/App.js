import Users from "./components/Users";

function App() {

  const random = process.env.REACT_APP_TESTVAR
  return (
    <>
      <Users />
      <p>{random}</p>
    </>
  );
}

export default App;
