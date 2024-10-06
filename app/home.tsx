import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

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
            <View style={{
                height: screenHeight * 0.2,
                width: screenWidth * 0.8,
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
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>StrikeRisk Assessment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}