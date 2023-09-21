export interface Task {
  id: string,
  name: string,
  status: number,
  creation_date: string,
  selection_criteria: string[],
  operations: string[],
  task_progress: number[],
  scheduled: boolean,
}
