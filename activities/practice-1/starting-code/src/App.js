import useKey from './hooks/useKey'

const emoticone = (pressedKey) => {
  let output = "";

  if (pressedKey === "s") {
    output = "😊";
  } else if (pressedKey === "c") {
    output = "😭";
  } else if (pressedKey === "p") {
    output = "🎉";
  }else if (pressedKey === "d") {
    output = ":-D";
  }

  return output;
};

function App() {

  const  output = emoticone(useKey(['s', 'c', 'p']));
 
  return (
    <main>
      <h1>Press a key!</h1>
      <p>
        Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
      </p>
      <p id="output">{output}</p>
    </main>
  );
}

export default App;
