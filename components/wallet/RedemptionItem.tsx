import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';

export type RedemptionData = {
    id: string;
    merchantName: string;
    date: string;
    offerType: string;
    savedAmount: number;
    currency: string;
    logoPlaceholder?: string;
    logoBackgroundColor?: string;
};

type Props = {
    item: RedemptionData;
};

export default function RedemptionItem({ item }: Props) {
    return (
        <View style={styles.container}>
            {/* Merchant Logo */}
            <View style={[
                styles.logoContainer,
                { backgroundColor: item.logoBackgroundColor || '#F5F5F5' }
            ]}>
                <Text style={styles.logoText}>
                    {item.logoPlaceholder || item.merchantName.substring(0, 2).toUpperCase()}
                </Text>
            </View>

            {/* Merchant Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.merchantName}>{item.merchantName}</Text>
                <Text style={styles.offerType}>{item.offerType}</Text>
            </View>

            {/* Saved Amount */}
            <View style={styles.savedContainer}>
                <Text style={styles.savedLabel}>est. saved</Text>
                <Text style={styles.savedAmount}>
                    {item.savedAmount} {item.currency}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    logoText: {
        fontSize: 12,
        fontFamily: Typography.metropolis.semiBold,
        color: '#FFFFFF',
    },
    infoContainer: {
        flex: 1,
    },
    dateText: {
        fontSize: 11,
        fontFamily: Typography.metropolis.medium,
        color: '#999999',
        marginBottom: 2,
    },
    merchantName: {
        fontSize: 16,
        fontFamily: Typography.metropolis.semiBold,
        color: Colors.light.text,
        marginBottom: 2,
    },
    offerType: {
        fontSize: 12,
        fontFamily: Typography.metropolis.medium,
        color: '#666666',
    },
    savedContainer: {
        alignItems: 'flex-end',
    },
    savedLabel: {
        fontSize: 11,
        fontFamily: Typography.metropolis.medium,
        color: '#999999',
        marginBottom: 2,
    },
    savedAmount: {
        fontSize: 18,
        fontFamily: Typography.metropolis.semiBold,
        color: Colors.brandGreen,
    },
});
