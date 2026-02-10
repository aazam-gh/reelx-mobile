import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';

type Props = {
    title: string;
    icon?: string | ImageSourcePropType;
    onBackPress?: () => void;
};

export default function CategoryHeader({ title, icon = '🍽️', onBackPress }: Props) {
    const isEmoji = typeof icon === 'string';

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onBackPress}
                activeOpacity={0.7}
            >
                <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                {isEmoji ? (
                    <Text style={styles.icon}>{icon}</Text>
                ) : (
                    <Image source={icon} style={styles.imageIcon} resizeMode="contain" />
                )}
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    icon: {
        fontSize: 24,
    },
    title: {
        fontSize: 22,
        fontFamily: Typography.metropolis.semiBold,
        color: Colors.light.text,
    },
    imageIcon: {
        width: 40,
        height: 40,
    },
});
