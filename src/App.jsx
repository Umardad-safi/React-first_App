import React from "react";
import { styles } from "./Style";
import { Navbar } from "./Components/index";
export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
