import { useState } from 'react';

const JSONInput = ( props ) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleJSON = () => {
    let obj = JSON.parse(value);
    props.resetState(obj);
    setValue('');
  };
  
  return (
    <div className="block block__sub">
      <h3>JSON input</h3>
      <div className="m-form-field">
          <label className="a-label a-label__heading" htmlFor="json-input">
              Add JSON
          </label>
          <textarea id="json-input" className="a-text-input a-text-input__full" value={value} onChange={handleChange}>
            Paste JSON here
          </textarea>
      </div>
      <button className="a-btn" onClick={ handleJSON }>Upload JSON</button>
    </div> 
  )
};

export default JSONInput;