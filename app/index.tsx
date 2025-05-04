import { Text, View } from "react-native";



export default function Index() {
    const a = (function*() {
      return 1
    }).constructor
    const b = (function*(arg: any) {
      return arg
    }).constructor
    const c = (function*({ arg }: any) {
      return arg
    }).constructor
    console.log('a === b: ' + (a === b ? 'true' : 'false'))
    console.log('a === c: ' + (a === c ? 'true' : 'false'))
    console.log('b === c: ' + (b === c ? 'true' : 'false'))
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}