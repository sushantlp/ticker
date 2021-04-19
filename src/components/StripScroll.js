import React, { useState } from "react";
import Marquee from "react-fast-marquee";

function StripScroll(props) {
  const data = props.data;
  const [move, setmove] = useState(true);
  return (
    <div id="wrap_container">
      <div className="button_play">
        <button onClick={() => setmove(!move)}>{move ? "||" : ">"}</button>
      </div>
      <div className="scroll_data">
        <ul id="parent">
          <Marquee play={move} speed={50} pauseOnHover>
            {data.map((d) => (
              <li className="scroll_data_display" key={d.id}>
                <b>{d.label}</b> {d.marketPrice}
                {d.direction === "positive" ? (
                  <p className="positive_inline_sybmol">&#9650;</p>
                ) : (
                  <p className="negative_inline_sybmol">&#9660;</p>
                )}{" "}
                <span
                  style={{
                    background:
                      d.direction === "positive" ? "#0080004f" : "#ff00004f",
                    marginRight: "2px",
                  }}
                >
                  {" "}
                  {d.value}{" "}
                </span>
                {"    "}
                <span
                  style={{
                    background:
                      d.direction === "positive" ? "#0080004f" : "#ff00004f",
                  }}
                >
                  {" "}
                  {d.percentageValue}%
                </span>{" "}
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </div>
  );
}

export default StripScroll;
