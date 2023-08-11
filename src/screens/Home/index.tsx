import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";
import { Particpant } from "../../components/Participant";
import { useState } from "react";

export function Home (){
const [participants, setParticipants] = useState<string[]>([])
const [participantName, setParticipantName] = useState('')




    function handleParticipantAdd (){
        if(participants.includes(participantName)){
            Alert.alert('Participante existe', 'Já existe um participante com este nome')
            return setParticipantName('')

        }
        setParticipants([...participants, participantName])
        setParticipantName('')
    }
    function handleParticipantRemove (name: string){
        
        Alert.alert('Remover', `Deseja remover o participante ${name}?`,[
            {
                text:'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text:'Não',
                style:'cancel',
            }

        ])
        
    }



    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.form} >
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity  style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => {
                return(
                    <Particpant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
                )
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
                return(
                    
                        <Text style={styles.emptyText}>
                            Não há participantes ainda, adicione participantes a sua lista.
                        </Text>
                    
                )
            }}
            />
            

            
            
    </View>
        
    )
}