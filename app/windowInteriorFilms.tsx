import { Dimensions, Image, Linking, Text, TouchableOpacity, View } from "react-native";

interface WindowInteriorFilmsProps {
    setPage: (page: string) => void;
}

export default function WindowInteriorFilms({ setPage }: WindowInteriorFilmsProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>

            <Image source={require("@/assets/images/Interior film.jpg")} style={{ width: screenWidth * 0.8, height: screenHeight * 0.3, margin: 10, borderWidth: 1, borderColor: "white" }} />

            <Text style={{ fontSize: 24 * screenWidth/375, textAlign: "center", margin: 5 }}>Interior Window Films</Text>

            <Text style={{ width: "80%", fontSize: 14 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>
            These are large semi-transparent sheets that stick to the entire interior surface of glass. They often have to be installed professionally. They must have elements 
            that are clearly visible to birds, which include high contrast black/white, colors, and ultraviolet (which are visible to many birds but not people) patterns. 
            They contain visible elements that are spaced no more than 2 inches (6 cm) apart.</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "80%" }}>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lemonchiffon", overflow: "hidden", textAlign: "center" }}>
                Effectiveness:{"\n"}Fair
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lemonchiffon", overflow: "hidden", textAlign: "center" }}>
                Implementation:{"\n"}Fair
                </Text>
                <Text style={{ width: "33%", height: "90%", fontSize: 10 * screenWidth/375, margin: 5, marginHorizontal: 10, padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "white", backgroundColor: "lemonchiffon", overflow: "hidden", textAlign: "center" }}>
                Cost:{"\n"}Fair
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
                <TouchableOpacity onPress={() => Linking.openURL('https://www.featherfriendly.com/')}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 10 * screenWidth/375 }}>
                    featherfriendly.com
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