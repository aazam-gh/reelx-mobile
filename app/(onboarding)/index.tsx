import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
    const router = useRouter();

    const handleGetStarted = () => {
        // Navigate to the tabs layout
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <Text style={styles.title}>StudentSaver</Text>
                <Text style={styles.subtitle}>Exclusive discounts for students</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/onboarding.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGetStarted}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    header: {
        alignItems: 'center',
        marginTop: 60,
    },
    title: {
        fontSize: 42,
        fontWeight: '800',
        letterSpacing: -0.5,
        color: '#000000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
        fontWeight: '400',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: width * 0.85,
        height: width * 0.85,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#E60000', // Replicating the red from the image
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#E60000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
});
