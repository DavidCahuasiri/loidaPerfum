document.addEventListener("DOMContentLoaded", () => {

  // Configuración de WhatsApp
  const WHATSAPP_PHONE = "59175685568";

  /*
  |--------------------------------------------------------------------------
  | PRODUCTOS
  |--------------------------------------------------------------------------
  */

  const productos = [
    {
      nombre: "Spot For Him",
      precio: "320 Bs",
      presentacion: "Fragancia • 75 ml",
      categoria: "amaderado",
      familia: "Amaderado Aromático",
      imagen: "imagenes/10140.png",
      descripcion:
        "Una fragancia masculina de carácter aromático y amaderado, con una combinación fresca y especiada.",
      notas: "Limón, Verbena, Pimienta negra",
      ideal: "Uso diario, ocasiones especiales"
    },

    {
      nombre: "Spot For Her",
      precio: "320 Bs",
      presentacion: "Fragancia • 75 ml",
      categoria: "dulce",
      familia: "Dulce Seductor",
      imagen: "imagenes/10139.png",
      descripcion:
        "Una fragancia femenina dulce y seductora que combina frutas oscuras con un fondo cálido y envolvente.",
      notas: "Cereza negra, Ciruela, Pachuli, Sándalo, Ámbar, Vainilla",
      ideal: "Citas, eventos, ocasiones especiales"
    },

    {
      nombre: "Feelin' Sexy For Her",
      precio: "368 Bs",
      presentacion: "Fragancia • 100 ml",
      categoria: "floral",
      familia: "Chipre Seductor",
      imagen: "imagenes/10115.png",
      descripcion:
        "Una fragancia seductora que combina la intensidad de las frutas rojas con la elegancia de la violeta y el carácter del pachulí.",
      notas: "Frutas rojas, Violeta seductora, Extracto de pachulí",
      ideal: "Citas, eventos, ocasiones especiales"
    },

    {
      nombre: "Feelin' Sexy For Him",
      precio: "368 Bs",
      presentacion: "Fragancia • 100 ml",
      categoria: "amaderado",
      familia: "Amaderado Seductor",
      imagen: "imagenes/10116.png",
      descripcion:
        "Una fragancia masculina intensa y seductora, con la frescura de la bergamota y un fondo cálido de tabaco y pachulí.",
      notas: "Bergamota, Hojas de tabaco, Pachulí de Indonesia",
      ideal: "Noches, citas, ocasiones especiales"
    },

    {
      nombre: "Feelin' Flame For Him",
      precio: "368 Bs",
      presentacion: "Fragancia • 100 ml",
      categoria: "amaderado",
      familia: "Amaderado Seductor",
      imagen: "imagenes/11052.png",
      descripcion:
        "Una fragancia masculina intensa y seductora que combina especias, notas aromáticas y un fondo cálido y envolvente.",
      notas: "Pimienta rosa, Davana, Durazno, Lavanda, Benjuí, Pachulí, Cipriol, Sándalo, Praliné",
      ideal: "Noches, citas, ocasiones especiales"
    },

    {
      nombre: "Feelin' Flame For Her",
      precio: "368 Bs",
      presentacion: "Fragancia • 100 ml",
      categoria: "dulce",
      familia: "Dulce Seductor",
      imagen: "imagenes/11053.png",
      descripcion:
        "Una fragancia femenina dulce y envolvente que combina la frescura de la bergamota con la delicadeza del jazmín y la calidez del caramelo.",
      notas: "Bergamota, Jazmín, Caramelo",
      ideal: "Citas, eventos, ocasiones especiales"
    },


  ];


  /*
  |--------------------------------------------------------------------------
  | GENERAR TARJETAS
  |--------------------------------------------------------------------------
  */

  function mostrarProductos(lista) {

    const perfumeGrid = document.getElementById("perfumeGrid");

    if (!perfumeGrid) {
      console.error("No se encontró el elemento perfumeGrid");
      return;
    }

    perfumeGrid.innerHTML = "";

    lista.forEach((producto) => {

      const card = document.createElement("article");

      card.dataset.category = producto.categoria;
      card.dataset.name = producto.nombre;
      card.dataset.price = producto.precio;
      card.dataset.type = producto.presentacion;
      card.dataset.img = producto.imagen;

      card.className =
        "perfume-card group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col justify-between";

      card.innerHTML = `
        <div>

          <div class="relative h-64 overflow-hidden bg-stone-100">

            <img
              src="${producto.imagen}"
              alt="${producto.nombre}"
              class="card-img w-full h-full object-cover"
            >

            <span class="absolute top-4 right-4 bg-amber-900/80 text-amber-200 border border-amber-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              ${producto.familia}
            </span>

          </div>

          <div class="p-6">

            <h3 class="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-600 transition duration-300">
              ${producto.nombre}
            </h3>

            <p class="text-stone-500 text-xs mb-3 font-medium">
              ${producto.presentacion}
            </p>

            <p class="text-stone-600 text-sm leading-relaxed mb-4 font-normal">
              ${producto.descripcion}
            </p>

            <div class="border-t border-stone-100 pt-3 text-xs space-y-1.5 text-stone-500">

              <p>
                <strong class="text-stone-700">Notas:</strong>
                ${producto.notas}
              </p>

              <p>
                <strong class="text-stone-700">Ideal para:</strong>
                ${producto.ideal}
              </p>

            </div>

          </div>

        </div>

        <div class="p-6 pt-0">

          <div class="flex items-center justify-between mb-4">

            <span class="text-2xl font-bold font-serif text-amber-700">
              ${producto.precio}
            </span>

            <span class="text-[11px] text-emerald-700 bg-emerald-50 font-medium px-2.5 py-1 rounded-md border border-emerald-200">
              Disponible
            </span>

          </div>

          <button
            class="ws-btn w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition duration-300"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            Pedir por WhatsApp
          </button>

        </div>
      `;

      // Botón de WhatsApp
      const whatsappButton = card.querySelector(".ws-btn");

      whatsappButton.addEventListener("click", () => {
        orderViaWhatsApp(card);
      });

      perfumeGrid.appendChild(card);

    });

    // Activar iconos de Lucide solamente si la librería está disponible
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }


  /*
  |--------------------------------------------------------------------------
  | WHATSAPP
  |--------------------------------------------------------------------------
  */

  function orderViaWhatsApp(card) {

    const name = card.dataset.name;
    const price = card.dataset.price;
    const type = card.dataset.type;
    const imgUrl = card.dataset.img;

    const message =
      "Hola Loida Puma, me interesa comprar el siguiente producto:\n\n" +
      "✨ Producto: " + name + "\n" +
      "💵 Precio: " + price + "\n" +
      "🧪 Presentación: " + type + "\n" +
      "🖼️ Foto: " + imgUrl;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl =
      "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodedMessage;

    window.open(whatsappUrl, "_blank");
  }


  /*
  |--------------------------------------------------------------------------
  | BÚSQUEDA Y FILTROS
  |--------------------------------------------------------------------------
  */

  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let currentCategory = "all";


  function filterCatalog() {

    const query = searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";

    const filteredProducts = productos.filter((producto) => {

      const matchesCategory =
        currentCategory === "all" ||
        producto.categoria === currentCategory;

      const searchableText = (
        producto.nombre + " " +
        producto.presentacion + " " +
        producto.familia + " " +
        producto.descripcion + " " +
        producto.notas + " " +
        producto.ideal
      ).toLowerCase();

      const matchesSearch = searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });

    mostrarProductos(filteredProducts);
  }


  // Búsqueda
  if (searchInput) {

    searchInput.addEventListener("input", () => {
      filterCatalog();
    });

  }


  // Filtros
  filterButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

      filterButtons.forEach((b) => {

        b.classList.remove(
          "active",
          "bg-amber-600",
          "text-white",
          "border-amber-600"
        );

        b.classList.add(
          "text-stone-600",
          "border-stone-300"
        );

      });

      btn.classList.add(
        "active",
        "bg-amber-600",
        "text-white",
        "border-amber-600"
      );

      btn.classList.remove(
        "text-stone-600",
        "border-stone-300"
      );

      currentCategory = btn.dataset.filter;

      filterCatalog();

    });

  });

  /*
  |--------------------------------------------------------------------------
  | MOSTRAR PRODUCTOS AL INICIAR
  |--------------------------------------------------------------------------
  */
  mostrarProductos(productos);

  console.log("Productos cargados:", productos);

});