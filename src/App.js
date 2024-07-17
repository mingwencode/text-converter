import {useState} from 'react';
import Result from './Result.js';

export default function App() {
  const [text, setText] = useState('')
  const [select, setSelect] = useState('')
  const [toggleState, setToggleState] = useState(false)
  const [converted, setConverted] = useState('')

  const handleSelect =(e) => {
    setSelect(e.target.value);
  }

  const handleSubmit = (e) => {
    convert(text, select)
    e.preventDefault();
    setToggleState(true)
  }

  const convert = (text, choice) => {
    switch(choice) {
      case 'uppercase': {
        setConverted(text.toUpperCase());
        break;
      };
      case 'lowercase': {
        setConverted(text.toLowerCase());
        break;
      }
      case 'encode': {
        setConverted(btoa(text));
        break;
      }
      case 'decode': {
        setConverted(atob(text));
        break;
      }
    }

  }


  return (
    <>
    {toggleState ?
      <Result inputText={converted} setState={setToggleState} setTextArea={setText} />
      :
    <>
        <h1>Text Converter</h1>
          <h3>Text to be converted:</h3>
        <form onSubmit={handleSubmit}>
          <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="what needs to be converted"name="paragraph_text" rows="5"></textarea>
          <input onChange={handleSelect} type="radio" name="convertChoices" value="uppercase" />
          <label> Convert text to uppercase </label>
          <br />
          <input onChange={handleSelect} type="radio" name="convertChoices" value="lowercase" />
          <label> Convert text to lowercase </label>
          <br />
          <input onChange={handleSelect} type="radio" name="convertChoices" value="encode" />
          <label> Convert text to base64 </label>
          <br />
          <input onChange={handleSelect} type="radio" name="convertChoices" value="decode" />
          <label> Convert base64 to text </label>
          <br />
          <button>SUBMIT</button>
        </form>
    </>
    }
    </>
  );
}