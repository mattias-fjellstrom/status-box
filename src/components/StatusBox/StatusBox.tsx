import React from "react";
import "./StatusBox.css";

export interface StatusBoxProps {
  title: string;
}

const StatusBox = (props: StatusBoxProps) => {
  return (
    <div className="success">
      <p>{props.title}</p>
    </div>
  );
};

export default StatusBox;
