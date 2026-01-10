import { colors } from "../../globals/colors";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";

const activeColor = colors.color_1
const inactiveColor = colors.color_4

const activeBackgroundColor = colors.color_3

function returnIcon(name) {
    return ({ focused }) => (
        <FontAwesome
            name={name}
            size={24}
            color={focused ? activeColor : inactiveColor}
        />
    );
}

export default function returnTabScreenOptions(iconName) {
    return {
        tabBarIcon: returnIcon(iconName),
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,

        tabBarLabelStyle: {
            fontSize: 16
        },

        tabBarActiveBackgroundColor: activeBackgroundColor,

        tabBarItemStyle: {
            justifyContent: "center",
            height: 70,

        },

        tabBarIconStyle: {
            marginTop: 5,

        },
    }
}