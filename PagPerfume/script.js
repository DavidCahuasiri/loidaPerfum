// Inicializar Lucide Icons
lucide.createIcons();

// Configuración de WhatsApp
const WHATSAPP_PHONE = "59175685568";

/**
 * Función para armar y enviar el mensaje detallado por WhatsApp
 */
function orderViaWhatsApp(buttonElement) {
  const card = buttonElement.closest('.perfume-card');

  const name = card.dataset.name;
  const price = card.dataset.price;
  const type = card.dataset.type;
  const imgUrl = card.dataset.img;

  // Construcción del mensaje con formato WhatsApp
  const message = `Hola Loida Puma, me interesa comprar el siguiente producto:\n\n` +
                  `✨ *Producto:* ${name}\n` +
                  `💵 *Precio:* ${price}\n` +
                  `🧪 *Presentación:* ${type}\n` +
                  `🖼️ *Foto:* ${imgUrl}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

// Lógica de Filtro y Búsqueda
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const perfumeCards = document.querySelectorAll(".perfume-card");

  let currentCategory = "all";

  function filterCatalog() {
    const query = searchInput.value.toLowerCase().trim();

    perfumeCards.forEach((card) => {
      const category = card.dataset.category;
      const text = card.innerText.toLowerCase();

      const matchesCategory = currentCategory === "all" || category === currentCategory;
      const matchesSearch = text.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Evento de Búsqueda
  if (searchInput) {
    searchInput.addEventListener("input", filterCatalog);
  }

  // Eventos de Filtro por Categoría
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active", "bg-amber-600", "text-white", "border-amber-600");
        b.classList.add("text-stone-600", "border-stone-300");
      });

      btn.classList.add("active", "bg-amber-600", "text-white", "border-amber-600");
      btn.classList.remove("text-stone-600", "border-stone-300");

      currentCategory = btn.dataset.filter;
      filterCatalog();
    });
  });
});