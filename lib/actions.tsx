"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface RegistrationFormData {
  parentName: string
  parentEmail: string
  parentPhone: string
  childName: string
  childAge: string
  concerns: string
  heardFrom: string
  additionalInfo: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { name, email, phone, message } = data

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #00a0bc; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #00a0bc; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nieuw Contactbericht</h1>
              <p>BoksBalance Contact Formulier</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Naam:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telefoon:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Bericht:</div>
                <div class="value">${message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    await resend.emails.send({
      from: "BoksBalance <noreply@boksbalance.nl>",
      to: "boksbalance@outlook.com",
      replyTo: email,
      subject: `Nieuw contactbericht van ${name}`,
      html: emailHtml,
    })

    return { success: true, message: "Bericht succesvol verzonden!" }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return { success: false, message: "Er ging iets mis bij het verzenden van het bericht." }
  }
}

export async function sendRegistrationEmail(data: RegistrationFormData) {
  try {
    const { parentName, parentEmail, parentPhone, childName, childAge, concerns, heardFrom, additionalInfo } = data

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #00a0bc; margin-bottom: 15px; border-bottom: 2px solid #00a0bc; padding-bottom: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #00a0bc; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nieuwe Aanmelding</h1>
              <p>BoksBalance Aanmeldformulier</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Ouder/Verzorger Gegevens</div>
                <div class="field">
                  <div class="label">Naam:</div>
                  <div class="value">${parentName}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${parentEmail}</div>
                </div>
                <div class="field">
                  <div class="label">Telefoon:</div>
                  <div class="value">${parentPhone}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Jongere Gegevens</div>
                <div class="field">
                  <div class="label">Naam:</div>
                  <div class="value">${childName}</div>
                </div>
                <div class="field">
                  <div class="label">Leeftijd:</div>
                  <div class="value">${childAge}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Aanvullende Informatie</div>
                <div class="field">
                  <div class="label">Belangrijkste zorgen/uitdagingen:</div>
                  <div class="value">${concerns}</div>
                </div>
                <div class="field">
                  <div class="label">Hoe heeft u over ons gehoord?</div>
                  <div class="value">${heardFrom}</div>
                </div>
                ${
                  additionalInfo
                    ? `
                <div class="field">
                  <div class="label">Extra informatie:</div>
                  <div class="value">${additionalInfo}</div>
                </div>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    await resend.emails.send({
      from: "BoksBalance <noreply@boksbalance.nl>",
      to: "boksbalance@outlook.com",
      replyTo: parentEmail,
      subject: `Nieuwe aanmelding: ${childName}`,
      html: emailHtml,
    })

    return { success: true, message: "Aanmelding succesvol verzonden!" }
  } catch (error) {
    console.error("Error in sendRegistrationEmail:", error)
    return { success: false, message: "Er ging iets mis bij het verzenden van de aanmelding." }
  }
}
