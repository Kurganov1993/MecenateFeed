import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { fetchPosts } from '../api/posts';
import { PostList } from '../components/PostList';
import { ErrorView } from '../components/ErrorView';
import { LoadingView } from '../components/LoadingView';
import { colors } from '../utils/theme';
import { uiStore } from '../stores/ui.store';

export const FeedScreen = observer(() => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam, limit: 10 }),
    initialPageParam: undefined as string | undefined | null,
    getNextPageParam: (lastPage) => lastPage.data.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.data.posts) ?? [];

  const handleRefresh = async () => {
    uiStore.setRefreshing(true);
    await refetch();
    uiStore.setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleEmptyPress = () => {
    // Здесь можно перейти на главный экран или обновить
    refetch();
  };

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return (
      <ErrorView
        message="Не удалось загрузить публикации"
        onRetry={refetch}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <PostList
        posts={posts}
        refreshing={isRefetching || uiStore.isRefreshingManually}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        isLoadingMore={isFetchingNextPage}
        onEmptyPress={handleEmptyPress}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});