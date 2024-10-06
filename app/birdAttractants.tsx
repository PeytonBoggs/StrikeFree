import { Dimensions, Image, Linking, Text, TouchableOpacity, View } from "react-native";

interface birdAttractantsProps {
    setPage: (page: string) => void;
}

export default function birdAttractants({ setPage }: birdAttractantsProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>

            <Image source={require("@/assets/images/bird_bath.webp")} style={{ width: screenWidth * 0.8, height: screenHeight * 0.3, margin: 10, borderWidth: 1, borderColor: "white" }} />

            <Text style={{ fontSize: 24 * screenWidth/375, textAlign: "center", margin: 5 }}>Bird Attractants</Text>

            <Text style={{ width: "80%", fontSize: 14 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>
            Birds are attracted close to windows if there are nearby bird feeders, bird baths, and tall vegetation (e.g., shrubs, bushes, trees). One solution is to ensure 
            that these attractants are either very close to (within 3ft or 1m) or as far away as possible from your windows. If a feeder is very close to a window, 
            birds will be flying slowly if they collide with the glass. Reduce or remove the number of attractants that are within 45ft (10m) of your windows.</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%" }}>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Effectiveness:{"\n"}High
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lightgreen", overflow: "hidden", textAlign: "center" }}>
                Implementation:{"\n"}Easy to Fair
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