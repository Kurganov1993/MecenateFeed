import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../utils/theme';

interface EmptyViewProps {
  message?: string;
  buttonText?: string;
  onPress?: () => void;
}

export const EmptyView: React.FC<EmptyViewProps> = ({
  message = 'По вашему запросу ничего не найдено',
  buttonText = 'На главную',
  onPress,
}) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
    {onPress && (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.background,
  },
  message: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 10,
    minWidth: 160,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.button,
    color: '#FFFFFF',
  },
});