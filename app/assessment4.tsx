import { useState } from "react";
import { Dimensions } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Assessment4Props {
    setPage: (page: string) => void;
    strikeRiskScore: number;
    setStrikeRiskScore: (score: number) => void;
}

export default function Assessment4({ setPage, strikeRiskScore, setStrikeRiskScore }: Assessment4Props) {
    const [indoorSelected, setIndoorSelected] = useState([false, false, false, false]);
    const [outdoorSelected, setOutdoorSelected] = useState([false, false, false, false]);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    function updateScore() {
        switch (indoorSelected.indexOf(true)) {
            case 2:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            case 3:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            default:
                break;
        }
        switch (outdoorSelected.indexOf(true)) {
            case 2:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            case 3:
                setStrikeRiskScore(strikeRiskScore + 1);
                break;
            default:
                break;
        }
        setPage("Assessment5");
    }

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "aliceblue",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, margin: 10 }}>Question 4 of 7</Text>
            <Text style={{ fontSize: 12 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, backgroundColor: "lightgrey", overflow: "hidden", textAlign: "center" }}>How much artificial light is there around these windows?</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                <View style={{
                    height: screenHeight * 0.6,
                    width: screenWidth * 0.4,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    <Text style={{fontSize: 14 * screenWidth/375}}>Indoor lighting:</Text>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: indoorSelected[0] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setIndoorSelected([true, false, false, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>None</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: indoorSelected[1] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setIndoorSelected([false, true, false, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>Little</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: indoorSelected[2] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setIndoorSelected([false, false, true, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>Moderate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: indoorSelected[3] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setIndoorSelected([false, false, false, true])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>A Lot</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderWidth: 1, height: screenHeight * 0.5}}></View>

                <View style={{
                    height: screenHeight * 0.6,
                    width: screenWidth * 0.4,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    <Text style={{fontSize: 14 * screenWidth/375}}>Outdoor lighting:</Text>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: outdoorSelected[0] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setOutdoorSelected([true, false, false, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>None</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: outdoorSelected[1] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setOutdoorSelected([false, true, false, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>Little</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: outdoorSelected[2] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setOutdoorSelected([false, false, true, false])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>Moderate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        width: '90%',
                        height: '15%',
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        backgroundColor: outdoorSelected[3] ? 'lightgreen' : 'lightgrey',
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => setOutdoorSelected([false, false, false, true])}
                    >
                        <Text style={{fontSize: 14 * screenWidth/375}}>A Lot</Text>
                    </TouchableOpacity>
                </View>
                    
            </View>
                <View style={{
                        height: screenHeight * 0.1,
                        width: screenWidth * 0.8,
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
    );
}