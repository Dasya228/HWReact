import Card from "./components/Card";
import SecondImg from "./components/SecondImg";
import Text from "./components/Text"
import Price from "./components/Price";
import Stars from "./components/Stars";

const App = ()=>{
  return (
  <div className={'container'}>
<div className="row">
  <div className="col-6">
   <div className="box">
     <Card/>
     <SecondImg/>
   </div>
  </div>
  <div className="col-6 innerbox">
     <Text/>
     <Price/>
    <div className="stars-wrap">
      <Stars/>
      <Stars/>
      <Stars/>
      <Stars/>
   </div>
  </div>
</div>
  </div>

  )

}
export default App;