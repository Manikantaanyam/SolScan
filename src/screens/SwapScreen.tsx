import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function SwapScreen() {
  return (
    <ScrollView contentContainerStyle={s.mainView}>
      <Text style={s.title}>Swap Screen</Text>

      <View style={s.swapContainer}>
        <View style={s.tokenBox}>
          <View style={s.rowBetween}>
            <TouchableOpacity style={s.tokenButton}>
              <Image
                source={require("../../assets/eth.png")}
                style={s.tokenImage}
              />
              <Text style={s.tokenName}>ETH</Text>
              <Ionicons name="chevron-down" size={20} color="white" />
            </TouchableOpacity>

            <Text style={s.tokenPrice}>0.28014</Text>
          </View>

          <View style={s.rowBetween}>
            <Text style={s.tokenBalance}>Balance: 0.0661 ETH</Text>
            <Text style={s.tokenBalance}>$499.749</Text>
          </View>
        </View>

        <TouchableOpacity style={s.arrowSwapButton}>
          <Ionicons name="arrow-down" size={20} color="#FFF" />
        </TouchableOpacity>

        <View style={s.tokenBox}>
          <View style={s.rowBetween}>
            <TouchableOpacity style={s.tokenButton}>
              <Image
                source={require("../../assets/dai.png")}
                style={s.tokenImage}
              />
              <Text style={s.tokenName}>DAI</Text>
              <Ionicons name="chevron-down" size={20} color="white" />
            </TouchableOpacity>

            <Text style={s.tokenPrice}>500</Text>
          </View>

          <View style={s.rowBetween}>
            <Text style={s.tokenBalance}>Balance: 250 DAI</Text>
            <Text style={s.tokenBalance}>$499.749</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={s.swapButton}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Swap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 20,
    textAlign: "left",
  },

  swapContainer: {
    width: "100%",
    gap: 10,
    position: "relative",
  },

  tokenBox: {
    width: "100%",
    backgroundColor: "#1A1A24",
    borderRadius: 20,
    padding: 16,
    gap: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tokenButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 24,
  },

  tokenImage: {
    width: 24,
    height: 24,
  },

  tokenName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },

  tokenPrice: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
  },

  tokenBalance: {
    fontSize: 14,
    color: "#A9AAB2",
  },

  arrowSwapButton: {
    position: "absolute",
    top: "42%",
    alignSelf: "center",
    width: 44,
    height: 44,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#1E1E1E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  swapButton: {
    backgroundColor: "#5041ea",
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 15,
  },
});
