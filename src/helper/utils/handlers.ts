import emptyImage from "../../assets/images/empty-image.webp";
import emptyImageUser from "../../assets/images/empty-image-user.webp";
import { API_URL } from "../constants/static";

export const handleImageUrl = (imagePath?: string, isUser?: boolean) => {
  if (!imagePath) return isUser ? emptyImageUser : emptyImage;

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  if (!imagePath.startsWith("/")) imagePath = `/${imagePath}`;

  if (!imagePath.includes("/")) {
    return `${API_URL}${imagePath}`;
  }

  return `${API_URL}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
};
