import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { WalletScreen } from "./src/screens/WalletScreen";
import { SwapScreen } from "./src/screens/SwapScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState<"walletTab" | "swapTab">(
    "walletTab",
  );

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {activeTab === "walletTab" ? <WalletScreen /> : <SwapScreen />}

        <View style={s.tabBar}>
          <TouchableOpacity
            style={s.tab}
            onPress={() => setActiveTab("walletTab")}
          >
            <Ionicons
              name={activeTab === "walletTab" ? "wallet" : "wallet-outline"}
              size={30}
              color={activeTab === "walletTab" ? "#5041ea" : "#6B7280"}
            />
            <Text
              style={[s.tabLabel, activeTab === "walletTab" && s.tabActive]}
            >
              Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.tab}
            onPress={() => setActiveTab("swapTab")}
          >
            <Ionicons
              name={
                activeTab === "swapTab"
                  ? "swap-horizontal"
                  : "swap-horizontal-outline"
              }
              size={30}
              color={activeTab === "swapTab" ? "#5041ea" : "#6B7280"}
            />
            <Text style={[s.tabLabel, activeTab === "swapTab" && s.tabActive]}>
              Swap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#16161D",
    borderTopWidth: 1,
    borderTopColor: "#2A2A35",
    paddingBottom: 8,
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  tabLabel: {
    color: "#6B7280",
    fontSize: 14,
  },
  tabActive: {
    color: "#fff",
  },
});
