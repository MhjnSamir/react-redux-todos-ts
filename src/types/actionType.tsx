export interface markCompleteAction {
  type: "MARK_COMPLETE",
  todo: string;
}
export interface markInCompleteAction {
  type: "MARK_INCOMPLETE",
  todo: string;
}

export interface deleteTodoAction {
  type: "DELETE_TODO",
  todo: string;
}

