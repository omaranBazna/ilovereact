import HeartSvg from './HeartSvg'

const colors = [
    '#b8e3f5',
    '#f5b8e4',
    '#b8f5b9',
    '#f5f3b8',
    '#e3b8f5',
    '#fffcf2'
];
const CandyCardHeart=(props)=>{

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const random=shuffle(colors)[0]
    return ( 
        <div className="heart">
            <div className="heart-img">
                <HeartSvg color={random} />
            </div>
            <p className="heart-message">
                  {props.msg}
            </p>
           

        </div>

        
    )
}
export default CandyCardHeart;