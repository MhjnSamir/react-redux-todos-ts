import {deleteTodoAction,markCompleteAction,markInCompleteAction} from "./actionType"

export type markCompleteActionCreator = (todo: string) => markCompleteAction;

export type markInCompleteActionCreator = (todo: string) => markInCompleteAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;