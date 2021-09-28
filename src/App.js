import emojis from "./Assets/Emojis";
import { useState } from 'react';
import "./Styles/App.css";




function App() {
  
  const [emojiName, setEmojiName] = useState(0);
  const [emojiFound, setEmojiFound] = useState(0);
  //var emojiName = "Rofl";
  var emoji;

  const locateEmoji = (emoji) => {
    return emojis[emoji];
  }

  const messageForUser = () => {
    if (emojiFound === 1) {
      return (
        <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
  
          marginTop: "2rem"
        }}>
          
          <div>The emoji is called</div>
          <div style={{
            backgroundColor: "rgb(0 82 166)",
            color: "white",
            marginTop: "15px",
            padding: "5px 10px 5px 10px",
            borderRadius: "5px"
          }} >{emojiName}</div>
        </div>
      )
    } else {
      return (
        <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
  
          marginTop: "2rem"
        }}>
          
          <div>No such emoji is available</div>
          
        </div>
      )
    }
  }

  const searchBarOnChange = (event) => {
    emoji = event.target.value;
    console.log(emoji);
  }

  const searchBtnOnClick = (event) => {
    const result = locateEmoji(emoji);
    if(result){
      setEmojiFound(1);
      setEmojiName(emojis[emoji].name);
    } else {
      setEmojiFound(0);
    }
    
  }

  const EmojiMatrix = Object.keys(emojis).map( (emoji)=>{
    return (
      <div key={emojis[emoji].id} onClick={ ()=>{
        setEmojiFound(1);
        setEmojiName( emojis[emoji].name );
      }}
      className="emoji"
      >{emoji}</div>
    )
  } )
  
  return (
    <div className="App">

      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <h1 style={{
          textAlign: "center"
        }}>
          Emoji Interpreter
        </h1>
      </div>

      { /* user input */ }
      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{flex: 1}}></div> {/*Blank space*/}
        <input type="text" value={emoji} onChange={searchBarOnChange} />
        <div className="search-btn" onClick={searchBtnOnClick} >Search</div>
        <div style={{flex: 1}}></div> {/*Blank space*/}

      </div>

      {messageForUser()}
      
      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div style={{flex: 1, textAlign: "center"}} >Emojis</div>
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "row"
        }}>

          <div style={{flex: 3}} ></div>

          <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            //width: "50rem"
          }}>{EmojiMatrix}</div>

          <div style={{flex: 3}} ></div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
