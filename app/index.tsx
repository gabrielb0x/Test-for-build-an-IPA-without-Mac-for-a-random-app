import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlassCard } from '../components/GlassCard';
import { APP_CONFIG } from '../config/appConfig';

export default function HomeScreen() {
  const runtimeVersionConfig = Constants.expoConfig?.runtimeVersion;
  const runtimeVersion =
    typeof runtimeVersionConfig === 'string'
      ? runtimeVersionConfig
      : runtimeVersionConfig
        ? JSON.stringify(runtimeVersionConfig)
        : 'not-set';

  return (
    <LinearGradient
      colors={['#071226', '#0C2446', '#1A4B73']}
      start={{ x: 0.05, y: 0.05 }}
      end={{ x: 0.95, y: 0.95 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.tag}>iOS-focused sandbox</Text>
          <Text style={styles.title}>{APP_CONFIG.title}</Text>
          <Text style={styles.subtitle}>{APP_CONFIG.subtitle}</Text>

          <View style={styles.cardsWrap}>
            {APP_CONFIG.glassCards.map((card) => (
              <GlassCard key={card.id} card={card} />
            ))}
          </View>

          <View style={styles.metaBox}>
            <Text style={styles.metaTitle}>Build pipeline</Text>
            <Text style={styles.metaText}>{APP_CONFIG.buildInfo.ciName}</Text>
            <Text style={styles.metaText}>iOS profile: {APP_CONFIG.buildInfo.iosProfile}</Text>
            <Text style={styles.metaText}>Android profile: {APP_CONFIG.buildInfo.androidProfile}</Text>
            <Text style={styles.metaText}>Runtime version: {runtimeVersion}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 48,
  },
  tag: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    letterSpacing: 0.6,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 38,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.86)',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },
  cardsWrap: {
    marginTop: 24,
  },
  metaBox: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 8,
    padding: 16,
  },
  metaTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  metaText: {
    color: 'rgba(255,255,255,0.86)',
    fontSize: 13,
    marginBottom: 4,
  },
});
