import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Qoestions from "./components/Qoestions";
import data from "./helper/dataQuestions"


function App() {
  return (
<div className="App">
     
<Header />


{

data.map((items , i ) =>{ 

return(
<div key={i}>
   <Qoestions  {...items} /> 
</div>
)


})


}


</div>
  );
}

export default App;
