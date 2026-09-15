/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const WHATSAPP_PHONE = "59175685568";


/* =========================================================
   PRODUCTOS
   ========================================================= */

const productos = [

  /* =========================
     PERFUMERÍA
     ========================= */

  {
    nombre: "Spot For Him",
    precio: 320,
    tipo: "Eau de Toilette • 75 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Aromático",
    imagen: "imagenes/10140.png",
    descripcion:
      "Una fragancia masculina de carácter elegante y moderno, ideal para quienes buscan una presencia distinguida.",
    caracteristicas:
      "Aromas amaderados y aromáticos con una personalidad masculina y sofisticada.",
    ideal:
      "Ideal para el hombre que busca una fragancia versátil para el día a día."
  },

  {
    nombre: "Spot For Her",
    precio: 320,
    tipo: "Eau de Toilette • 75 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Seductor",
    imagen: "imagenes/10139.png",
    descripcion:
      "Una fragancia femenina dulce y envolvente que transmite elegancia y seguridad.",
    caracteristicas:
      "Aroma dulce, femenino y seductor con una presencia delicada.",
    ideal:
      "Ideal para mujeres que disfrutan de aromas dulces y femeninos."
  },

  {
    nombre: "Spot Sunset For Him",
    precio: 320,
    tipo: "Eau de Toilette • 75 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Vibrante",
    imagen: "imagenes/10161.png",
    descripcion:
      "Una fragancia masculina vibrante y moderna, perfecta para destacar durante momentos especiales.",
    caracteristicas:
      "Aroma dulce y energético con un carácter juvenil y atractivo.",
    ideal:
      "Ideal para ocasiones sociales, salidas y momentos especiales."
  },

  {
    nombre: "Feelin' Sexy For Her",
    precio: 368,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "floral",
    familia: "Chipre Seductor",
    imagen: "imagenes/10115.png",
    descripcion:
      "Una fragancia femenina sofisticada y sensual que combina elegancia y personalidad.",
    caracteristicas:
      "Aroma floral con carácter chipre, femenino y seductor.",
    ideal:
      "Ideal para mujeres que desean proyectar elegancia y seguridad."
  },

  {
    nombre: "Feelin' Sexy For Him",
    precio: 368,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Seductor",
    imagen: "imagenes/10116.png",
    descripcion:
      "Una fragancia masculina intensa y elegante diseñada para dejar una impresión memorable.",
    caracteristicas:
      "Aroma amaderado y seductor con una personalidad marcada.",
    ideal:
      "Ideal para ocasiones especiales y para el hombre que busca destacar."
  },

  {
    nombre: "Feelin' Flame For Him",
    precio: 368,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Seductor",
    imagen: "imagenes/11052.png",
    descripcion:
      "Una fragancia masculina intensa, cálida y atractiva.",
    caracteristicas:
      "Aroma amaderado con una sensación cálida, elegante y seductora.",
    ideal:
      "Ideal para noches, ocasiones especiales y momentos importantes."
  },

  {
    nombre: "Feelin' Flame For Her",
    precio: 368,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Seductor",
    imagen: "imagenes/11053.png",
    descripcion:
      "Una fragancia femenina envolvente y sensual con un carácter dulce.",
    caracteristicas:
      "Aroma dulce y femenino con una personalidad cálida y seductora.",
    ideal:
      "Ideal para mujeres que buscan una fragancia llamativa y elegante."
  },

  {
    nombre: "Inebriante For Him Eau de Parfum",
    precio: 550,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Elegante",
    imagen: "imagenes/10119.png",
    descripcion:
      "Una fragancia masculina sofisticada con una presencia intensa y elegante.",
    caracteristicas:
      "Composición amaderada con carácter profundo y distinguido.",
    ideal:
      "Ideal para hombres que buscan una fragancia elegante y de presencia."
  },

  {
    nombre: "Lattitude Expedition",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Seductor",
    imagen: "imagenes/45030.png",
    descripcion:
      "Una fragancia masculina envolvente y atractiva.",
    caracteristicas:
      "Aroma dulce con una personalidad intensa y seductora.",
    ideal:
      "Ideal para salidas y ocasiones donde se desea destacar."
  },

  {
    nombre: "Lattitude Brave",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Elegante",
    imagen: "imagenes/10255.png",
    descripcion:
      "Una fragancia masculina elegante con un carácter dulce y moderno.",
    caracteristicas:
      "Aroma dulce y sofisticado con una personalidad segura.",
    ideal:
      "Ideal para hombres modernos y seguros de sí mismos."
  },

  {
    nombre: "Lattitude Extreme",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "fresco",
    familia: "Aromático Seductor",
    imagen: "imagenes/45052.png",
    descripcion:
      "Una fragancia fresca y atractiva para quienes prefieren aromas dinámicos.",
    caracteristicas:
      "Aroma fresco y aromático con un toque seductor.",
    ideal:
      "Ideal para el día y ocasiones informales."
  },

  {
    nombre: "Lattitude Origini",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Vibrante",
    imagen: "imagenes/10152.png",
    descripcion:
      "Una fragancia vibrante y moderna con una personalidad dulce.",
    caracteristicas:
      "Aroma dulce y energético.",
    ideal:
      "Ideal para personas que buscan una fragancia juvenil y llamativa."
  },

  {
    nombre: "Lattitude Stamina",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Envolvente",
    imagen: "imagenes/10142.png",
    descripcion:
      "Una fragancia masculina envolvente y de carácter fuerte.",
    caracteristicas:
      "Aroma amaderado con profundidad y presencia.",
    ideal:
      "Ideal para hombres que prefieren aromas intensos y elegantes."
  },

  {
    nombre: "Lattitude Ultra",
    precio: 346,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Vibrante",
    imagen: "imagenes/10273.png",
    descripcion:
      "Una fragancia masculina vibrante con un carácter moderno.",
    caracteristicas:
      "Aroma amaderado intenso y dinámico.",
    ideal:
      "Ideal para ocasiones especiales y salidas nocturnas."
  },

  {
    nombre: "Empire The One Deo Parfum",
    precio: 500,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Seductor",
    imagen: "imagenes/111091.png",
    descripcion:
      "Una fragancia masculina elegante y seductora.",
    caracteristicas:
      "Aroma amaderado intenso con una personalidad sofisticada.",
    ideal:
      "Ideal para hombres que buscan una fragancia de presencia."
  },

  {
    nombre: "Empire Icon Eau de Parfum",
    precio: 500,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Elegante",
    imagen: "imagenes/11015.png",
    descripcion:
      "Una fragancia masculina refinada con carácter elegante.",
    caracteristicas:
      "Aroma amaderado profundo y sofisticado.",
    ideal:
      "Ideal para ocasiones especiales y ambientes formales."
  },

  {
    nombre: "Empire Absolut",
    precio: 400,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Seductor",
    imagen: "imagenes/10217.png",
    descripcion:
      "Una fragancia masculina intensa y atractiva.",
    caracteristicas:
      "Aroma amaderado con carácter fuerte y seductor.",
    ideal:
      "Ideal para noches y ocasiones especiales."
  },

  {
    nombre: "Empire Sport",
    precio: 400,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "fresco",
    familia: "Aromático Vibrante",
    imagen: "imagenes/10216.png",
    descripcion:
      "Una fragancia fresca y dinámica pensada para un estilo activo.",
    caracteristicas:
      "Aroma aromático, fresco y vibrante.",
    ideal:
      "Ideal para actividades diarias y personas con un estilo activo."
  },

  {
    nombre: "Empire Gold",
    precio: 400,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "fresco",
    familia: "Fougère Amaderado",
    imagen: "imagenes/10219.png",
    descripcion:
      "Una fragancia masculina elegante con carácter fresco y amaderado.",
    caracteristicas:
      "Aroma fougère con matices amaderados.",
    ideal:
      "Ideal para el uso diario y ocasiones especiales."
  },

  {
    nombre: "Empire",
    precio: 400,
    tipo: "Eau de Parfum • 100 ml",
    categoria: "perfumeria",
    subcategoria: "fresco",
    familia: "Aromático Elegante",
    imagen: "imagenes/10215.png",
    descripcion:
      "Una fragancia masculina equilibrada y elegante.",
    caracteristicas:
      "Aroma aromático con sensación fresca y sofisticada.",
    ideal:
      "Ideal para hombres que buscan una fragancia versátil."
  },

  {
    nombre: "Vibez! Femenino",
    precio: 300,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Dulce Vibrante",
    imagen: "imagenes/10262.png",
    descripcion:
      "Una fragancia femenina juvenil, dulce y vibrante.",
    caracteristicas:
      "Aroma dulce y alegre con personalidad femenina.",
    ideal:
      "Ideal para mujeres que buscan un aroma juvenil y llamativo."
  },

  {
    nombre: "Vibez! Masculino",
    precio: 300,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "amaderado",
    familia: "Amaderado Envolvente",
    imagen: "imagenes/10263.png",
    descripcion:
      "Una fragancia masculina moderna y envolvente.",
    caracteristicas:
      "Aroma amaderado con una personalidad juvenil.",
    ideal:
      "Ideal para uso diario y ocasiones informales."
  },

  {
    nombre: "Grace Midnight",
    precio: 400,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "dulce",
    familia: "Endulzado Envolvente",
    imagen: "imagenes/10210.png",
    descripcion:
      "Una fragancia femenina intensa y envolvente.",
    caracteristicas:
      "Aroma dulce con una personalidad elegante y sensual.",
    ideal:
      "Ideal para noches y ocasiones especiales."
  },

  {
    nombre: "Grace La Rose Sublime",
    precio: 400,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "floral",
    familia: "Chipre Elegante",
    imagen: "imagenes/10211.png",
    descripcion:
      "Una fragancia femenina sofisticada con carácter floral.",
    caracteristicas:
      "Aroma floral elegante con estilo chipre.",
    ideal:
      "Ideal para mujeres que buscan elegancia y feminidad."
  },

  {
    nombre: "Grace",
    precio: 400,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "floral",
    familia: "Floral Vibrante",
    imagen: "imagenes/10209.png",
    descripcion:
      "Una fragancia femenina fresca, floral y vibrante.",
    caracteristicas:
      "Aroma floral femenino con personalidad alegre.",
    ideal:
      "Ideal para el uso diario y ocasiones especiales."
  },

  {
    nombre: "Grace Lumiére",
    precio: 376,
    tipo: "Eau de Parfum • 75 ml",
    categoria: "perfumeria",
    subcategoria: "floral",
    familia: "Floral Vibrante",
    imagen: "imagenes/10272.png",
    descripcion:
      "Una fragancia femenina luminosa y elegante.",
    caracteristicas:
      "Aroma floral vibrante con un carácter delicado y sofisticado.",
    ideal:
      "Ideal para mujeres que buscan una fragancia elegante y femenina."
  },


  /* =========================
     CUIDADO CORPORAL
     ========================= */

  {
    nombre: "Hidratante Corporal",
    precio: 165,
    tipo: "Crema corporal • 480 ml",
    categoria: "cuidado_corporal",
    subcategoria: "hidratante",
    familia: "Cuidado Corporal",
    imagen: "imagenes/11059.png",
    descripcion:
      "Producto diseñado para ayudar a mantener la piel hidratada y suave.",
    caracteristicas:
      "Textura agradable para el cuidado e hidratación diaria de la piel.",
    ideal:
      "Ideal para incorporar a la rutina diaria de cuidado corporal."
  },

  {
    nombre: "Jabón Líquido Corporal",
    precio: 135,
    tipo: "Jabón líquido • 495 ml",
    categoria: "cuidado_corporal",
    subcategoria: "jabon_corporal",
    familia: "Cuidado Corporal",
    imagen: "imagenes/33053.png",
    descripcion:
      "Jabón líquido pensado para la limpieza diaria del cuerpo.",
    caracteristicas:
      "Limpieza práctica y agradable para el uso cotidiano.",
    ideal:
      "Ideal para la higiene diaria de toda la familia."
  },

  {
    nombre: "SENS Herbalis Desodorante Roll-on",
    precio: 60,
    tipo: "Desodorante Roll-on • 55 ml",
    categoria: "cuidado_corporal",
    subcategoria: "desodorante",
    familia: "Cuidado Corporal",
    imagen: "imagenes/36045.png",
    descripcion:
      "Desodorante de uso diario presentado en formato roll-on.",
    caracteristicas:
      "Aplicación práctica y cómoda para la rutina diaria.",
    ideal:
      "Ideal para quienes buscan protección y frescura durante el día."
  },

  {
    nombre: "H-MEN Desodorante Roll-on",
    precio: 60,
    tipo: "Desodorante Roll-on • 55 ml",
    categoria: "cuidado_corporal",
    subcategoria: "desodorante",
    familia: "Cuidado Corporal",
    imagen: "imagenes/45045.png",
    descripcion:
      "Desodorante masculino de uso diario en práctico formato roll-on.",
    caracteristicas:
      "Aplicación sencilla y cómoda para acompañar la rutina diaria.",
    ideal:
      "Ideal para hombres que buscan frescura y practicidad."
  },


  /* =========================
     CUIDADO BUCAL
     ========================= */

  {
    nombre: "PROWHITE Gel Dental",
    precio: 36,
    tipo: "Gel dental • 90 g",
    categoria: "cuidado_bucal",
    subcategoria: "gel_dental",
    familia: "Cuidado Bucal",
    imagen: "imagenes/40000.png",
    descripcion:
      "Gel dental para complementar la rutina diaria de higiene bucal.",
    caracteristicas:
      "Presentación práctica para el cuidado diario de los dientes.",
    ideal:
      "Ideal para complementar la higiene bucal cotidiana."
  },

  {
    nombre: "PROACTIVE Gel Dental Carbón Activado + Aloe Vera",
    precio: 52,
    tipo: "Gel dental • 70 g",
    categoria: "cuidado_bucal",
    subcategoria: "gel_dental",
    familia: "Cuidado Bucal",
    imagen: "imagenes/40006.png",
    descripcion:
      "Gel dental con carbón activado y aloe vera para complementar la higiene bucal.",
    caracteristicas:
      "Combina carbón activado y aloe vera en una presentación práctica.",
    ideal:
      "Ideal para quienes buscan complementar su rutina de higiene bucal."
  },


  /* =========================
     CUIDADO FACIAL
     ========================= */

  {
    nombre: "SENS Jabón Cremoso Facial",
    precio: 100,
    tipo: "Jabón facial • 250 ml",
    categoria: "cuidado_facial",
    subcategoria: "limpieza_facial",
    familia: "Cuidado Facial",
    imagen: "imagenes/36034.png",
    descripcion:
      "Producto de limpieza facial pensado para complementar la rutina diaria de cuidado de la piel.",
    caracteristicas:
      "Textura cremosa y práctica para la limpieza facial.",
    ideal:
      "Ideal para incorporar a una rutina diaria de cuidado facial."
  },

  {
    nombre: "ROUTINE DERMO Booster Efecto Tensor",
    precio: 338,
    tipo: "Tratamiento facial • 30 g",
    categoria: "cuidado_facial",
    subcategoria: "tratamiento_facial",
    familia: "Cuidado Facial",
    imagen: "imagenes/60053.png",
    descripcion:
      "Tratamiento facial pensado para complementar una rutina enfocada en el cuidado de la piel.",
    caracteristicas:
      "Fórmula de tratamiento facial con efecto tensor.",
    ideal:
      "Ideal para complementar rutinas de cuidado facial."
  },

  {
    nombre: "ROUTINE DERMO Ácido Glicólico",
    precio: 200,
    tipo: "Tratamiento facial • 30 ml",
    categoria: "cuidado_facial",
    subcategoria: "tratamiento_facial",
    familia: "Cuidado Facial",
    imagen: "imagenes/60054.png",
    descripcion:
      "Producto facial con ácido glicólico destinado a complementar la rutina de cuidado de la piel.",
    caracteristicas:
      "Tratamiento facial formulado con ácido glicólico.",
    ideal:
      "Ideal para quienes desean complementar su rutina de cuidado facial."
  }

];


/* =========================================================
   ESTADO DEL CATÁLOGO
   ========================================================= */

let currentMainCategory = "all";
let currentFilter = "all";


/* =========================================================
   REFERENCIAS HTML
   ========================================================= */

const perfumeGrid = document.getElementById("perfumeGrid");
const searchInput = document.getElementById("searchInput");

const filterButtonsContainer =
  document.getElementById("filterButtons");

const mainCategoryButtons =
  document.querySelectorAll(".main-category-btn");

const catalogTitle =
  document.getElementById("catalogTitle");

const catalogDescription =
  document.getElementById("catalogDescription");

const subcategoryTitle =
  document.getElementById("subcategoryTitle");


/* =========================================================
   REFERENCIAS DEL MODAL
   ========================================================= */

const productModal =
  document.getElementById("productModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModalButton =
  document.getElementById("closeModal");

const modalProductImage =
  document.getElementById("modalProductImage");

const modalProductFamily =
  document.getElementById("modalProductFamily");

const modalProductName =
  document.getElementById("modalProductName");

const modalProductType =
  document.getElementById("modalProductType");

const modalProductPrice =
  document.getElementById("modalProductPrice");

const modalProductDescription =
  document.getElementById("modalProductDescription");

const modalProductCharacteristics =
  document.getElementById("modalProductCharacteristics");

const modalProductIdeal =
  document.getElementById("modalProductIdeal");

const modalWhatsAppButton =
  document.getElementById("modalWhatsAppButton");


/* =========================================================
   SUBCATEGORÍAS
   ========================================================= */

const subcategories = {

  all: [
    {
      value: "all",
      label: "Todos"
    }
  ],

  perfumeria: [
    {
      value: "all",
      label: "Todos"
    },
    {
      value: "dulce",
      label: "Dulces / Cálidos"
    },
    {
      value: "fresco",
      label: "Frescos / Cítricos"
    },
    {
      value: "floral",
      label: "Florales"
    },
    {
      value: "amaderado",
      label: "Amaderados"
    }
  ],

  cuidado_corporal: [
    {
      value: "all",
      label: "Todos"
    },
    {
      value: "desodorante",
      label: "Desodorantes"
    },
    {
      value: "hidratante",
      label: "Hidratantes"
    },
    {
      value: "jabon_corporal",
      label: "Jabón corporal"
    }
  ],

  cuidado_facial: [
    {
      value: "all",
      label: "Todos"
    },
    {
      value: "limpieza_facial",
      label: "Limpieza facial"
    },
    {
      value: "tratamiento_facial",
      label: "Tratamientos faciales"
    }
  ],

  cuidado_bucal: [
    {
      value: "all",
      label: "Todos"
    },
    {
      value: "gel_dental",
      label: "Gel dental"
    }
  ]

};


/* =========================================================
   OBTENER CATEGORÍA PRINCIPAL
   ========================================================= */

function obtenerCategoriaPrincipal(producto) {

  return producto.categoria || "perfumeria";

}


/* =========================================================
   FORMATEAR PRECIO
   ========================================================= */

function formatearPrecio(precio) {

  return `Bs ${Number(precio).toFixed(0)}`;

}


/* =========================================================
   MOSTRAR SUBCATEGORÍAS
   ========================================================= */

function mostrarSubcategorias(categoriaPrincipal) {

  if (!filterButtonsContainer) {
    return;
  }

  const filtros =
    subcategories[categoriaPrincipal] ||
    subcategories.all;


  filterButtonsContainer.innerHTML = "";


  filtros.forEach((filtro, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.dataset.filter =
      filtro.value;

    button.textContent =
      filtro.label;

    button.className =
      "filter-btn text-xs font-semibold px-4 py-2 rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 hover:border-amber-500 transition duration-300";


    if (index === 0) {

      button.classList.add("active");

    }


    button.addEventListener(
      "click",
      () => {

        currentFilter =
          filtro.value;

        activarBotonFiltro(
          filtro.value
        );

        filterCatalog();

      }
    );


    filterButtonsContainer.appendChild(
      button
    );

  });


  actualizarTitulo();

}


/* =========================================================
   ACTIVAR BOTÓN DE SUBCATEGORÍA
   ========================================================= */

function activarBotonFiltro(valor) {

  const botones =
    document.querySelectorAll(".filter-btn");


  botones.forEach((button) => {

    button.classList.remove("active");

  });


  const botonActivo =
    document.querySelector(
      `.filter-btn[data-filter="${valor}"]`
    );


  if (botonActivo) {

    botonActivo.classList.add("active");

  }

}


/* =========================================================
   ACTIVAR CATEGORÍA PRINCIPAL
   ========================================================= */

function activarCategoriaPrincipal(valor) {

  mainCategoryButtons.forEach(
    (button) => {

      button.classList.remove("active");

    }
  );


  const botonActivo =
    document.querySelector(
      `.main-category-btn[data-category="${valor}"]`
    );


  if (botonActivo) {

    botonActivo.classList.add("active");

  }

}


/* =========================================================
   ACTUALIZAR TÍTULOS
   ========================================================= */

function actualizarTitulo() {

  if (!catalogTitle || !catalogDescription) {
    return;
  }


  const textos = {

    all: {
      titulo: "Catálogo de Productos",
      descripcion:
        "Explora nuestra colección de productos"
    },

    perfumeria: {
      titulo: "Perfumería",
      descripcion:
        "Descubre fragancias para diferentes estilos y ocasiones"
    },

    cuidado_corporal: {
      titulo: "Cuidado Corporal",
      descripcion:
        "Productos para complementar tu rutina de cuidado corporal"
    },

    cuidado_facial: {
      titulo: "Cuidado Facial",
      descripcion:
        "Productos seleccionados para el cuidado de tu piel"
    },

    cuidado_bucal: {
      titulo: "Cuidado Bucal",
      descripcion:
        "Productos para complementar tu rutina de higiene bucal"
    }

  };


  const texto =
    textos[currentMainCategory] ||
    textos.all;


  catalogTitle.textContent =
    texto.titulo;

  catalogDescription.textContent =
    texto.descripcion;


  if (subcategoryTitle) {

    if (currentMainCategory === "all") {

      subcategoryTitle.textContent =
        "Filtrar por tipo";

    } else {

      subcategoryTitle.textContent =
        "Filtrar por tipo";

    }

  }

}


/* =========================================================
   MOSTRAR PRODUCTOS
   ========================================================= */

function mostrarProductos(lista) {

  if (!perfumeGrid) {
    return;
  }


  perfumeGrid.innerHTML = "";


  if (lista.length === 0) {

    perfumeGrid.innerHTML = `

      <div class="col-span-full py-16 text-center">

        <div class="flex justify-center mb-4">

          <div
            class="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center"
          >

            <i
              data-lucide="search-x"
              class="w-6 h-6 text-stone-400"
            ></i>

          </div>

        </div>


        <h3
          class="font-serif text-lg font-bold text-stone-700 mb-2"
        >
          No encontramos productos
        </h3>


        <p class="text-sm text-stone-500">
          Intenta con otro nombre, categoría o código.
        </p>

      </div>

    `;


    if (window.lucide) {
      lucide.createIcons();
    }

    return;

  }


  lista.forEach((producto, index) => {

    const card =
      document.createElement("article");


    card.className =
      "perfume-card group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col h-full";


    card.dataset.category =
      producto.categoria;

    card.dataset.subcategory =
      producto.subcategoria;

    card.dataset.name =
      producto.nombre.toLowerCase();


    card.innerHTML = `

      <!-- Imagen -->

      <div
        class="relative h-64 sm:h-72 overflow-hidden bg-stone-100"
      >

        <img
          src="${producto.imagen}"
          alt="${producto.nombre}"
          class="card-img w-full h-full object-cover object-center"
          loading="${index < 6 ? "eager" : "lazy"}"
          decoding="async"
        >


        <!-- Degradado inferior -->

        <div
          class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
        ></div>


        <!-- Familia -->

        <span
          class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-amber-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-amber-200/70 shadow-sm"
        >
          ${producto.familia}
        </span>

      </div>



      <!-- Información -->

      <div class="flex flex-col flex-1 p-5">


        <!-- Nombre -->

        <h3
          class="font-serif text-lg font-bold text-stone-900 leading-tight mb-1"
        >
          ${producto.nombre}
        </h3>


        <!-- Presentación -->

        <p
          class="text-xs text-stone-500 mb-4"
        >
          ${producto.tipo}
        </p>


        <!-- Descripción -->

        <div class="mb-4">

          <p
            class="text-xs text-stone-600 leading-relaxed line-clamp-3"
          >
            ${producto.descripcion}
          </p>

        </div>


        <!-- Características -->

        <div
          class="mb-5 p-3 rounded-xl bg-stone-50 border border-stone-100"
        >

          <p
            class="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1"
          >
            Características
          </p>

          <p
            class="text-xs text-stone-600 leading-relaxed line-clamp-2"
          >
            ${producto.caracteristicas}
          </p>

        </div>


        <!-- Espacio flexible -->

        <div class="flex-1"></div>


        <!-- Precio -->

        <div
          class="flex items-end justify-between gap-3 mb-4"
        >

          <div>

            <p
              class="text-[10px] uppercase tracking-wider text-stone-400 font-semibold"
            >
              Precio
            </p>

            <p
              class="text-xl font-bold text-amber-800"
            >
              ${formatearPrecio(producto.precio)}
            </p>

          </div>


          <span
            class="inline-flex items-center gap-1 text-[10px] text-green-700 font-semibold bg-green-50 border border-green-200 px-2.5 py-1.5 rounded-full"
          >

            <span
              class="w-1.5 h-1.5 rounded-full bg-green-500"
            ></span>

            Disponible

          </span>

        </div>


        <!-- Botones -->

        <div class="grid grid-cols-2 gap-2">


          <!-- Ver detalles -->

          <button
            type="button"
            class="detail-btn flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:border-amber-500 hover:text-amber-800 hover:bg-amber-50 transition duration-300 text-xs font-semibold"
          >

            <i
              data-lucide="eye"
              class="w-4 h-4"
            ></i>

            Ver detalles

          </button>


          <!-- WhatsApp -->

          <button
            type="button"
            class="ws-btn flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-semibold"
          >

            <i
              data-lucide="message-circle"
              class="w-4 h-4"
            ></i>

            WhatsApp

          </button>

        </div>

      </div>

    `;


    /* ==========================================
       BOTÓN DETALLES
       ========================================== */

    const detailButton =
      card.querySelector(".detail-btn");


    detailButton.addEventListener(
      "click",
      () => {

        abrirModalProducto(producto);

      }
    );


    /* ==========================================
       BOTÓN WHATSAPP
       ========================================== */

    const whatsappButton =
      card.querySelector(".ws-btn");


    whatsappButton.addEventListener(
      "click",
      () => {

        orderViaWhatsApp(producto);

      }
    );


    perfumeGrid.appendChild(card);

  });


  /* Activar iconos */

  if (window.lucide) {
    lucide.createIcons();
  }

}


/* =========================================================
   PEDIDO POR WHATSAPP
   ========================================================= */

function orderViaWhatsApp(producto) {

  const mensaje =
`Hola Loida Puma, me interesa comprar el siguiente producto:

✨ Producto: ${producto.nombre}
💵 Precio: ${formatearPrecio(producto.precio)}
📦 Presentación: ${producto.tipo}

¿Podrías brindarme más información sobre la disponibilidad?`;


  const url =
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   ABRIR MODAL
   ========================================================= */

function abrirModalProducto(producto) {

  if (!productModal) {
    return;
  }


  /* Imagen */

  modalProductImage.src =
    producto.imagen;

  modalProductImage.alt =
    producto.nombre;


  /* Información */

  modalProductFamily.textContent =
    producto.familia;

  modalProductName.textContent =
    producto.nombre;

  modalProductType.textContent =
    producto.tipo;

  modalProductPrice.textContent =
    formatearPrecio(producto.precio);

  modalProductDescription.textContent =
    producto.descripcion;

  modalProductCharacteristics.textContent =
    producto.caracteristicas;

  modalProductIdeal.textContent =
    producto.ideal;


  /* Guardar producto seleccionado */

  modalWhatsAppButton.dataset.productName =
    producto.nombre;


  modalWhatsAppButton.onclick =
    () => {

      orderViaWhatsApp(producto);

    };


  /* Mostrar modal */

  productModal.classList.remove("hidden");


  /* Bloquear scroll de la página */

  document.body.style.overflow =
    "hidden";


  /* Actualizar iconos */

  if (window.lucide) {
    lucide.createIcons();
  }

}


/* =========================================================
   CERRAR MODAL
   ========================================================= */

function cerrarModal() {

  if (!productModal) {
    return;
  }


  productModal.classList.add("hidden");


  document.body.style.overflow =
    "";


  /* Limpiar imagen */

  modalProductImage.src = "";

}


/* =========================================================
   EVENTOS DEL MODAL
   ========================================================= */


/* Botón X */

if (closeModalButton) {

  closeModalButton.addEventListener(
    "click",
    cerrarModal
  );

}


/* Fondo oscuro */

if (modalOverlay) {

  modalOverlay.addEventListener(
    "click",
    cerrarModal
  );

}


/* Tecla ESC */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      productModal &&
      !productModal.classList.contains("hidden")
    ) {

      cerrarModal();

    }

  }
);


/* =========================================================
   FILTRAR CATÁLOGO
   ========================================================= */

function filterCatalog() {

  const query =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";


  const resultados =
    productos.filter((producto) => {


      /* =========================
         CATEGORÍA PRINCIPAL
         ========================= */

      const matchesMainCategory =
        currentMainCategory === "all" ||
        obtenerCategoriaPrincipal(producto) ===
          currentMainCategory;


      /* =========================
         SUBCATEGORÍA
         ========================= */

      const matchesSubcategory =
        currentFilter === "all" ||
        producto.subcategoria ===
          currentFilter;


      /* =========================
         BÚSQUEDA
         ========================= */

      const textoBusqueda = [

        producto.nombre,

        producto.categoria,

        producto.subcategoria,

        producto.familia,

        producto.tipo,

        producto.descripcion,

        producto.caracteristicas

      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        query === "" ||
        textoBusqueda.includes(query);


      return (
        matchesMainCategory &&
        matchesSubcategory &&
        matchesSearch
      );

    });


  mostrarProductos(resultados);

}


/* =========================================================
   EVENTOS DE CATEGORÍAS PRINCIPALES
   ========================================================= */

mainCategoryButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        currentMainCategory =
          button.dataset.category;


        /* Reiniciar subcategoría */

        currentFilter =
          "all";


        /* Activar botón */

        activarCategoriaPrincipal(
          currentMainCategory
        );


        /* Crear nuevos filtros */

        mostrarSubcategorias(
          currentMainCategory
        );


        /* Filtrar */

        filterCatalog();

      }
    );

  }
);


/* =========================================================
   EVENTO DEL BUSCADOR
   ========================================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      filterCatalog();

    }
  );

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* Filtros iniciales */

    mostrarSubcategorias("all");


    /* Título */

    actualizarTitulo();


    /* Productos */

    mostrarProductos(productos);


    /* Crear iconos */

    if (window.lucide) {
      lucide.createIcons();
    }


    console.log(
      `Catálogo cargado correctamente: ${productos.length} productos`
    );

  }
);

