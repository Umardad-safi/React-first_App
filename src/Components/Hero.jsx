import React from "react";
import { features } from "../Constants";
import { styles, layout } from "../Style";

export default function Hero() {
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} ${layout.section} gap-5 `}>
      {features.map((data) => {
        return (
          <>
            <div className=" shadow-md p-4 bg-black-gradient text-white">
              <div className={` ${styles.flexCenter} gap-5`}>
                <h2>{data.title}</h2>

                <img src={data.icon} alt="" />
              </div>

              <p>{data.content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
