import apiClient from "./apiClient";

export const loginUser = async ({ email, userName, password }: TAny) =>
  apiClient.post("/login", { email, userName, password });

// users
export const getAllUsers = (params?: { search?: string }) =>
  apiClient.get("/users", { params }).then((res) => res.data);

export const getUserById = (id: string) => apiClient.get(`users/${id}`);

export const createUser = (data: Users) => apiClient.post("/users", data);

export const updateUser = (id: string, data: Users) =>
  apiClient.put(`/users/${id}`, data);

// products
export const getAllProducts = (params?: { search?: string }) =>
  apiClient.get("/products", { params }).then((res) => res.data);

export const getProductById = (id: string) => apiClient.get(`products/${id}`);

// Blogs
export const getAllBlogs = (params?: { search?: string }) =>
  apiClient.get("/blogs", { params }).then((res) => res.data);

export const getBlogById = (id: string) => apiClient.get(`blogs/${id}`);

// Comments
export const getAllComments = (params?: { search?: string }) =>
  apiClient.get("/comments", { params }).then((res) => res.data);

export const getCommentById = (id: string) => apiClient.get(`comments/${id}`);

// Faqs
export const getAllFaqs = (params?: { search?: string }) =>
  apiClient.get("/faqs", { params }).then((res) => res.data);

export const getFaqById = (id: string) => apiClient.get(`faqs/${id}`);

// Categories
export const getAllCategories = (params?: { search?: string }) =>
  apiClient.get("/categories", { params }).then((res) => res.data);

export const getCategoryById = (id: string) =>
  apiClient.get(`categories/${id}`);
