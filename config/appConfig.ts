export const APP_CONFIG = {
  title: 'Liquid Glass Lab',
  subtitle: 'Expo + React Native test focused on iOS glass UI',
  ui: {
    glassCard: {
      style: 'regular',
      tintColor: 'rgba(255,255,255,0.12)',
      colorScheme: 'auto',
      interactive: false,
    },
    gradients: {
      background: ['#071226', '#0C2446', '#1A4B73'],
      start: { x: 0.05, y: 0.05 },
      end: { x: 0.95, y: 0.95 },
    },
  },
  glassCards: [
    {
      id: 'frost-panel',
      title: 'Frost Panel',
      description: 'Native GlassView panel with configurable style and tint.',
      dotColor: '#74F4FF',
    },
    {
      id: 'floating-chip',
      title: 'Floating Chip',
      description: 'Real iOS liquid glass, no blur simulation layers.',
      dotColor: '#7AB6FF',
    },
    {
      id: 'depth-buttons',
      title: 'Depth Buttons',
      description: 'Use appConfig values to quickly tune visual behavior.',
      dotColor: '#B7A6FF',
    },
  ],
  accentColors: {
    cyan: '#74F4FF',
    blue: '#7AB6FF',
    violet: '#B7A6FF',
  },
  buildInfo: {
    ciName: 'EAS Cloud Build via GitHub Actions',
    iosProfile: 'production',
    androidProfile: 'preview',
  },
} as const;

export type GlassCardConfig = (typeof APP_CONFIG.glassCards)[number];
