import { useEffect } from "react";
import { useStore } from "../../state";
import { getItem } from "../../services/storage";
import { getLocation } from "../../services/location";
import { SETTING_KEYS, SETTING_VALUES } from "../../constants/settings";

export default function InitializeSettings({ children }) {
  const [_, dispatch] = useStore();

  // TODO: hate this
  useEffect(() => {
    const init = async () => {
      const location = await getItem(SETTING_KEYS.location);

      if (!location || location === SETTING_VALUES.currentLocation) {
        const { address, coords } = await getLocation();

        if (address && coords) {
          dispatch({
            type: "updateSetting",
            key: SETTING_KEYS.location,
            value: SETTING_VALUES.currentLocation
          });

          dispatch({
            type: "updateSetting",
            key: SETTING_KEYS.address,
            value: address
          });

          dispatch({
            type: "updateSetting",
            key: SETTING_KEYS.coords,
            value: coords
          });
        }
      }

      const unit = await getItem(SETTING_KEYS.unit);

      if (unit) {
        dispatch({
          type: "updateSetting",
          key: SETTING_KEYS.unit,
          value: unit
        });
      }
    };
    init();
  }, []);

  return children;
}
