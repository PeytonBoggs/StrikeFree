import { Dimensions, Image, Linking, Text, TouchableOpacity, View } from "react-native";

interface WindowInteriorPaintsProps {
    setPage: (page: string) => void;
}

export default function WindowInteriorPaints({ setPage }: WindowInteriorPaintsProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>

            <Image source={require("@/assets/images/Interior paint.jpg")} style={{ width: screenWidth * 0.8, height: screenHeight * 0.3, margin: 10, borderWidth: 1, borderColor: "white" }} />

            <Text style={{ fontSize: 24 * screenWidth/375, textAlign: "center", margin: 5 }}>Interior Window Paints</Text>

            <Text style={{ width: "80%", fontSize: 14 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>
            Washable (e.g., tempera) paint, dry erase markers, and even soap smears can be applied to the interior surface of glass to make the pane appear non-transparent to birds. 
            This can be an effective solution for glass walkways where the markings prevent birds from seeing through glass panes to the outside world on the other side of the walkway.</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%" }}>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lemonchiffon", overflow: "hidden", textAlign: "center" }}>
                Effectiveness:{"\n"}Mid to Low
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Implementation:{"\n"}Mid to High
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Cost:{"\n"}Low to Mid
                </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%", margin: 10 }}>
                <Text style={{ fontSize: 10 * screenWidth/375 }}>
                    Further reading:
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://flap.org/stop-birds-from-hitting-windows/')}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 10 * screenWidth/375 }}>
                    flap.org
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://abcbirds.org/solutions/prevent-home-collisions/')}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 10 * screenWidth/375 }}>
                    abcbirds.org
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: screenHeight * 0.08,
                width: screenWidth * 0.8,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}>
                <TouchableOpacity
                    style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    backgroundColor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    onPress={() => setPage("BirdSaveSolutions")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Return to Solutions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}