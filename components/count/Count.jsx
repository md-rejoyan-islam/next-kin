const { useState } = require("react");

const Count = (value) => {
  const [time, setTime] = useState(value);

  const clear = setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  if (time === 0) {
    clearTimeout(clear);
  }

  const min =
    Math.floor(Number("." + (time / 3600).toString().split(".")[1]) * 60) || 0;

  const sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;

  const count = (min < 10 ? "0" + min : min) + ":" + sec;
  return {
    count,
    time,
    setTime,
  };
};


export default Count;