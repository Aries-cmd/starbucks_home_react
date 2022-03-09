export function toggleMenuContent(state, action) {
  switch (action.type) {
    case "toggleMenuContent":
      return {...state, key: !(state.key)}
      break;
  }
}