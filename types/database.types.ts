export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          client: string;
          year: number;
          category_id: string | null;
          cover_image_url: string;
          video_url: string | null;
          video_embed_id: string | null;
          description: string;
          full_story: string | null;
          director: string | null;
          dop: string | null;
          editor: string | null;
          colorist: string | null;
          awards: string[] | null;
          stills: string[] | null;
          is_featured: boolean;
          is_published: boolean;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          client: string;
          year?: number;
          category_id?: string | null;
          cover_image_url: string;
          video_url?: string | null;
          video_embed_id?: string | null;
          description: string;
          full_story?: string | null;
          director?: string | null;
          dop?: string | null;
          editor?: string | null;
          colorist?: string | null;
          awards?: string[] | null;
          stills?: string[] | null;
          is_featured?: boolean;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          client?: string;
          year?: number;
          category_id?: string | null;
          cover_image_url?: string;
          video_url?: string | null;
          video_embed_id?: string | null;
          description?: string;
          full_story?: string | null;
          director?: string | null;
          dop?: string | null;
          editor?: string | null;
          colorist?: string | null;
          awards?: string[] | null;
          stills?: string[] | null;
          is_featured?: boolean;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          title: string;
          slug: string;
          short_description: string;
          full_description: string;
          deliverables: string[];
          icon_name: string;
          image_url: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          short_description: string;
          full_description: string;
          deliverables?: string[];
          icon_name?: string;
          image_url?: string | null;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          short_description?: string;
          full_description?: string;
          deliverables?: string[];
          icon_name?: string;
          image_url?: string | null;
          order_index?: number;
          created_at?: string;
        };
      };
      media_assets: {
        Row: {
          id: string;
          filename: string;
          file_url: string;
          file_size: number;
          mime_type: string;
          alt_text: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          filename: string;
          file_url: string;
          file_size: number;
          mime_type: string;
          alt_text?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          filename?: string;
          file_url?: string;
          file_size?: number;
          mime_type?: string;
          alt_text?: string | null;
          created_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          budget_range: string | null;
          service_type: string | null;
          message: string;
          status: "new" | "in_review" | "contacted" | "closed";
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          budget_range?: string | null;
          service_type?: string | null;
          message: string;
          status?: "new" | "in_review" | "contacted" | "closed";
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          budget_range?: string | null;
          service_type?: string | null;
          message?: string;
          status?: "new" | "in_review" | "contacted" | "closed";
          created_at?: string;
        };
      };
      site_settings: {
        Row: {
          key: string;
          value: string;
          updated_at: string;
        };
        Insert: {
          key: string;
          value: string;
          updated_at?: string;
        };
        Update: {
          key?: string;
          value?: string;
          updated_at?: string;
        };
      };
    };
  };
}
