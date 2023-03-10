import React from "react";

interface IProgressBarProps {
  progress: number;
  width: number;
  height: number;
  color: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  progress,
  width,
  height,
  color,
}) => {
  const progressStyle = {
    width: `${progress}%`,
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: "4px",
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "#bababa",
        borderRadius: "4px",
      }}
    >
      <div style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
