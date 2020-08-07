// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Action } from "overmind";

// export const changeNewTodoTitle: Action<string> = ({ state }, title) => {
//   state.newTodoTitle = title;
// };
export const setMessage: Action<string> = (
  { state, actions },
  value = "default message"
) => {
  state._message.text = value;
  setTimeout(actions.clearMessage, state._message.delay);
};
export const clearMessage: Action = ({ state, actions }) => {
  state._message.text = "";
};

type RoomPair = {
  user: string;
  room: string;
};
type Rooms = {
  join: Action<RoomPair>;
  leave: Action<RoomPair>;
};
export const rooms = {
  join: ({ state }, pair: RoomPair) => {
    const { room, user } = pair;
    state._server.rooms[room].push(user);
  },
  leave: ({ state }, pair: RoomPair) => {
    const { room, user } = pair;
    state._server.rooms = state._server.rooms.filter(entry => user !== entry);
  }
};
