import { apiClient } from './client';
import { PostsResponse } from '../types/post';

interface FetchPostsParams {
  cursor?: string | null;
  limit?: number;
  tier?: 'free' | 'paid';
}

export const fetchPosts = async ({
  cursor,
  limit = 10,
  tier,
}: FetchPostsParams): Promise<PostsResponse> => {
  const params: Record<string, string | number | undefined> = {
    limit,
    cursor: cursor || undefined,
    tier,
  };
  Object.keys(params).forEach(
    (key) => params[key] === undefined && delete params[key]
  );

  const response = await apiClient.get<PostsResponse>('/posts', { params });
  return response.data;
};