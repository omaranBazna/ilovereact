import HeartLogo from './assests/heart.svg';
import './App.css';
import Header from './components/Header'
const message="cool cud"



function App() {
  return (
    <>
    <Header />
    <Heart msg ={message} />
    </>
    
  );
}

export default App;
