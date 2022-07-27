/*
 * Will dynamically create reducers
 * enforcing a unique way to describe reducers
 */
export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, actions) {
    if (handlers.hasOwnProperty(actions.type)) {
      return handlers[actions.type](state, actions);
    } else {
      return state;
    }
  };
}
