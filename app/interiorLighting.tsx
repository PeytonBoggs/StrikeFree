import { Dimensions, Image, Linking, Text, TouchableOpacity, View } from "react-native";

interface interiorLightingProps {
    setPage: (page: string) => void;
}

export default function interiorLighting({ setPage }: interiorLightingProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>

            <Image source={require("@/assets/images/Interior lighting.avif")} style={{ width: screenWidth * 0.8, height: screenHeight * 0.3, margin: 10, borderWidth: 1, borderColor: "white" }} />

            <Text style={{ fontSize: 24 * screenWidth/375, textAlign: "center", margin: 5 }}>Interior Lighting</Text>

            <Text style={{ width: "80%", fontSize: 14 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>
            Birds are often attracted to artifical light at night, which can increase the chances of collision. One solution is to install light-blocking (blackout) 
            curtains and close them when it is dark outside. Another is to put interior lighting on timers so that they are not illuminated during the night and just before dawn, 
            when birds are particularly active. This latter solution might save you money on utility bills in the longer term.</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%" }}>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lemonchiffon", overflow: "hidden", textAlign: "center" }}>
                Effectiveness:{"\n"}Fair
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Implementation:{"\n"}Easy
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Cost:{"\n"}Low
                </Text>
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