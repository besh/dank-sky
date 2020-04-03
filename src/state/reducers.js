import { setItem } from "services/storage";

/* TODO:
 * Will do combined reducer once we have more
 */
export default (state, { type, key, value }) => {
  switch (type) {
    case "updateSetting":
      setItem(key, value);

      return {
        ...state,
        [key]: value
      };

    default:
      return state;
  }
};
