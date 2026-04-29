/*
  # Menu Schema for Comida Paraense/Amazonense Restaurant

  1. New Tables
    - `categories` - Menu categories (Tacacá, Piracuí, Camarão, Bebidas, etc.)
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `icon` (text)
      - `order` (int)
    - `menu_items` - Individual dishes
      - `id` (uuid, primary key)
      - `category_id` (uuid, FK to categories)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `available` (boolean)
      - `featured` (boolean)
      - `tags` (text[])
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public read access for menu display
    - No write access from frontend (managed via Supabase dashboard)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  icon text DEFAULT '',
  "order" int DEFAULT 0
);

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  price numeric(10,2) NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  available boolean DEFAULT true,
  featured boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  TO anon, authenticated
  USING (available = true);

-- Seed categories
INSERT INTO categories (id, name, description, icon, "order") VALUES
  ('a1000000-0000-0000-0000-000000000001', 'Tacacá', 'O sabor autêntico da Amazônia', 'bowl', 1),
  ('a1000000-0000-0000-0000-000000000002', 'Piracuí', 'Farinha de peixe da tradição paraense', 'fish', 2),
  ('a1000000-0000-0000-0000-000000000003', 'Camarão', 'Frutos do mar frescos da região', 'shrimp', 3),
  ('a1000000-0000-0000-0000-000000000004', 'Pratos Típicos', 'Culinária regional completa', 'plate', 4),
  ('a1000000-0000-0000-0000-000000000005', 'Bebidas', 'Sucos e drinks amazônicos', 'glass', 5)
ON CONFLICT (id) DO NOTHING;

-- Seed menu items
INSERT INTO menu_items (category_id, name, description, price, image_url, available, featured, tags) VALUES
  -- Tacacá
  ('a1000000-0000-0000-0000-000000000001', 'Tacacá Tradicional', 'Caldo de tucupi com jambu, goma de tapioca e camarão seco. Servido bem quente na cuia.', 22.00, 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', true, true, ARRAY['popular', 'tradicional']),
  ('a1000000-0000-0000-0000-000000000001', 'Tacacá com Camarão Extra', 'Versão generosa com porção dupla de camarão seco e jambu fresquinho.', 29.00, 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', true, false, ARRAY['premium']),
  ('a1000000-0000-0000-0000-000000000001', 'Tacacá Sem Camarão', 'Para os vegetarianos — tucupi, jambu e goma sem camarão.', 18.00, 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', true, false, ARRAY['vegetariano']),

  -- Piracuí
  ('a1000000-0000-0000-0000-000000000002', 'Pirão de Piracuí', 'Pirão cremoso preparado com farinha de piracuí e temperos da floresta.', 24.00, 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg', true, true, ARRAY['tradicional']),
  ('a1000000-0000-0000-0000-000000000002', 'Bolinho de Piracuí', 'Bolinhos crocantes de farinha de peixe com recheio especial. Porção com 6 unidades.', 26.00, 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg', true, false, ARRAY['petisco', 'popular']),
  ('a1000000-0000-0000-0000-000000000002', 'Farofa de Piracuí', 'Farofa artesanal de piracuí com manteiga e ervas. Acompanha qualquer prato.', 14.00, 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg', true, false, ARRAY['acompanhamento']),

  -- Camarão
  ('a1000000-0000-0000-0000-000000000003', 'Camarão na Moranga', 'Moranga recheada com camarão ao molho de leite de coco e pimenta-de-cheiro.', 68.00, 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg', true, true, ARRAY['premium', 'popular']),
  ('a1000000-0000-0000-0000-000000000003', 'Camarão ao Tucupi', 'Camarão fresco refogado no caldo de tucupi com jambu. Um clássico reinventado.', 55.00, 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg', true, true, ARRAY['premium', 'regional']),
  ('a1000000-0000-0000-0000-000000000003', 'Moqueca de Camarão', 'Moqueca paraense com camarão, leite de coco, azeite de dendê e pimentão colorido.', 62.00, 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg', true, false, ARRAY['premium']),
  ('a1000000-0000-0000-0000-000000000003', 'Camarão Frito Crocante', 'Camarão empanado artesanalmente, frito na hora. Servido com molho tártaro de tucumã.', 48.00, 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg', true, false, ARRAY['petisco']),

  -- Pratos Típicos
  ('a1000000-0000-0000-0000-000000000004', 'Pato no Tucupi', 'Pato caipira cozido no tucupi com jambu. Prato símbolo do Círio de Nazaré.', 78.00, 'https://images.pexels.com/photos/5560761/pexels-photo-5560761.jpeg', true, true, ARRAY['especial', 'tradicional']),
  ('a1000000-0000-0000-0000-000000000004', 'Maniçoba', 'Folha de maniva cozida por dias com carnes e defumados. Feijoada paraense.', 65.00, 'https://images.pexels.com/photos/5560761/pexels-photo-5560761.jpeg', true, true, ARRAY['especial', 'tradicional']),
  ('a1000000-0000-0000-0000-000000000004', 'Vatapá Paraense', 'Vatapá cremoso de pão e camarão seco, com leite de coco e amendoim torrado.', 42.00, 'https://images.pexels.com/photos/5560761/pexels-photo-5560761.jpeg', true, false, ARRAY['tradicional']),

  -- Bebidas
  ('a1000000-0000-0000-0000-000000000005', 'Suco de Açaí', 'Açaí batido puro da região de Marajó. Sem adição de açúcar.', 16.00, 'https://images.pexels.com/photos/5946634/pexels-photo-5946634.jpeg', true, true, ARRAY['natural', 'popular']),
  ('a1000000-0000-0000-0000-000000000005', 'Suco de Cupuaçu', 'Polpa de cupuaçu fresco batido com água gelada. Refrescante e nutritivo.', 14.00, 'https://images.pexels.com/photos/5946634/pexels-photo-5946634.jpeg', true, false, ARRAY['natural']),
  ('a1000000-0000-0000-0000-000000000005', 'Suco de Bacuri', 'Fruta nativa da Amazônia. Sabor único e exótico que você não esquece.', 15.00, 'https://images.pexels.com/photos/5946634/pexels-photo-5946634.jpeg', true, false, ARRAY['natural', 'regional']),
  ('a1000000-0000-0000-0000-000000000005', 'Água de Coco Natural', 'Coco verde da ilha gelado na hora. Refrescante e hidratante.', 10.00, 'https://images.pexels.com/photos/5946634/pexels-photo-5946634.jpeg', true, false, ARRAY['natural'])
ON CONFLICT DO NOTHING;
