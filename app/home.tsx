import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

interface HomeProps {
    setPage: (page: string) => void;
}

export default function Home({ setPage }: HomeProps) {
    const [strikeRiskScore, setStrikeRiskScore] = useState(0);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 50 }}>
                <Text style={{ fontSize: 36 * screenWidth/375 }}>StrikeFree</Text>
                <Image source={require('@/assets/images/bird.png')} style={{ width: screenWidth * 0.1, height: screenWidth * 0.1, aspectRatio: 1 }} />
            </View>

            <View style={{
                flex: 1,
                height: screenHeight * 0.2,
                width: screenWidth * 0.8,
                margin: 50,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
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
                    onPress={() => setPage("Assessment1")}
                >
                    <Text style={{ fontSize: 36 * screenWidth/375, textAlign: "center" }}>StrikeRisk Assessment</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                height: screenHeight * 0.2,
                width: screenWidth * 0.8,
                margin: 50,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
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
                    <Text style={{ fontSize: 36 * screenWidth/375, textAlign: "center" }}>Browse BirdSave Solutions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}