import * as SecureStore from "expo-secure-store";

export const getItem = async value => {
  try {
    const value = await SecureStore.getItemAsync(value);

    return value;
  } catch (e) {
    // dispatch in app notification on failure?
    console.log(e);
  }
};

export const setItem = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    // dispatch in app notification on failure?
    console.log(e);
  }
};
