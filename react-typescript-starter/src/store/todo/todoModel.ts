export interface Todo {
  readonly id: string;
  content: string;
  date?: number;
  checked?: boolean;
}
