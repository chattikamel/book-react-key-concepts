import { useEffect, useState } from "react";



const useKey = () => {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function keyPressedHandler(event) {
      const pressedKey = event.key;

      if (!["s", "c", "p", "d"].includes(pressedKey)) {
        alert("Invalid key!");
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener("keydown", keyPressedHandler);

    return () => window.removeEventListener("keydown", keyPressedHandler);
  }, [pressedKey]);

  return pressedKey;
};

export default useKey;
