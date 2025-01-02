import { Text, View } from "react-native"
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";

const Map = () => {

    // const region = {}

    return (
        <View style={{ flex: 1 }}>
        <MapView
            provider={PROVIDER_DEFAULT}
            style={{ flex: 1, borderRadius: 10 }}
            tintColor="black"
            mapType="mutedStandard"
            showsPointsOfInterest={false}
            showsUserLocation={true}
            userInterfaceStyle="light"
            // initialRegion={region}
        >
            <Text>Map</Text>
        </MapView>
        </View>
    );
};

export default Map;