import { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Assessment7Props {
    setPage: (page: string) => void;
    strikeRiskScore: number;
    setStrikeRiskScore: (score: number) => void;
}

export default function Assessmen7({ setPage, strikeRiskScore, setStrikeRiskScore }: Assessment7Props) {
    const [selected, setSelected] = useState([false, false, false]);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    function updateScore() {
        switch (selected.indexOf(true)) {
            case 0:
                break;
            case 1:
                setStrikeRiskScore(strikeRiskScore + 3);
                break;
            case 2:
                setStrikeRiskScore(strikeRiskScore + 5);
                break;
            default:
                break;
        }
        setPage("StrikeRiskResults");
    }

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "aliceblue",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, margin: 10 }}>Question 7 of 7</Text>
            <Text style={{ fontSize: 12 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, backgroundColor: "lightgrey", overflow: "hidden", textAlign: "center" }}>Have you noticed a bird collision here before?</Text>

            <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
            <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "column",
                        margin: 10,
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[0] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            justifyContent: "center",
                            }}
                            onPress={() => setSelected([true, false, false])}
                        >
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>No, I have not noticed a collision</Text>
                        </TouchableOpacity>
                </View>

                <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "column",
                        margin: 10,
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[1] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            justifyContent: "center",
                            }}
                            onPress={() => setSelected([false, true, false])}
                        >
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Rarely, but I have noticed a collision</Text>
                        </TouchableOpacity>
                </View>

                <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "column",
                        margin: 10,
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[2] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            justifyContent: "center",
                            }}
                            onPress={() => setSelected([false, false, true])}
                        >
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Yes, I have noticed collisions</Text>
                        </TouchableOpacity>
                </View>

                <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "column",
                        margin: 10,
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: 'lightblue',
                            alignItems: "center",
                            justifyContent: "center",
                            }}
                            onPress={() => updateScore()}
                        >
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>See my results</Text>
                        </TouchableOpacity>
                </View>

            </View>
            
        </View>
    );
}