import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '../types/post';
import { colors, spacing, typography } from '../utils/theme';

interface PostItemProps {
  post: Post;
}

// Проверка, является ли URL изображением (не видео)
const isImageUrl = (url: string | null | undefined): boolean => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return !lower.endsWith('.webm') && !lower.endsWith('.mp4');
};

// Компонент-заглушка для аватара
const AvatarPlaceholder = () => (
  <View style={styles.avatarPlaceholder}>
    <Ionicons name="person" size={24} color={colors.textSecondary} />
  </View>
);

// Компонент-заглушка для обложки
const CoverPlaceholder = () => (
  <View style={styles.coverPlaceholder}>
    <Ionicons name="image-outline" size={40} color={colors.textSecondary} />
  </View>
);

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const isPaid = post.tier === 'paid';
  const [avatarError, setAvatarError] = useState(false);
  const [coverError, setCoverError] = useState(false);

  const avatarUrl = isImageUrl(post.author.avatarUrl) ? post.author.avatarUrl : null;
  const coverUrl = isImageUrl(post.coverUrl) ? post.coverUrl : null;

  const handleSubscribe = () => {
    // Заглушка для демонстрации
    Alert.alert('Подписка', 'Функционал в разработке');
  };

  return (
    <View style={styles.container}>
      {/* Header с автором */}
      <View style={styles.header}>
        {avatarUrl && !avatarError ? (
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatar}
            onError={() => setAvatarError(true)}
          />
        ) : (
          <AvatarPlaceholder />
        )}
        <View style={styles.authorInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.displayName}>{post.author.displayName}</Text>
            {post.author.isVerified && (
              <Ionicons name="checkmark-circle" size={16} color={colors.verified} style={styles.verifiedIcon} />
            )}
          </View>
          <Text style={styles.username}>@{post.author.username}</Text>
        </View>
      </View>

      {/* Заголовок поста */}
      <Text style={styles.title}>{post.title}</Text>

      {/* Обложка (если есть) */}
      {post.coverUrl && (
        coverUrl && !coverError ? (
          <Image
            source={{ uri: coverUrl }}
            style={styles.cover}
            onError={() => setCoverError(true)}
          />
        ) : (
          <CoverPlaceholder />
        )
      )}

      {/* Контент: превью или платная заглушка */}
      <View style={styles.content}>
        {isPaid ? (
          <View style={styles.paidContainer}>
            <Text style={styles.paidText}>
              Контент скрыт подписчиком{'\n'}
              Пост откроется после подписки
            </Text>
            <TouchableOpacity style={styles.payButton} onPress={handleSubscribe}>
              <Text style={styles.payButtonText}>Оформить подписку</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.preview} numberOfLines={3}>
            {post.preview}
          </Text>
        )}
      </View>

      {/* Футер со счётчиками */}
      <View style={styles.footer}>
        <View style={styles.stat}>
          <Ionicons name="heart-outline" size={20} color={colors.icon} />
          <Text style={styles.statText}>{post.likesCount}</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.icon} />
          <Text style={styles.statText}>{post.commentsCount}</Text>
        </View>
      </View>
    </View>
  );
};

// Добавленные стили
const styles = StyleSheet.create({
  // ... все предыдущие стили остаются без изменений
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  coverPlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ... остальные стили из вашего кода
  container: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: spacing.md,
  },
  authorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    ...typography.title,
    color: colors.text,
    marginRight: spacing.xs,
  },
  verifiedIcon: {
    marginLeft: 2,
  },
  username: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: 2,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  cover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
  },
  content: {
    marginBottom: spacing.md,
  },
  preview: {
    ...typography.body,
    color: colors.text,
  },
  paidContainer: {
    backgroundColor: colors.paidOverlay,
    borderRadius: 12,
    padding: spacing.lg,
    alignItems: 'center',
  },
  paidText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  payButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
  },
  payButtonText: {
    ...typography.button,
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.xl,
  },
  statText: {
    ...typography.caption,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },
});