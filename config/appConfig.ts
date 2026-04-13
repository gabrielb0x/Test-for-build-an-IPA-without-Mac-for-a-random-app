export const APP_CONFIG = {
  title: 'Liquid Glass Lab',
  subtitle: 'Expo + React Native test focused on iOS glass UI',
  glassCards: [
    {
      id: 'frost-panel',
      title: 'Frost Panel',
      description: 'Blur + gradient + border stack for translucent layers.',
    },
    {
      id: 'floating-chip',
      title: 'Floating Chip',
      description: 'Compact rounded component for notifications and states.',
    },
    {
      id: 'depth-buttons',
      title: 'Depth Buttons',
      description: 'Interactive buttons with glow and transparency states.',
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
