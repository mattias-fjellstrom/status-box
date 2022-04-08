import React, { useEffect, useState } from "react";
import "./StatusBox.css";
import { Status, StatusBoxProps } from "./types";

export const StatusBox = <T,>(props: StatusBoxProps<T>) => {
  const [status, setStatus] = useState<Status>(Status.UNKNOWN);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(props.webhook);
        const body = (await response.json()) as T;
        setStatus(props.statusReporter(body));
      } catch (err) {
        console.log(err);
        setStatus(Status.ERROR);
      }
    };

    const interval = setInterval(() => {
      fetchStatus();
    }, props.pollInterval * 1000);

    fetchStatus();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${status}`}>
      <p>{props.title}</p>
    </div>
  );
};
