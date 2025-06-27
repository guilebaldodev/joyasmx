"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { jewelryCatalog, Product } from "@/consts";
import ProductCard from "../ui/Product";

export default function Home() {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre la joyeria.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;



  return (
    <>
    
    <div className={styles['landing-page']}>

      <div className={styles['hero-container']}>
<div className={styles['hero-texts']}>
  <h1>
    Eleva tu estilo con <span className={styles['primary-color']}>Joyería Elegante</span>
  </h1>
  <h3>
    En Joyas MX encontrarás piezas únicas para cada ocasión: regalos especiales, aniversarios, eventos o para brillar todos los días. Diseños exclusivos y atención personalizada.
  </h3>
  <Link href="/catalogo">Ver catálogo</Link>
</div>

        <div className={styles['hero-image']}>
          <Image src="/home/hero.png" alt="Hero" width={400} height={400} style={{width:"100%",height:'auto'}} />
        </div>
      </div>

<div className={styles['category-container']}>

  <div className={styles['category-item']}>
    <Image src="/home/anillo.png" alt="Anillos" width={40} height={40} />
    <p>Anillos</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/collar.png" alt="Collares" width={40} height={40} />
    <p>Collares</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/pulsera.png" alt="Pulseras" width={40} height={40} />
    <p>Pulseras</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/arete.png" alt="Aretes" width={40} height={40} />
    <p>Aretes</p>
  </div>

</div>



      <div className={styles['landing-products']}>
        <div className={styles['landing-products-title']}>
          <h3>Nuestros mejores productos</h3>
        </div>
        <div className={styles['landing-products-container']}>
          {jewelryCatalog && jewelryCatalog.map((product:Product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>


<div className={styles['about-us-testimonials']}>
  <div className={styles['about-us-titles']}>
    <h3>Testimonios</h3>
    <h4>Conoce la experiencia de quienes han confiado en la calidad de nuestras joyas</h4>
  </div>
</div>

<div className={styles['about-testimonial-grid']}>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person3.jpg" 
          alt="Imagen de usuario José Hernández" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>José Hernández</h3>
      <h4>Cliente</h4>
      <p>
        <q>Pedí un anillo como regalo y quedó increíble. El empaque y el diseño superaron lo que imaginaba.</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Diciembre 2024</strong></p>
      <p>13:05 pm</p>
    </div>
  </div>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person.jpg" 
          alt="Imagen de usuario Lucía Ramírez" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>Lucía Ramírez</h3>
      <h4>Cliente</h4>
      <p>
        <q>Me enamoré del collar que compré. Lo uso todos los días y siempre recibo cumplidos. Excelente atención.</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Marzo 2024</strong></p>
      <p>09:30 am</p>
    </div>
  </div>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person2.webp" 
          alt="Imagen de usuario Raúl García" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>Raúl García</h3>
      <h4>Cliente</h4>
      <p>
        <q>Compré unos aretes para el cumpleaños de mi mamá y le encantaron. La presentación es muy elegante.</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Abril 2024</strong></p>
      <p>14:45 pm</p>
    </div>
  </div>

</div>


 
<div className={styles['fill-banner']}>
  <h3>
    Joyería <span className={styles['primary-color']}>Personalizada</span>
  </h3>
  <p>
    Haz tus ideas realidad con nuestras piezas personalizadas. Elige el diseño, el material y el detalle especial, 
    y nosotros lo creamos para ti. Atención directa por WhatsApp para que tu pedido sea justo como lo imaginaste.
  </p>

  <a 
    href={whatsAppURL}
    target="_blank" 
    rel="noopener noreferrer"
  >
    ¡Haz tu pedido por WhatsApp!
  </a>
</div>




    </div>
    
    </>
  );
}
