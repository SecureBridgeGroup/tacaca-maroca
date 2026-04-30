// src/data/menu.ts

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Voltamos para apenas number
  image_url: string;
  category: string;
  featured: boolean;
  available: boolean;
  tags: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuData: MenuItem[] = [
  {
    id: 'a1000000-0000-0000-0000-000000000001',
    name: 'Tacacá Tradicional',
    description: 'Caldo de tucupi com jambu, goma de tapioca e camarão seco. Servido bem quente na cuia.',
    price: 30.00,
    image_url: '/img/tacacatradicional.jpg',
    category: 'Tacacá',
    featured: true,
    available: true,
    tags: ['popular', 'tradicional']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000001-extra',
    name: 'Arroz Paraense',
    description: 'Versão generosa com porção dupla de camarão seco, jambu fresquinho e tucupi.',
    price: 25.00,
    image_url: '/img/7.jpg',
    category: 'Camarão',
    featured: false,
    available: true,
    tags: ['premium']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000002',
    name: 'Bolinho de Piracuí',
    description: 'Bolinhos crocantes de farinha de peixe com recheio especial. Porção com 6 unidades.',
    price: 17.00,
    image_url: '/img/3.jpg',
    category: 'Piracuí',
    featured: true,
    available: true,
    tags: ['petisco', 'popular']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000003',
    name: 'Farofa de Camarão',
    description: 'Camarão fresco refogado no caldo de tucupi com jambu. Um clássico reinventado.',
    price: 25.00,
    image_url: '/img/1.jpg',
    category: 'Camarão',
    featured: true,
    available: true,
    tags: ['premium', 'regional']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000004',
    name: 'Vatapá Paraense',
    description: 'Vatapá cremoso de camarão seco.',
    price: 25.00,
    image_url: '/img/4.jpg',
    category: 'Camarão',
    featured: false,
    available: true,
    tags: ['tradicional']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005',
    name: 'Suco de Maracujá',
    description: 'Polpa de maracujá fresco batido com água gelada. Refrescante e perfeito para acompanhar seu tacacá.',
    price: 0, // Voltamos para número
    image_url: '/img/suco1.jpg',
    category: 'Bebidas',
    featured: true,
    available: true,
    tags: ['natural', 'popular']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-cupuacu',
    name: 'Suco de Cupuaçu',
    description: 'Polpa de cupuaçu fresco batido com água gelada. Refrescante e nutritivo.',
    price: 0, // Voltamos para número
    image_url: '/img/suco2.jpg',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['natural']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000006-banana',
    name: 'Torta de Banana',
    description: 'Torta cremosa de banana com calda de açúcar. Um doce tradicional da região.',
    price: 10.00,
    image_url: '/img/5.jpg',
    category: 'Doces',
    featured: false,
    available: true,
    tags: ['sobremesa', 'regional']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000006-chocolate',
    name: 'Bolo de Chocolate',
    description: 'Bolo fofinho de chocolate com cobertura cremosa. Um doce clássico da casa.',
    price: 10.00,
    image_url: '/img/bolochocolate.png',
    category: 'Doces',
    featured: false,
    available: true,
    tags: ['sobremesa']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000007-manicoba',
    name: 'Maniçoba',
    description: 'Maniçoba tradicional. Um prato típico da região paraense.',
    price: 42.00,
    image_url: '/img/9.png',
    category: 'Maniçoba',
    featured: false,
    available: true,
    tags: ['regional', 'tradicional']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refricoca',
    name: 'Coca-cola',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/cocacolanormal.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refrifantalaranja',
    name: 'Fanta Laranja',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/fantalaranja.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refrifantauva',
    name: 'Fanta Uva',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/fantauva.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refripepsi',
    name: 'Pepsi',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/pepsi.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refribare',
    name: 'Baré',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/bare.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  },
  {
    id: 'a1000000-0000-0000-0000-000000000005-refricocazero',
    name: 'Coca-cola Zero',
    description: 'Lata 350 ml',
    price: 6.00,
    image_url: '/img/cocacolazero.png',
    category: 'Bebidas',
    featured: false,
    available: true,
    tags: ['Refrigerante']
  }
];