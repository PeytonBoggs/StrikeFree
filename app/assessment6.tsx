import { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface Assessment6Props {
    setPage: (page: string) => void;
    strikeRiskScore: number;
    setStrikeRiskScore: (score: number) => void;
}

export default function Assessment6({ setPage, strikeRiskScore, setStrikeRiskScore }: Assessment6Props) {
    const [selected, setSelected] = useState([false, false, false, false]);

    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    function updateScore() {
        switch (selected.indexOf(true)) {
            case 0:
                setStrikeRiskScore(strikeRiskScore + 1);
            case 1:
                setStrikeRiskScore(strikeRiskScore + 1);
            case 2:
                setStrikeRiskScore(strikeRiskScore + 1);
            case 3:
                setStrikeRiskScore(strikeRiskScore + 1);
            default:
                break;
        }
        setPage("Assessment7");
    }

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "aliceblue",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment</Text>
            <Text style={{ fontSize: 18 * screenWidth/375, margin: 10 }}>Question 6 of 7</Text>
            <Text style={{ fontSize: 12 * screenWidth/375, margin: 10, padding: 10, borderWidth: 1, borderRadius: 20, backgroundColor: "lightgrey", overflow: "hidden", textAlign: "center" }}>What bird attractants are in the area (select all that apply)?</Text>

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
                            onPress={() => setSelected([!selected[0], selected[1], selected[2], selected[3]])}
                        >
                            <Image source={require("@/assets/images/tall_vegetation.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Tall Vegetation</Text>
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
                            onPress={() => setSelected([selected[0], !selected[1], selected[2], selected[3]])}
                        >
                            <Image source={require("@/assets/images/birdfeeder.jpg")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Bird Feeder</Text>
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
                            onPress={() => setSelected([selected[0], selected[1], !selected[2], selected[3]])}
                        >
                            <Image source={require("@/assets/images/bird_bath.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Bird Bath</Text>
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
                            backgroundColor: selected[3] ? 'lightgreen' : 'lightgrey',
                            alignItems: "center",
                            }}
                            onPress={() => setSelected([selected[0], selected[1], selected[2], !selected[3]])}
                        >
                            <Image source={require("@/assets/images/nest_box.webp")} style={{ width: "95%", height: "75%", resizeMode: "cover", margin: 5}}/>
                            <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>Nest Boxes</Text>
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