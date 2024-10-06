import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

interface WindowInteriorProps {
    setPage: (page: string) => void;
}

export default function WindowInterior({ setPage }: WindowInteriorProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>

            <Image source={require("@/assets/images/Interior decals.jpg")} style={{ width: screenWidth * 0.8, height: screenHeight * 0.3, margin: 10, borderWidth: 1, borderColor: "white" }} />

            <Text style={{ fontSize: 24 * screenWidth/375, textAlign: "center", margin: 5 }}>Window Interior</Text>

            <Text style={{ width: "80%", fontSize: 14 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>
            In the rare situations where birds can see all the way through the glass and back to the outside world (e.g. a glass cornered building, or a glass walkway), 
            altering the internal surface of the glass can help to reduce collisions.
            
            Click on a solution to learn more.</Text>

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
                    onPress={() => setPage("WindowInteriorFilms")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Window Films</Text>
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
                    onPress={() => setPage("WindowInteriorTapes")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Tapes and Decals</Text>
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
                    onPress={() => setPage("WindowInteriorCords")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Paints and Markings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}