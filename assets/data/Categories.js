import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export const categories = [
  {
    id: "1",
    name: "Body",
    icon: <FontAwesome5 name="lungs" size={24} color="#06a30bff" />,
    color: "#C8E6C9",
  },
  {
    id: "2",
    name: "Symptoms",
    icon: <FontAwesome name="heartbeat" size={24} color="#b71e2dff" />,
    color: "#FFCDD2",
  },
  {
    id: "3",
    name: "Treatment",
    icon: <Ionicons name="bandage-outline" size={30} color="#7B1FA2" />,
    color: "#E1BEE7",
  },
];