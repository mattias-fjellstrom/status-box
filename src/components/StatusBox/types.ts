export enum Status {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  UNKNOWN = "unknown",
}

export interface StatusReporter<T> {
  (response: T): Status;
}

export interface StatusBoxProps<T> {
  title: string;
  webhook: string;
  pollInterval: number;

  statusReporter: StatusReporter<T>;
}
