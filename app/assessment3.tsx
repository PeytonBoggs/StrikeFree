import { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Assessment1Props {
    setPage: (page: string) => void;
    strikeRiskScore: number;
    setStrikeRiskScore: (score: number) => void;
}

export default function Assessment3({ setPage, strikeRiskScore, setStrikeRiskScore }: Assessment1Props) {
    const [selected, setSelected] = useState([false, false, false]);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    function updateScore() {
        switch (selected.indexOf(true)) {
            case 0:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            case 1:
                setStrikeRiskScore(strikeRiskScore + 2);
                break;
            case 2:
                setStrikeRiskScore(strikeRiskScore + 2);
                break;
            default:
                break;
        }
        setPage("Assessment4");
    }

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, margin: 10 }}>Question 3 of 7</Text>
            <Text style={{ fontSize: 12 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, backgroundColor: "lightgrey", overflow: "hidden", textAlign: "center" }}>What proportion of this side of the building is covered in glass?</Text>

            <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", margin: 10 }}>
                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[0] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([true, false, false])}
                        >
                            <Image source={require("@/assets/images/reflection_weak.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Weak Reflection</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[1] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([false, true, false])}
                        >
                            <Image source={require("@/assets/images/reflection_strong.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Strong Reflection</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", margin: 10 }}>
                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: selected[2] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([false, false, true])}
                        >
                            <Image source={require("@/assets/images/reflection_none.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>No reflection</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: screenHeight * 0.2,
                        width: screenWidth * 0.4,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        flexDirection: "column",
                    }}>
                        <TouchableOpacity
                            style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            backgroundColor: 'lightgrey',
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
            
        </View>
    );
}