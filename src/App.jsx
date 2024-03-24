import { useState } from "react";

function App() {
  const [color, setColor] = useState("#cccccc");
 
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
        <h2 className="text-[30px] text-black font-semibold">Color Changer!</h2>
        <div
          className="w-[200px] h-[200px] border rounded-lg duration-500"
          style={{
            backgroundColor: color,
            boxShadow:
              color === "white"
                ? `1px 2px 20px #cccccc`
                : `1px 2px 100px -2px ${color}`,
            border:
              color === "white"
                ? `1px solid #cccccc`
                : `1px solid ${color}`,
          }}
        ></div>
        <div>
          <input
            className="border w-[150px] h-[40px] border-slate-500 px-3 py-2 rounded-lg text-center text-slate-600 focus:text-slate-800 outline-none bg-transparent focus:border-slate-800"
            placeholder="enter color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;