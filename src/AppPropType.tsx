import {complete,incomplete} from "types/storeType";
import {deleteTodoActionCreator,markInCompleteActionCreator,markCompleteActionCreator} from "types/actionCreatorType"

interface AppPropType {
  complete: complete,
  incomplete: incomplete,
  deleteTodo:deleteTodoActionCreator,
  markComplete:markCompleteActionCreator,
  markIncomplete: markInCompleteActionCreator
}

export default AppPropType;
