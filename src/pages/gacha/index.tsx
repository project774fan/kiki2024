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

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    setCanvasPosition({ x: rect.left, y: rect.top });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (alertTimeout) {
      clearTimeout(alertTimeout);
      setAlertTimeout(null);
    }

    setDrawing(true);
    const { clientX, clientY } = e;
    setCurrentLine([{ x: clientX - canvasPosition.x, y: clientY - canvasPosition.y }]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!drawing) return;
    const { clientX, clientY } = e;
    setCurrentLine((currentLine) => [
      ...currentLine,
      { x: clientX - canvasPosition.x, y: clientY - canvasPosition.y },
    ]);
  };

  const handleMouseUp = () => {
    if (!drawing) return;
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
      <div className=" absolute h-full w-full bg-blue-400"></div>
      <div className="fixed bottom-8 left-1/2 top-6 w-1/3 -translate-x-1/2 transform border bg-white shadow-lg">
        <div
          role="button"
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="fixed bottom-6 left-1/2 h-1/3 w-11/12 -translate-x-1/2 transform border bg-white shadow"
        >
          <canvas
            id="canvas"
            className="pointer-events-none absolute left-0 top-0 h-full w-full"
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
