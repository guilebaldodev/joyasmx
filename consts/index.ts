import {jewelryDescription } from "./description";

export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  anterior?: number;
  img: string[] ;
  categoria: string;
}



export const jewelryCatalog: Product[] = [
  // RAMOS
  {
    id: 1,
    titulo: "Anillo de compromiso con diamante",
    descripcion: jewelryDescription,
    precio: 28000,
    anterior: 25000,
    img: [
      "/products/flowers/product-1/product-1-1.webp",
      "/products/flowers/product-1/product-1-2.webp",
    ],
    categoria: "Anillos",
  },
  {
    id: 2,
    titulo: "Anillo de compromiso con diamante 0.17",
    descripcion: jewelryDescription,
    precio: 20500,
    img: [
      "/products/flowers/product-2/product-2-1.webp",
      "/products/flowers/product-2/product-2-2.webp",
    ],
    categoria: "Anillos",
  },
  {
    id: 3,
    titulo: "Argolla de matrimonio diseño clásico",
    descripcion: jewelryDescription,
    precio: 10500,
    img: [
      "/products/flowers/product-3/product-3-1.webp",
    ],
    categoria: "Anillos",
  },
  {
    id: 4,
    titulo: "Argolla de matrimonio diseño media caña lisa",
    descripcion: jewelryDescription,
    precio: 11600,
    img: [
      "/products/flowers/product-4/product-4-1.webp",
      "/products/flowers/product-4/product-4-2.webp",
    ],
    categoria: "Anillos",
  },

  // FLOREROS
  {
    id: 5,
    titulo: "Pulsera de oro 10 k acabado pulido",
    descripcion: jewelryDescription,
    precio: 3200,
    img: [
      "/products/flowers/product-5/product-5-1.avif",
      "/products/flowers/product-5/product-5-2.avif",
    ],
    categoria: "Pulseras",
  },
  {
    id: 6,
    titulo: "Esclava de Oro 10K gucci Oro",
    descripcion: jewelryDescription,
    precio: 4600,
    img: [
      "/products/flowers/product-6/product-6-1.webp",
      "/products/flowers/product-6/product-6-2.webp",
    ],
    categoria: "Pulseras",
  },
  {
    id: 7,
    titulo: "Arracadas diseño especial en oro amarillo",
    descripcion: jewelryDescription,
    precio: 15000,
    anterior: 13000,
    img: [
      "/products/flowers/product-7/product-7-1.webp",
      "/products/flowers/product-7/product-7-2.webp",
    ],
    categoria: "Aretes",
  },
  {
    id: 8,
    titulo: "Dos arracadas hechuras diferentes en oro dos tonos",
    descripcion: jewelryDescription,
    precio: 9800,
    img: [
      "/products/flowers/product-8/product-8-1.webp",
    ],
    categoria: "Aretes",
  },

  // ROSAS
  {
    id: 9,
    titulo: "GARGANTILLA ORO 14K",
    descripcion: jewelryDescription,
    precio: 4900,
    img: [
      "/products/flowers/product-9/product-9-1.webp",
    ],
    categoria: "Collares",
  },

  // CAJAS DE REGALO
  {
    id: 10,
    titulo: "CADENA CON DIJE CORAZON INFLADO ORO ROSA 14K",
    descripcion: jewelryDescription,
    precio: 10500,
    img: [
      "/products/flowers/product-10/product-10-1.webp",
    ],
    categoria: "Collares",
  },
];


export const categoryOptions = [
  { value: "Anillos", label: "Anillos" },
  { value: "Collares", label: "Collares" },
  { value: "Pulseras", label: "Pulseras" },
  { value: "Aretes", label: "Aretes" },
];

export const jewelrySales = [
  {
    id: 1,
    titulo: "Anillo de compromiso con diamante",
    descripcion: "Anillos",
    precio: 28000,
    img: "/products/flowers/product-1/product-1-1.webp",
    estado: "pagado",
    fecha: "05/06/2025",
    color: "green",
  },
  {
    id: 5,
    titulo: "Pulsera de oro 10 k acabado pulido",
    descripcion: "Esclavas",
    precio: 3200,
    img: "/products/flowers/product-5/product-5-1.avif",
    estado: "pagado",
    fecha: "06/06/2025",
    color: "green",
  },
  {
    id: 7,
    titulo: "Arracadas diseño especial en oro amarillo",
    descripcion: "Aretes",
    precio: 15000,
    img: "/products/flowers/product-7/product-7-1.webp",
    estado: "pendiente",
    fecha: "06/06/2025",
    color: "gold",
  },
  {
    id: 10,
    titulo: "CADENA CON DIJE CORAZON INFLADO ORO ROSA 14K",
    descripcion: "Collares",
    precio: 10500,
    img: "/products/flowers/product-10/product-10-1.webp",
    estado: "cancelado",
    fecha: "07/06/2025",
    color: "red",
  },
];

export const jewelryCategories = [
  {
    nombre: "Anillos",
    productos: 4,
  },
  {
    nombre: "Esclavas",
    productos: 2,
  },
  {
    nombre: "Aretes",
    productos: 2,
  },
  {
    nombre: "Collares",
    productos: 2,
  },
];


export const salesBarChart={
    options:{
        chart: {
            id: 'basic-bar',
            toolbar: { show: false },
            background:"#fff"
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          },
          yaxis: {
            min: 0,
            max: 100,  
          },
          dataLabels: {
            enabled: true,
            position:"top",
            offsetY:-22,
      
            style: {
              colors: ['black'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          plotOptions: {
            bar: {
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },
          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#0071DC'],  // Colores de las barras
          },
          tooltip: {
            enabled: true,  // Oculta los tooltips
          },
    },
    series:[
        {
          name: 'Ventas',
          data: [45, 88, 23, 56, 74, 19, 67, 42, 90, 33, 21, 58],  // Datos de las barras
        },
      ],
}

export const salesPieChart = {
  options: {
    chart: {
      type: "pie",
    },
  labels: ['Anillos', 'Collares', 'Pulseras', 'Aretes'],  
    colors: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'], // Colores personalizados más vibrantes
    legend: {
      position: "top", // Coloca los labels arriba del gráfico
      horizontalAlign: "center",
    }
  },
  
  series: [30, 45, 20, 60] // Datos representando productos vendidos por cada categoría
};


export const salesLineChart = {
  options: {
    chart: {
      type: "line",
    },

    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Meses abreviados
    },
    stroke: {
      curve: "smooth", // Líneas suaves
      width: [4, 4, 4, 4] // Grosor de cada línea
    },
    markers: {
      size: 4, // Tamaño de los puntos en las líneas
    },
    colors: ['#1E90FF', '#32CD32', '#FF8C00', '#8A2BE2'], // Colores personalizados para cada categoría
    legend: {
      position: "top",
      horizontalAlign: "center",
    }
  },
  

  series: [
    {
      name: "Pulseras",
      data: [32, 45, 38, 60, 50, 47, 65, 55, 70, 40, 62, 75] // Ventas mensuales para "Toro"
    },
    {
      name: "Anillos",
      data: [23, 28, 22, 34, 29, 51, 40, 57, 30, 69, 52, 63] // Ventas mensuales para "Inflables"
    },
    {
      name: "Collares",
      data: [12, 15, 20, 18, 30, 25, 43, 37, 42, 38, 55, 50] // Ventas mensuales para "Accesorios"
    },
    {
      name: "Aretes",
      data: [27, 30, 45, 35, 55, 52, 63, 60, 65, 50, 42, 72] // Ventas mensuales para "Refacciones"
    }
  ]
  

};