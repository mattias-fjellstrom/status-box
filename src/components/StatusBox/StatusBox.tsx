import React from "react";

export interface StatusBoxProps {
  title: string;
}

const StatusBox = (props: StatusBoxProps) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};

export default StatusBox;
