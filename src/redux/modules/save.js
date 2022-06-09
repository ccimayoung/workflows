// widgets.js

// Actions
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const REMOVE = "word/REMOVE";
const initialState = {
  list: [],
};

// Action Creators
export function createWord(word) {
  return { type: CREATE, word };
}

export function updateWord(word) {
  return { type: UPDATE, word };
}

export function removeWord(word) {
  return { type: REMOVE, word };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/CREATE": {
      const new_list = [...state.list, action.word];
      console.log(new_list);
      return { list: new_list };
    }
    case "word/REMOVE": {
      const new_list = state.list.filter((v) => {
        return v.id !== parseInt(action.word);
      });
      return { list: new_list };
    }
    case "word/UPDATE": {
      const new_list = state.list.map((v) => {
        if (v.id === parseInt(action.word.id)) {
          return action.word;
        } else {
          return v;
        }
      });
      return { list: new_list };
    }
    default:
      return state;
  }
}
