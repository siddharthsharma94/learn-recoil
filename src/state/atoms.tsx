import { atom, selector } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "This is a Footer", // default value (aka initial value)
});

const switchState = atom({
  key: "switchState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export { textState, charCountState, switchState };
