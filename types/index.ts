import { Database } from "./database.types";

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type Service = Database["public"]["Tables"]["services"]["Row"];
export type MediaAsset = Database["public"]["Tables"]["media_assets"]["Row"];
export type Inquiry = Database["public"]["Tables"]["inquiries"]["Row"];
export type SiteSetting = Database["public"]["Tables"]["site_settings"]["Row"];

export interface ProjectWithCategory extends Project {
  category?: Category | null;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  budget_range?: string;
  service_type?: string;
  message: string;
}

export interface AdminStats {
  totalProjects: number;
  publishedProjects: number;
  totalServices: number;
  totalInquiries: number;
  newInquiries: number;
  totalMediaAssets: number;
}
