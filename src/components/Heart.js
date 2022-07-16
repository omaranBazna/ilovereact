
const Heart=(props)=>{
    return (
      <div>
        <img className="heart-img" src={HeartLogo} alt="heart"></img>
        <p className="heart-message">{props.msg}</p>
      </div>
    )
  }