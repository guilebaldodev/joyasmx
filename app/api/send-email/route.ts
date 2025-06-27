import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { nombre, apellidos, correo, telefono, mensaje } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: correo,
      to: process.env.GMAIL_USER,
      subject: `Contacto desde TorosMX - ${nombre} ${apellidos}`,
      text: `
        Nombre: ${nombre}
        Apellidos: ${apellidos}
        Correo: ${correo}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
              `.trim(),
            };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Correo enviado con éxito",
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Hubo un error al enviar el correo",
      },
      { status: 500 }
    );
  }
}
