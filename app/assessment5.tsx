import { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Assessment5Props {
    setPage: (page: string) => void;
    strikeRiskScore: number;
    setStrikeRiskScore: (score: number) => void;
}

export default function Assessment5({ setPage, strikeRiskScore, setStrikeRiskScore }: Assessment5Props) {
    const [selected, setSelected] = useState([false, false, false, false]);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    function updateScore() {
        switch (selected.indexOf(true)) {
            case 0:
                setStrikeRiskScore(strikeRiskScore + 0);
                break;
            case 1:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            case 2:
                setStrikeRiskScore(strikeRiskScore + 2);
                break;
            case 3:
                setStrikeRiskScore(strikeRiskScore + 3);
                break;
            default:
                break;
        }
        setPage("Assessment6");
    }

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, margin: 10 }}>Question 5 of 7</Text>
            <Text style={{ fontSize: 12 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderColor: "white", borderRadius: 20, backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>How many birds do you typically see in the area each day?</Text>

            <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", margin: 10 }}>
                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[0] ? 'lightgreen' : 'gainsboro',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([true, false, false, false])}
                        >
                            <Image source={require("@/assets/images/no_birds.jpg")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>None</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[1] ? 'lightgreen' : 'gainsboro',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([false, true, false, false])}
                        >
                            <Image source={require("@/assets/images/few_birds.jpg")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Few (1-5 birds)</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", margin: 10 }}>
                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[2] ? 'lightgreen' : 'gainsboro',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([false, false, true, false])}
                        >
                            <Image source={require("@/assets/images/many_birds.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Many (5-20 birds)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[3] ? 'lightgreen' : 'gainsboro',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([false, false, false, true])}
                        >
                            <Image source={require("@/assets/images/lots_of_birds.png")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Lots (20+ birds)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
                        borderWidth: 1,
                        borderColor: "white",
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
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Next</Text>
                        </TouchableOpacity>
                </View>

            </View>
            
        </View>
    );
}