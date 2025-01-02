import { Tabs } from "expo-router";
import { View, Image } from "react-native";

const TabIcon = () => (
    <View>
        <View>
            <Image />
        </View>
    </View>
)

const Layout = () => {
    return (
    <Tabs initialRouteName="home" 
    screenOptions={{
        tabBarActiveTintColor: "white",
    }}>
        <Tabs.Screen
            name="home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: () => <TabIcon />
            }}
        />
    </Tabs>
);
};

export default Layout;