const initialstate = { language: "an" };
const reducer = (state = initialstate, { type }) => {
  if (type === "an") {
    return { language: "an" };
  }
  if (type === "fr") {
    return { language: "fr" };
  }

  return state;
};
export default reducer;
