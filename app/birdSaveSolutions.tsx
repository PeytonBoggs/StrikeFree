import { Dimensions, Text, TouchableOpacity, View } from "react-native";

interface BirdSaveSolutionsProps {
    setPage: (page: string) => void;
}

export default function BirdSaveSolutions({ setPage }: BirdSaveSolutionsProps) {
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 5 }}>BirdSave Solutions</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, textAlign: "center", margin: 10 }}>Select the solution you would like to learn more about:</Text>

            <View style={{
                height: screenHeight * 0.1,
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
                    onPress={() => setPage("WindowExterior")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Window Exterior</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: screenHeight * 0.1,
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
                    onPress={() => setPage("WindowInterior")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Window Interior</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: screenHeight * 0.1,
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
                    onPress={() => setPage("InteriorLighting")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Interior Lighting</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: screenHeight * 0.1,
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
                    onPress={() => setPage("ExteriorLighting")}
                >
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Exterior Lighting</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: screenHeight * 0.1,
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
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>Bird Attractants</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}