import React, {useState} from 'react'

export default function TextForm(props) {
  let changeTitle = ()=>{
      document.title = "TextUtils - Home";
  }
  changeTitle();

  const [text, setText] = useState("");
  const handlelOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText (newText);
    props.showAlert ("Converted to Uppercase!", "success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLocaleLowerCase();
    setText (newText);
    props.showAlert ("Converted to Lowercase!", "success");
  }
  const handleclrtext = ()=>{
    setText ('');
    props.showAlert ("Text Cleared!", "success");
  }
  const handleCopytext = ()=>{
    let textToCopy = document.getElementById('myBox');
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(textToCopy.value);
    props.showAlert ("Text Copied!", "success");
  }

  // // function to count actual number of words excluding blank characters
  // const count =(str)=>{
  //     const myarr = str.split(" ");
  //     let blankCount = 0;
  //     for (let i=0; i<myarr.length; i++){
  //         if (myarr[i] === ''){
  //             blankCount++;
  //         }
  //     }
  //     return (myarr.length - blankCount);
  // }
  // let wordCount = count(text);

  return (
    <>
      <div className='container' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
          <h1 style={{marginTop : '8px', fontSize : '2.3rem'}}>{props.heading}</h1>
          <div className="my-2">
              <textarea className="form-control" value={text} onChange={handlelOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'light' ? 'white' : '#212529', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
          </div>
          <button disabled= {text.length === 0} className="btn btn-primary my-1 me-2" onClick={handleCopytext} >Copy Text</button>
          <button disabled= {text.length === 0} className="btn btn-primary my-1 me-2" onClick={handleUpClick} >Convert to Uppercase</button>
          <button disabled= {text.length === 0} className="btn btn-primary my-1 me-2" onClick={handleLowClick} >Convert to Lowercase</button>
          <button disabled= {text.length === 0} className="btn btn-primary my-1 me-2" onClick={handleclrtext} >Clear Text</button>
      </div>
      <div className="container mt-1" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
          <h2>Your Text Summary</h2>
          <p><strong>{text.split(/\s/g).filter((element) => {return element.length !== 0}).length}</strong> words and <strong>{text.length} </strong>characters</p>
          {/* /\s/g -> Regular expression in javascript */}
          <p>Average Read time: <strong>{0.005 * text.split(" ").filter((element) => {return element.length !== 0}).length}</strong> minutes</p>
          <h2>preview</h2>
          <p>{text.length > 0 ? text : 'Type something in textbox to preview'}</p>
      </div>
    </>
  )
}
