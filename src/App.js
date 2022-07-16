import HeartLogo from './assests/heart.svg';
import './App.css';
import Header from './components/Header'
const message="cool cud"


const Heart=(props)=>{
  return (
    <div>
      <img className="heart-img" src={HeartLogo} alt="heart"></img>
      <p className="heart-message">{props.msg}</p>
    </div>
  )
}

function App() {
  return (
    <>
    <Header />
    <Heart msg ={message} />
    </>
    
  );
}

export default App;
