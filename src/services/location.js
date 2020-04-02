import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export const getLocation = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status === "granted") {
    const { coords } = await Location.getCurrentPositionAsync({});
    const postageLocation = await Location.reverseGeocodeAsync({
      latitude: coords?.latitude ?? 0,
      longitude: coords?.longitude ?? 0
    });

    const {
      postalCode = "",
      city = "",
      region = "",
      street,
      name
    } = postageLocation[0];
    const address = `${name || street} ${city} ${region} ${postalCode}`;

    return {
      address,
      coords
    };
  } else {
    return "declined";
  }
};
