export type ID = string;
// Columns data
export interface Column {
  id: ID;
  title: string;
  tasks: Task[];
}
// Tasks data
export interface Task {
  id: ID;
  title: string;
  createdAt: Date;
}
