import logo from "../img/logo192.png"

const Header = () => {
  return (
<div className="header mt-5 ">
      <div className="d-flex justify-content-center">
          <img src={logo} alt="logo" style={{width:"100px"}} className=""/>  
      </div>
      
<h2 className="text-center display-3 text-light mt-3">REACT Interview Ouestions And Answers</h2>

</div>
)
}

export default Header