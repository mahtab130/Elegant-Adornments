import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  getAllBlogs,
  getAllCategories,
  getAllComments,
  getAllFaqs,
  getAllProducts,
  getAllUsers,
  getBlogById,
  getCategoryById,
  getCommentById,
  getFaqById,
  getProductById,
  getUserById,
  loginUser,
} from "../configs/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => undefined,
    onError: (err) => console.log("Login failed" + err),
  });
};

export const useBlogSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["blogs-search", filters],
    queryFn: () => getAllBlogs(filters),
    placeholderData: (prev: TAny) => prev,
    enabled: true,
  });
};
export const useGetBlogById = (id?: string) => {
  return useQuery({
    queryKey: ["blog-get", id],
    queryFn: async () => (id ? await getBlogById(id!) : {}),
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Users) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users-search"],
      });
    },
  });
};
export const useCategoriesSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["categories-search", filters],
    queryFn: () => getAllCategories(filters),
    placeholderData: (prev: TAny) => prev,
    enabled: true,
  });
};

// Get category by id
export const useGetCategoryById = (id?: string) => {
  return useQuery({
    queryKey: ["category-get", id],
    queryFn: async () => (id ? await getCategoryById(id!) : {}),
  });
};

export const useCommentSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["comments-search", filters],
    queryFn: () => getAllComments(filters),
    placeholderData: (prev: TAny) => prev,
    enabled: true,
  });
};

// Get comment by id
export const useGetCommentById = (id?: string) => {
  return useQuery({
    queryKey: ["comment-get", id],
    queryFn: async () => (id ? await getCommentById(id!) : {}),
  });
};

export const useFaqSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["faqs-search", filters],
    queryFn: () => getAllFaqs(filters),
    placeholderData: (prev: TAny) => prev,
    enabled: true,
  });
};

// Get faq by id
export const useGetFaqById = (id?: string) => {
  return useQuery({
    queryKey: ["faq-get", id],
    queryFn: async () => (id ? await getFaqById(id!) : {}),
  });
};

export const useProductSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["products-search", filters],
    queryFn: () => getAllProducts(filters),
    placeholderData: (prev: TAny) => prev,
  });
};

// Get product by id
export const useGetProductById = (id?: string) => {
  return useQuery({
    queryKey: ["product-get", id],
    queryFn: async () => (id ? await getProductById(id!) : {}),
  });
};

export const useUserSearch = (filters?: { search?: string }) => {
  return useQuery({
    queryKey: ["users-search", filters],
    queryFn: () => getAllUsers(filters),
    placeholderData: (prev: TAny) => prev,
    enabled: true,
    staleTime: 1000 * 60,
  });
};

// Get user by id
export const useGetUserById = (id?: string) => {
  return useQuery({
    queryKey: ["user-get", id],
    queryFn: async () => (id ? await getUserById(id!) : {}),
  });
};
