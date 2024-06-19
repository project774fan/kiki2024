import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

const Time = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const fetchTime = () => {
      const japanTime = moment().tz("Asia/Tokyo").format("HH:mm");
      setCurrentTime(japanTime);
    };

    // Fetch time immediately when component mounts
    fetchTime();

    // Update time every minute
    const interval = setInterval(fetchTime, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" absolute right-6 flex h-full  w-full skew-x-12 items-center justify-end text-end text-indigo-900">
      <div>
        <p>△ ✕ ＋ ◯</p>
        <p className="text-xl font-bold">{currentTime}</p>
      </div>
    </div>
  );
};

export default Time;
