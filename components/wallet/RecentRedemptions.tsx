import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import RedemptionItem, { RedemptionData } from './RedemptionItem';

type Props = {
    redemptions?: RedemptionData[];
};

const defaultRedemptions: RedemptionData[] = [
    {
        id: '1',
        merchantName: 'Yebou Cafe',
        date: '02/4/2025',
        offerType: 'B1G1 Offer',
        savedAmount: 23,
        currency: 'QR',
        logoPlaceholder: '☕',
        logoBackgroundColor: '#3D5A80',
    },
    {
        id: '2',
        merchantName: 'Papa Johns',
        date: '02/4/2025',
        offerType: 'B1G1 Offer',
        savedAmount: 23,
        currency: 'QR',
        logoPlaceholder: '🍕',
        logoBackgroundColor: '#C41E3A',
    },
    {
        id: '3',
        merchantName: 'Crispy Pollo',
        date: '02/4/2025',
        offerType: 'B1G1 Offer',
        savedAmount: 23,
        currency: 'QR',
        logoPlaceholder: '🍗',
        logoBackgroundColor: '#8B4513',
    },
];

export default function RecentRedemptions({ redemptions = defaultRedemptions }: Props) {
    const renderItem = ({ item }: { item: RedemptionData }) => (
        <RedemptionItem item={item} />
    );

    const renderSeparator = () => <View style={styles.separator} />;

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Recent Redemptions</Text>
            <FlatList
                data={redemptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={renderSeparator}
                scrollEnabled={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: Typography.metropolis.semiBold,
        color: Colors.light.text,
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    listContent: {
        backgroundColor: '#FFFFFF',
    },
    separator: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginLeft: 84,
    },
});
