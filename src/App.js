import Users from "./components/Users";

function App() {

  const random = process.env.REACT_APP_TESTVAR
  console.log(random)
  let myvalue;
  if(random == "123456789")
  {
    myvalue = "The variable is readable"
  }
  else{
    myvalue = "The variable is not readable"
  }
  return (
    <>
      <Users />
      <p>{random}</p>
      
       <p>{myvalue}</p> 
      
    </>
  );
}

export default App;
