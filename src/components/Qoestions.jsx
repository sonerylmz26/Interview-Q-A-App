import  Row  from "react-bootstrap/Row"
import  Container  from "react-bootstrap/Container"

import Card from 'react-bootstrap/Card';
import { useState } from "react";
import {arrowdown} from "./../helper/icons"
import {arrowup} from "./../helper/icons"
import Interview from "./Interview";


const Qoestions = ({question, answer}) => {
      
const [toogle , setToogle ] = useState(true)



  return (

<Container className="mt-4">
<Row className="mt-2 w-75 mx-auto">

<Card className="p-4 cards" >
 <Card.Body className="d-flex  justify-content-between card-body">
<h5>{question}</h5>


{

toogle ? (<button onClick={()=> setToogle(false)}>{arrowdown}</button> ) : (<button onClick={()=> setToogle(true)}>{arrowup}</button>) 

}

 </Card.Body>

 {

toogle ? "" : <Interview answer={answer}  />

 }


</Card>

</Row>



</Container>
  )
}

export default Qoestions