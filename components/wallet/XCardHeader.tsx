import { StyleSheet, Text, View } from 'react-native';
import { Typography } from '../../constants/Typography';

export default function XCardHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleX}>X</Text>
            <Text style={styles.titleCard}>CARD</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
    },
    titleX: {
        fontSize: 28,
        fontFamily: Typography.integral.bold,
        color: '#18B852',
    },
    titleCard: {
        fontSize: 28,
        fontFamily: Typography.integral.bold,
        color: '#000000',
    },
});
