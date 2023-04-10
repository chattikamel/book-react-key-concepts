import { useRef } from "react";

function Form() {

  const programSelectRef = useRef();
  const nameInputRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(programSelectRef.current.value);
    console.log(nameInputRef.current.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}/>
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programSelectRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
