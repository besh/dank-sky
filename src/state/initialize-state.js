import { setItem, getItem } from "services/storage";
import { SETTING_KEYS, SETTING_VALUES } from "constants/settings";
import { getLocation } from "services/location";

export default async setInitialState => {
  const settingsPromises = Object.keys(SETTING_KEYS).map(async key => {
    const value = await getItem(key);
    return {
      [key]: value
    };
  });

  const values = await Promise.all(settingsPromises);
  let initialAddress = values.address;
  let initialCoords = values.coords;

  if (!initialAddress || !initialCoords) {
    const { address, coords } = await getLocation();

    if (address && coords) {
      await setItem(address);
      await setItem(coords);

      initialAddress = address;
      initialCoords = coords;
    }
  }

  console.log(values, initialAddress, initialCoords);

  setInitialState({
    [SETTING_KEYS.unit]: values.unit || SETTING_VALUES.fahrenheit,
    [SETTING_KEYS.address]: initialAddress || "",
    [SETTING_KEYS.coords]: initialCoords || {}
  });
};
