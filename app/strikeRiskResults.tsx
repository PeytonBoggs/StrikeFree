import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

interface StrikeRiskResultsProps {
    setPage: (page: string) => void;
    strikeRiskScore: number;
}

export default function StrikeRiskResults({ setPage, strikeRiskScore }: StrikeRiskResultsProps) {
    function getRiskColor() {
        if (strikeRiskScore <= 5) {
            return "green";
        } else if (strikeRiskScore <= 10) {
            return "yellow";
        } else if (strikeRiskScore <= 15) {
            return "orange";
        } else if (strikeRiskScore <= 20) {
            return "purple";
        } else {
            return "red";
        }
    }

    function getRiskTitle() {
        if (strikeRiskScore <= 5) {
            return "Little to none";
        } else if (strikeRiskScore <= 10) {
            return "Some";
        } else if (strikeRiskScore <= 15) {
            return "Moderate";
        } else if (strikeRiskScore <= 20) {
            return "High";
        } else {
            return "Severe";
        }
    }

    function getRiskText() {
        if (strikeRiskScore <= 5) {
            return "Your windows pose few risks to birds. Keep enjoying our feathered friends.";
        } else if (strikeRiskScore <= 10) {
            return "Your windows pose some risk to birds. You should consider taking action to help our feathered friends.";
        } else if (strikeRiskScore <= 15) {
            return "It is likely that your windows pose risk to birds. We recommend you take action to help our feathered friends.";
        } else if (strikeRiskScore <= 20) {
            return "It is highly likely that birds are at risk for collision with your windows. Please take action soon to help our feathered friends.";
        } else {
            return "Your windows almost certainly pose a severe risk to birds. Urgent action is required to help our feathered friends.";
        }
    }

    
    const { width: screenWidth } = Dimensions.get("window");
    const { height: screenHeight } = Dimensions.get("window");

    return (
        <View style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
            <Text style={{ fontSize: 24 * screenWidth/375, margin: 10 }}>StrikeRisk Assessment Results</Text>

            <Text style={{ width: "80%", fontSize: 20 * screenWidth/375, margin: 50, padding: 50, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: getRiskColor(), overflow: "hidden", textAlign: "center" }}>StrikeRisk: {getRiskTitle()}</Text>

            <Text style={{ width: "80%", fontSize: 16 * screenWidth/375, margin: 50, padding: 50, borderWidth: 1, borderRadius: 20, borderColor: "white", backgroundColor: "gainsboro", overflow: "hidden", textAlign: "center" }}>{getRiskText()}</Text>

            <Text style={{ fontSize: 14 * screenWidth/375 }}>Reduce this StrikeRisk through BirdSave solutions:</Text>

            <View style={{
                height: screenHeight * 0.2,
                width: screenWidth * 0.8,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                margin: 50,
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
                    <Text style={{ fontSize: 26 * screenWidth/375 }}>View Solutions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}