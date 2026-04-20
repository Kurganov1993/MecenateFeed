import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../utils/theme';

interface ErrorViewProps {
  message?: string;
  onRetry: () => void;
}

export const ErrorView: React.FC<ErrorViewProps> = ({
  message = 'Не удалось загрузить публикации',
  onRetry,
}) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
    <TouchableOpacity style={styles.button} onPress={onRetry}>
      <Text style={styles.buttonText}>Повторить</Text>
    </TouchableOpacity>
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
    color: colors.text,
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