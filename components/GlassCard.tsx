import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { GlassCardConfig } from '../config/appConfig';

type Props = {
  card: GlassCardConfig;
};

export function GlassCard({ card }: Props) {
  return (
    <Pressable style={styles.pressable}>
      <BlurView intensity={70} tint="light" style={styles.blurWrap}>
        <LinearGradient
          colors={['rgba(255,255,255,0.36)', 'rgba(255,255,255,0.08)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientLayer}
        >
          <View style={styles.headerRow}>
            <Text style={styles.title}>{card.title}</Text>
            <View style={styles.dot} />
          </View>
          <Text style={styles.description}>{card.description}</Text>
        </LinearGradient>
      </BlurView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#7AB6FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 5,
  },
  blurWrap: {
    borderRadius: 24,
  },
  gradientLayer: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
    padding: 18,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  dot: {
    backgroundColor: '#74F4FF',
    borderRadius: 100,
    height: 10,
    width: 10,
  },
  description: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
});
