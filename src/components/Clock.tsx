import "./clock.css";
import { useEffect, useState } from "react";

const Clock: React.FC = () => {
  type time = {
    nowHour: number;
    nowMinutes: number;
    nowSeconds: number;
  };

  const [date, setDate] = useState(new Date());
  const nowTime: time = {
    nowHour: date.getHours(),
    nowMinutes: date.getMinutes(),
    nowSeconds: date.getSeconds(),
  };
  const degHour =
    nowTime.nowHour * (360 / 12) + nowTime.nowMinutes * (360 / 12 / 60);
  const degMin =
    nowTime.nowMinutes * (360 / 60) + nowTime.nowSeconds * (360 / 60 / 60);
  const degSec = nowTime.nowSeconds * (360 / 60);

  const rootStyle = document.documentElement.style;
  rootStyle.setProperty("--degHour", `${degHour}deg`);
  rootStyle.setProperty("--degMin", `${degMin}deg`);
  rootStyle.setProperty("--degSec", `${degSec}deg`);

  const digit2 = (num: number): string => {
    if (num < 10 && num >= 0) {
      return "0" + num;
    } else if (num >= 10 && num < 100) {
      return String(num);
    } else {
      return "00";
    }
  };

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <>
      <div className="digital">
        {digit2(nowTime.nowHour)}:{digit2(nowTime.nowMinutes)}:
        {digit2(nowTime.nowSeconds)}
      </div>
      <div className="clock">
        <div className="h-hand">短針</div>
        <div className="m-hand">長針</div>
        <div className="s-hand">秒針</div>
        <div className="memori">
          <div id="one"></div>
          <div id="two"></div>
          <div id="three"></div>
          <div id="four"></div>
          <div id="five"></div>
          <div id="six"></div>
          <div id="seven"></div>
          <div id="eight"></div>
          <div id="nine"></div>
          <div id="ten"></div>
          <div id="eleven"></div>
          <div id="twelve"></div>
        </div>
      </div>
    </>
  );
};

export default Clock;
