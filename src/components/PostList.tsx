import React from 'react';
import { FlatList, RefreshControl, ActivityIndicator, View, StyleSheet } from 'react-native';
import { Post } from '../types/post';
import { PostItem } from './PostItem';
import { EmptyView } from './EmptyView';
import { colors } from '../utils/theme';

interface PostListProps {
  posts: Post[];
  refreshing: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
  isLoadingMore?: boolean;
  onEmptyPress?: () => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  refreshing,
  onRefresh,
  onEndReached,
  isLoadingMore,
  onEmptyPress,
}) => {
  if (posts.length === 0 && !refreshing) {
    return <EmptyView onPress={onEmptyPress} />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostItem post={item} />}
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isLoadingMore ? (
          <View style={styles.loadingMore}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  loadingMore: {
    paddingVertical: 20,
  },
});