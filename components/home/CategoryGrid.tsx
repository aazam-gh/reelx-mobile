import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';

type CategoryItem = {
    id: string;
    name: string;
    image: any;
};

type Props = {
    categories?: CategoryItem[];
    onCategoryPress?: (category: CategoryItem) => void;
};

const defaultCategories: CategoryItem[] = [
    { id: 'coffee', name: 'Coffee', image: require('../../assets/images/coffee.png') },
    { id: 'food', name: 'Food', image: require('../../assets/images/food.png') },
    { id: 'grocery', name: 'Grocery', image: require('../../assets/images/grocery.png') },
    { id: 'pharma', name: 'Pharma', image: require('../../assets/images/pharma.png') },
    { id: 'entertainer', name: 'Entertainer', image: require('../../assets/images/entertainer.png') },
    { id: 'books', name: 'Books', image: require('../../assets/images/books.png') },
    { id: 'electronics', name: 'Electronics', image: require('../../assets/images/electronics.png') },
    { id: 'see-more', name: 'See More', image: require('../../assets/images/see-more.png') },
];

export default function CategoryGrid({ categories = defaultCategories, onCategoryPress }: Props) {
    const router = useRouter();

    const handleCategoryPress = (item: CategoryItem) => {
        if (onCategoryPress) {
            onCategoryPress(item);
        } else if (item.id !== 'see-more') {
            router.push(`/category/${item.id}`);
        }
    };

    const renderCategory = ({ item }: { item: CategoryItem }) => (
        <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => handleCategoryPress(item)}
            activeOpacity={0.7}
        >
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={4}
                scrollEnabled={false}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    row: {
        justifyContent: 'center',
        marginBottom: 16,
    },
    categoryItem: {
        alignItems: 'center',
        width: '23%',
    },
    imageContainer: {
        marginBottom: 8,
    },
    categoryImage: {
        width: 80,
        height: 80,
    },
    categoryName: {
        fontSize: 12,
        fontFamily: Typography.metropolis.medium,
        color: Colors.light.text,
        textAlign: 'center',
    },
});
