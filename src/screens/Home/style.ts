import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        gap: 10,
      },
      eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      },
      eventDate: {
        color: '#6B6B6B',
        fontSize: 16
      },
      input: {
        height: 56,
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 24,
      },
      button:{
        height: 56,
        width: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        color: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      form:{
        width: '100%',
        gap: 12,
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
      },
      emptyText:{
        color:'#6B6B6B',
        fontSize:18,
        textAlign:'center'

      }


    
});