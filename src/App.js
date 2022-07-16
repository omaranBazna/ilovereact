import logo from './logo.svg';
import './App.css';
const message="cool cud"


const Heart=(props)=>{
  return (
    <div>
      {props.msg}
    </div>
  )
}
function App() {
  return (
    <Heart msg ={message} />
      
    
  );
}

export default App;
