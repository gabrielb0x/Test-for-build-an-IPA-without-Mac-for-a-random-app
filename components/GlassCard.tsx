import { GlassView, isGlassEffectAPIAvailable, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { APP_CONFIG, type GlassCardConfig } from '../config/appConfig';

type Props = {
  card: GlassCardConfig;
};

const LIQUID_GLASS_ENABLED = isLiquidGlassAvailable();
const GLASS_API_ENABLED = isGlassEffectAPIAvailable();

export function GlassCard({ card }: Props) {
  const { glassCard } = APP_CONFIG.ui;
  const shouldUseInteractiveGlass = glassCard.interactive && LIQUID_GLASS_ENABLED && GLASS_API_ENABLED;

  return (
    <Pressable style={styles.pressable}>
      <GlassView
        isInteractive={shouldUseInteractiveGlass}
        colorScheme={glassCard.colorScheme}
        tintColor={glassCard.tintColor}
        glassEffectStyle={glassCard.style}
        style={styles.glassLayer}
      />

      <View style={styles.contentLayer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{card.title}</Text>
          <View style={[styles.dot, { backgroundColor: card.dotColor }]} />
        </View>
        <Text style={styles.description}>{card.description}</Text>
      </View>
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
    minHeight: 118,
  },
  glassLayer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  contentLayer: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.24)',
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
