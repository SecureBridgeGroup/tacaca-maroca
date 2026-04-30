import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Substitua pelo seu número real de Manaus
  const phoneNumber = "5592995242735"; 
  const message = encodeURIComponent("Olá! Gostaria de fazer um pedido no Tacacá da Maroca.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-6 z-[60] bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip opcional que aparece no hover */}
      <span className="absolute right-full mr-3 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}