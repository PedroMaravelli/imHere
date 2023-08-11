import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface ParticipantsProps {
    name: string;
    onRemove: ()=> void;
}

export function Particpant({ name, onRemove} : ParticipantsProps){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )
}