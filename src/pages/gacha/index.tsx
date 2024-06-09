import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Point {
  x: number;
  y: number;
}

const Gacha = () => {
  const [drawing, setDrawing] = useState(false);
  const [lines, setLines] = useState<Point[][]>([]);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [alertTimeout, setAlertTimeout] = useState<NodeJS.Timeout | null>(null);

  const router = useRouter();

  // 補正値を定義
  const xOffset = 10; // 必要に応じて調整
  const yOffset = 10; // 必要に応じて調整

  useEffect(() => {
    const updateCanvasPosition = () => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      const rect = canvas.getBoundingClientRect();
      setCanvasPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY });
    };

    updateCanvasPosition();
    window.addEventListener("resize", updateCanvasPosition);
    window.addEventListener("scroll", updateCanvasPosition);

    return () => {
      window.removeEventListener("resize", updateCanvasPosition);
      window.removeEventListener("scroll", updateCanvasPosition);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startDrawing(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!drawing) return;
    draw(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    startDrawing(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!drawing) return;
    const touch = e.touches[0];
    draw(touch.clientX, touch.clientY);
  };

  const handleMouseUpOrLeave = () => {
    if (!drawing) return;
    endDrawing();
  };

  const handleTouchEnd = () => {
    if (!drawing) return;
    endDrawing();
  };

  const startDrawing = (clientX: number, clientY: number) => {
    if (alertTimeout) {
      clearTimeout(alertTimeout);
      setAlertTimeout(null);
    }

    setDrawing(true);
    setCurrentLine([
      { x: clientX - canvasPosition.x + xOffset, y: clientY - canvasPosition.y + yOffset },
    ]);
  };

  const draw = (clientX: number, clientY: number) => {
    setCurrentLine((currentLine) => [
      ...currentLine,
      { x: clientX - canvasPosition.x + xOffset, y: clientY - canvasPosition.y + yOffset },
    ]);
  };

  const endDrawing = () => {
    setDrawing(false);
    setLines((lines) => [...lines, currentLine]);
    setCurrentLine([]);
    const timeout = setTimeout(() => {
      router.push("/illust");
    }, 1000);
    setAlertTimeout(timeout);
  };

  return (
    <>
      <img
        src="img/ui-elements/illust_bg.png"
        alt="背景"
        className="absolute h-full w-full object-cover"
      />
      <div className="fixed left-1/2 top-6 aspect-[210/297] w-4/5 -translate-x-1/2 transform border bg-white shadow-lg sm:bottom-8  sm:w-auto">
        <img
          src="img/ui-elements/gacha/gacha_paper.png"
          alt="台紙"
          className="absolute h-full w-full object-cover"
        />
        <img
          src="img/ui-elements/gacha/gacha_pape.png"
          alt="パペ"
          className="absolute object-contain p-16 sm:p-40"
        />
        <div
          role="button"
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          className="fixed bottom-9 left-1/2 h-1/3 w-4/5 -translate-x-1/2 transform border bg-white p-2 shadow sm:bottom-20"
        >
          <canvas
            id="canvas"
            className="diagonal-stripes pointer-events-none left-0 top-0 h-full w-full"
            width="100%"
            height="100%"
          ></canvas>

          {lines.map((line, index) => (
            <svg key={index} className="pointer-events-none absolute left-0 top-0 h-full w-full">
              <polyline
                fill="none"
                stroke="#65BBE9"
                strokeWidth="3"
                points={line.map((point) => `${point.x},${point.y}`).join(" ")}
              />
            </svg>
          ))}
          {drawing && (
            <svg className="pointer-events-none absolute left-0 top-0 h-full w-full">
              <polyline
                fill="none"
                stroke="#65BBE9"
                strokeWidth="3"
                points={currentLine.map((point) => `${point.x},${point.y}`).join(" ")}
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Gacha;
