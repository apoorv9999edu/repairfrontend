const TrackUserB = (state = { status: false, data: "", all: 0 }, action) => {
  switch (action.type) {
    case "BLOGIN":
      state = { ...state, status: true, data: action.payload };
      break;
    case "BLOGOUT":
      state = { ...state, status: false, data: "", all: 0 };
      break;
    case "GETBUSERDATA":
      state = { ...state };
      break;
    case "GETWHOISLOGGEDIN":
      console.log(action.payload);
      state = { ...state, all: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default TrackUserB;
