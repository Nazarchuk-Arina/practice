import s from "./ColorPicker.module.css";
import colors from "../../assets/colors";
import { useState } from "react";

const ColorPicker = () => {
  const [curColor, setCurColor] = useState("white");

  return (
    <section style={{ backgroundColor: curColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>Current color: {curColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => {
                setCurColor(item.color);
              }}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
