import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  HelpLink,
  HowItWorksDrawer,
  RecentRedemptions,
  SpendButton,
  XCard,
  XCardHeader,
} from '../../components/wallet';

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const [isHelpDrawerVisible, setIsHelpDrawerVisible] = useState(false);

  const handleSpendPress = () => {
    // TODO: Implement spend functionality
    console.log('Spend card pressed');
  };

  const handleHelpPress = () => {
    setIsHelpDrawerVisible(true);
  };

  const handleHelpDrawerClose = () => {
    setIsHelpDrawerVisible(false);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <XCardHeader />
        <XCard earnings={26} currency="QAR" />
        <SpendButton onPress={handleSpendPress} />
        <HelpLink onPress={handleHelpPress} />
        <RecentRedemptions />
      </ScrollView>

      <HowItWorksDrawer
        visible={isHelpDrawerVisible}
        onClose={handleHelpDrawerClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
});
