import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AssessmentButtonProps {
  points: number;
  title: string;
  img: string;
  screenHeight: number;
  screenWidth: number;
}

export default function AssessmentButton( { points, title, img, screenHeight, screenWidth }: AssessmentButtonProps) {
  return (
    <View style={{
      height: screenHeight * 0.2,
      width: screenWidth * 0.3,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
  }}>
      <TouchableOpacity
          style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          backgroundColor: 'lightgrey',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          onPress={() => console.log(points)}
      >
        <Image source={require("@/assets/images/Convex round.jpeg")} style={{ width: "95%", height: "75%", resizeMode: "cover"}}/>
        <Text style={{ width: "95%", height: "25%", color: 'black', fontSize: 14 * screenWidth/375, textAlign: 'center' }}>{title}</Text>
      </TouchableOpacity>
  </View>
  );
};