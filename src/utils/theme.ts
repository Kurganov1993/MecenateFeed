export const colors = {
  primary: '#6C5CE7',       // фиолетовый акцент
  background: '#FFFFFF',
  surface: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#8E8E93',
  error: '#FF3B30',
  border: '#F0F0F0',
  paidOverlay: '#F2F2F7',
  verified: '#6C5CE7',
  icon: '#8E8E93',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const typography = {
  title: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 13,
    fontWeight: '400' as const,
    lineHeight: 18,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  button: {
    fontSize: 15,
    fontWeight: '600' as const,
  },
};