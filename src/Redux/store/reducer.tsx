import { createStore } from 'redux';

// Define action types
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

// Define initial state type
interface State {
  counter: number;
  isToggledOn: boolean;
}

// Define action types
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface IncreaseAction {
  payload: number;
  type: typeof INCREASE;
}

interface ToggleAction {
  type: typeof TOGGLE;
}

// Define union type for all actions
type ActionType = IncrementAction | DecrementAction | IncreaseAction | ToggleAction;

// Define initial state
const initialState: State = {
  counter: 0,
  isToggledOn: true
}; 

// Define reducer function
const counterReducer = (state: State = initialState, action: ActionType): State => {
  switch (action.type) {
    case INCREMENT:
      return {
        isToggledOn: state.isToggledOn,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        isToggledOn: state.isToggledOn,
        counter: state.counter - 1
      };
    case INCREASE:
      return {
        counter: state.counter + action.payload,
        isToggledOn: state.isToggledOn,
      };
    // case TOGGLE:
    //   return {
    //     counter:state.counter,
    //     isToggledOn: !state.isToggledOn
    //   };
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

export default store;
