-- JAC-MEDIALAND Demo Seed Data

-- 1. Insert Categories
INSERT INTO public.categories (id, name, slug, description, order_index) VALUES
    ('c1111111-1111-1111-1111-111111111111', 'Website Development', 'website-development', 'Fast, modern, conversion-ready web platforms and headless systems', 1),
    ('c2222222-2222-2222-2222-222222222222', 'App Development', 'app-development', 'High-performance iOS, Android, and cross-platform mobile apps', 2),
    ('c3333333-3333-3333-3333-333333333333', 'UI / UX Design', 'ui-ux-design', 'User-centered design systems, interactive prototypes, and digital experiences', 3),
    ('c4444444-4444-4444-4444-444444444444', 'Graphic Design', 'graphic-design', 'Brand identity systems, typography guidelines, and visual language', 4),
    ('c5555555-5555-5555-5555-555555555555', 'Marketing & SEO', 'marketing-seo', 'Performance campaigns, search visibility, and organic growth', 5),
    ('c6666666-6666-6666-6666-666666666666', 'Cinematography & Video', 'cinematography-video', 'Cinematic brand films, high-impact commercials, and 4K showreels', 6)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert Services (Matching Screenshot exactly + Media Studio)
INSERT INTO public.services (id, title, slug, short_description, full_description, deliverables, icon_name, order_index) VALUES
    ('s1111111-1111-1111-1111-111111111111', 'Graphic Design', 'graphic-design', 'Brand identity and visual systems', 'From primary brand marks and typographic hierarchies to print packaging, brand books, and complete design collateral. We engineer distinctive, enduring visual systems that tell an unmistakable brand story.', ARRAY['Logo & Brand Identity Systems', 'Bespoke Typography & Color Theory', 'Brand Guidelines & Asset Toolkits', 'Packaging, Print & Digital Collateral'], 'PenTool', 1),
    ('s2222222-2222-2222-2222-222222222222', 'App Development', 'app-development', 'Mobile and web applications', 'Engineering robust, scalable iOS, Android, and cross-platform applications built with React Native, Flutter, and native Swift/Kotlin. Optimized for fluid 120fps interactions and rock-solid backend synchronization.', ARRAY['Native iOS & Android Mobile Apps', 'Cross-Platform React Native Architectures', 'Real-time Cloud Backends & APIs', 'App Store & Google Play Optimization'], 'Smartphone', 2),
    ('s3333333-3333-3333-3333-333333333333', 'Website Development', 'website-development', 'Fast, modern, conversion-ready websites', 'Building lightning-fast web applications using Next.js App Router, TypeScript, Tailwind CSS, and headless content management systems. Engineered for instant load times, seamless responsiveness, and high conversion.', ARRAY['Next.js & React Full-Stack Platforms', 'Headless CMS (Sanity, Strapi, Supabase)', 'High-Conversion E-Commerce Stores', '100/100 Core Web Vitals Optimization'], 'Code2', 3),
    ('s4444444-4444-4444-4444-444444444444', 'SEO Marketing', 'seo-marketing', 'Search visibility and organic growth', 'Data-driven organic search engine strategies designed to dominate competitive keywords, expand organic impression share, and build long-term domain authority that outranks competitors.', ARRAY['Comprehensive Technical SEO Audits', 'High-Intent Keyword Clustering', 'Schema Markup & Semantic Architecture', 'Authoritative Backlink & Content Strategy'], 'Search', 4),
    ('s5555555-5555-5555-5555-555555555555', 'UI / UX Design', 'ui-ux-design', 'User-centered digital experiences', 'Deep user research, wireframing, high-fidelity Figma prototypes, and modular design systems. We craft digital journeys that delight users while maximizing engagement, retention, and funnel velocity.', ARRAY['Interactive High-Fidelity Prototypes', 'Scalable Component Design Systems', 'User Journey & Usability Architecture', 'Conversion Funnel UX Audits'], 'Layers', 5),
    ('s6666666-6666-6666-6666-666666666666', 'Digital Marketing', 'digital-marketing', 'Campaigns that connect and convert', 'Multi-channel paid acquisition, retargeting funnels, and programmatic advertising campaigns across Meta, Google, LinkedIn, and TikTok. Continuous A/B creative testing for maximum ROAS.', ARRAY['Targeted Paid Media (Google, Meta, TikTok)', 'Multi-Channel Retargeting Funnels', 'Conversion Rate Optimization (CRO)', 'Real-Time Attribution Analytics Dashboards'], 'TrendingUp', 6),
    ('s7777777-7777-7777-7777-777777777777', 'Social Media Management', 'social-media-management', 'Content, community, and brand growth', 'End-to-end social strategy, high-aesthetic short-form video production, community engagement, and creator partnership campaigns that build passionate brand followings.', ARRAY['Weekly Editorial Content Calendar', 'Short-Form Video (Reels, TikTok, Shorts)', 'Community Moderation & Engagement', 'Influencer & Creator Collaborations'], 'Users', 7),
    ('s8888888-8888-8888-8888-888888888888', 'Cinematography & Video', 'cinematography-video', 'Cinematic brand films, commercials, and 4K showreels', 'Large-format ARRI and RED cinema package filming, drone aerials, DaVinci Resolve HDR color grading, and Dolby Atmos audio mastering for global broadcast and digital campaigns.', ARRAY['Director Treatments & Scriptwriting', 'ARRI Alexa Mini LF / RED V-Raptor 8K', 'HDR DaVinci Resolve Color Timing', 'Turnkey On-Set Logistics & Crewing'], 'Film', 8)
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert Projects
INSERT INTO public.projects (id, title, slug, client, year, category_id, cover_image_url, video_url, video_embed_id, description, full_story, director, dop, editor, colorist, awards, stills, is_featured, is_published, order_index) VALUES
    (
        'p1111111-1111-1111-1111-111111111111',
        'NEXUS // AI Neobank Platform',
        'nexus-ai-neobank-platform',
        'Nexus Capital Group',
        2026,
        'c2222222-2222-2222-2222-222222222222',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'dQw4w9WgXcQ',
        'Next-generation iOS & Android mobile financial app with biometric authentication and real-time portfolio analytics.',
        'Designed and engineered an enterprise-grade mobile application and responsive web dashboard for Nexus Capital. Built with React Native and Node.js microservices.',
        'Alex Rivers',
        'Elena Rostova',
        'Marcus Sterling',
        'Kai Takahashi',
        ARRAY['App Store Best of 2025', 'Fintech Innovation Award Gold', 'Red Dot UI Excellence'],
        ARRAY[
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80'
        ],
        true,
        true,
        1
    ),
    (
        'p2222222-2222-2222-2222-222222222222',
        'LUMINA: Headless E-Commerce Flagship',
        'lumina-headless-ecommerce',
        'Lumina Scandinavian Living',
        2025,
        'c1111111-1111-1111-1111-111111111111',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'dQw4w9WgXcQ',
        'Ultra-fast Next.js 15 e-commerce platform with 3D product previews and localized multi-currency checkout.',
        'Engineered a high-performance web experience achieving 100/100 Core Web Vitals. The platform integrates Shopify Plus backend APIs with custom WebGL product customizers.',
        'Julian Vance',
        'David Chen',
        'Sofia Ramos',
        'Kai Takahashi',
        ARRAY['Awwwards Site of the Day', 'FWA of the Month', 'Shopify Merchant Excellence'],
        ARRAY[
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
        ],
        true,
        true,
        2
    )
ON CONFLICT (slug) DO NOTHING;

-- 4. Insert Site Settings
INSERT INTO public.site_settings (key, value) VALUES
    ('studio_name', 'JAC-MEDIALAND'),
    ('tagline', 'CREATIVE MEDIA & DIGITAL SOLUTIONS.'),
    ('email', 'contact@jac-medialand.com'),
    ('phone', '+1 (310) 847-2910'),
    ('address', '742 South Hill St, Downtown Los Angeles, CA 90014'),
    ('instagram_url', 'https://instagram.com/jacmedialand'),
    ('vimeo_url', 'https://vimeo.com/jacmedialand'),
    ('youtube_url', 'https://youtube.com/@jacmedialand'),
    ('hero_title', 'WHERE CREATIVITY MEETS DIGITAL IMPACT'),
    ('hero_subtitle', 'We are a creative media & IT solutions studio engineering world-class digital platforms, mobile applications, brand identities, and high-craft visuals for iconic global brands.')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
