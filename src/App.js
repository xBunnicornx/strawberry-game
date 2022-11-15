import "./App.css";

import { useState } from "react";

const cardImages = [
  {
    id: 1,
    url: "https://img.freepik.com/premium-photo/red-strawberry-bowl-wooden-table_458909-1090.jpg?w=1380",
  },
  {
    id: 2,
    url: "https://img.freepik.com/premium-photo/plate-fresh-strawberries-wooden-table-closeup_298046-990.jpg?w=1380",
  },
  {
    id: 3,
    url: "https://img.freepik.com/premium-photo/fresh-organic-strawberry-fruit-background_293060-14448.jpg?w=1380",
  },
  {
    id: 4,
    url: "https://img.freepik.com/premium-photo/top-view-closeup-group-strawberries_92534-3010.jpg?w=1380",
  },
  {
    id: 5,
    url: "https://img.freepik.com/premium-photo/organic-red-strawberry-background-texture-top-view-overhead_106885-3013.jpg?w=1380",
  },
  {
    id: 6,
    url: "https://img.freepik.com/premium-photo/background-from-fresh-strawberries-white_548832-7793.jpg?w=1380",
  },
  {
    id: 7,
    url: "https://img.freepik.com/free-photo/top-view-red-strawberries-blue-background_140725-140896.jpg?w=1380&t=st=1667958554~exp=1667959154~hmac=b43146d5f5bfccd4a6ce5f4f722938652764906af5b9cdc22dfbe13762b4a6be",
  },
  {
    id: 8,
    url: "https://img.freepik.com/free-photo/fresh-strawberries-half-strawberry-whole-berry-closeup-background-ripe-strawberries-delicious-natural-dessert_166373-2352.jpg?w=1380&t=st=1667958636~exp=1667959236~hmac=fc637fcc11c559056d7bd8f01f0911bc6413d3c9aadc23632c3fdae59f13db65",
  },
  {
    id: 9,
    url: "https://img.freepik.com/premium-photo/fresh-strawberries-closeup_114160-1069.jpg?w=1380",
  },
  {
    id: 10,
    url: "https://img.freepik.com/premium-photo/closeup-strawberry-saucepan-preparation-strawberry-jelly-marmalade-sauce_154293-10424.jpg?w=1380",
  },
  {
    id: 11,
    url: "https://img.freepik.com/free-photo/close-up-fresh-strawberries-small-brown-wooden-box_140725-151134.jpg?w=1380&t=st=1667958693~exp=1667959293~hmac=3d7632a4251f9da1596af27965e3fdaa508f18ffe491ddf3c63a2802d15efb13",
  },
  {
    id: 12,
    url: "https://img.freepik.com/free-photo/top-view-natural-fresh-red-strabberies-small-brown-wooden-box_140725-135211.jpg?w=1380&t=st=1667958713~exp=1667959313~hmac=6aac64417ef3a2a9b188ebbebeb2d5df622aad8551fe8662dd22ba5577381ac3",
  },
  {
    id: 13,
    url: "https://img.freepik.com/free-photo/natural-fresh-red-strawberries-small-brown-wooden-box_140725-150392.jpg?w=1380&t=st=1667958746~exp=1667959346~hmac=57ededb80bc9cded305141a660d7322e105e120c4215257c188d73fa0c2ff98f",
  },
  {
    id: 14,
    url: "https://img.freepik.com/premium-photo/one-strawberry-white-background-isolate_460171-1648.jpg?w=1380",
  },
  {
    id: 15,
    url: "https://img.freepik.com/premium-photo/one-strawberry-white-background_638061-7.jpg?w=1380",
  },
];

let pick = [];
function App() {
  const [score, setScore] = useState(1);
  const [highScore,setHighScore] =useState(0)
  let board = cardImages.map(function (element) {
    return (
      <div className="pic">
        <button onClick={click}>
          {" "}
          <img id={element.id} src={element.url} width="220px" height="220px" />
        </button>
      </div>
    );
    function click() {
      if (pick.includes(element.id)) {
        setScore(1)
        alert("lose" + (score -1));
        pick=[]
      }else{
      console.log(score);
      setScore(score + 1);
      pick.push(element.id);
      winnerCheck();}
    }
    function winnerCheck(){
      if(score === 15) {
        setScore(1)
        alert("win")
        pick=[]
    }
    else if(score>highScore){
      setHighScore(score)
    }
    }
  });
  return (<><div className="header">STRAWBERRY GAME  </div><div className="rule">Get points by clicking on an image but don't click on any more than once!</div> <div className='score'>Score: {score-1} </div> <div className='high-score'>High Score: {highScore}</div> {board.sort(() => Math.random() - 0.5)}</>);
}
export default App;
