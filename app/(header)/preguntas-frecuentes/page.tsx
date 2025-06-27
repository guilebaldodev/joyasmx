import AccordionItem from "@/app/ui/AccordionItem";

const faqData = [
  {
    question: '¿Cómo puedo hacer un pedido en Joyas MX?',
    answer: 'Selecciona la pieza que más te guste y haz clic en "Haz tu pedido". Serás redirigido a un chat de WhatsApp donde coordinaremos diseño, envío y forma de pago.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos pagos mediante transferencia bancaria, tarjetas de débito/crédito y depósitos en OXXO. Puedes elegir tu método durante la conversación por WhatsApp.',
  },
  {
    question: '¿Realizan envíos a domicilio?',
    answer: 'Sí, enviamos a todo México. Consulta con nosotros por WhatsApp para confirmar disponibilidad y costo de envío a tu zona.',
  },
  {
    question: '¿Puedo pedir una joya personalizada?',
    answer: 'Sí, puedes elegir materiales, grabados o detalles especiales. Escríbenos por WhatsApp y haremos tu diseño a la medida.',
  },
  {
    question: '¿Con cuánta anticipación debo hacer mi pedido?',
    answer: 'Para piezas personalizadas recomendamos hacer tu pedido con al menos 3 a 5 días de anticipación. Para productos en stock, el envío puede ser más rápido.',
  },
  {
    question: '¿Tienen garantía en sus productos?',
    answer: 'Sí, todas nuestras piezas cuentan con garantía de calidad. Si tu joya llega dañada o presenta fallas, contáctanos para darte solución inmediata.',
  },
  {
    question: '¿Puedo incluir empaque para regalo?',
    answer: '¡Claro! Todas nuestras joyas se entregan en estuches elegantes, y puedes pedir una dedicatoria o empaque especial sin costo extra.',
  },
  {
    question: '¿De qué materiales están hechas las joyas?',
    answer: 'Trabajamos con acero inoxidable, plata, chapa de oro y otros materiales según el diseño. Cada producto indica claramente el material utilizado.',
  },
];

const QuestionPage = () => {
  return (
    <>
      <div className="questions-container">
        <h2>Preguntas Frecuentes</h2>
        <p className="question-p">
          Esta sección está pensada para que resuelvas las dudas más comunes de tus compradores: tiempos de entrega, pagos, personalizaciones y más.
          <br />
          <br />
          Puedes editar libremente estas preguntas desde tu panel de administración. 
          Si no sabes por dónde empezar, puedes usar las preguntas de esta demo como base.
          <br />
          <br />
          Responder anticipadamente genera confianza y mejora la experiencia de compra en Joyas MX.
        </p>

        <div className="questions-list">
          <div className="accordion">
            {faqData.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
