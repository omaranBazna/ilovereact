import logo from './logo.svg';
import './App.css';
const message="cool cud"


const Heart=(props)=>{
  return (
    <div>
      <img className="heart-img" src={logo.svg} alt="heart"></img>
    </div>
  )
}
function App() {
  return (
    <Heart msg ={message} />
      
    
  );
}

export default App;
