import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log("Testing Resend API with key:", process.env.RESEND_API_KEY ? "Key exists" : "No key found")

    const { data, error } = await resend.emails.send({
      from: "Psy-boks <noreply@psy-boks.nl>",
      to: ["imad-77@live.nl"],
      subject: "Test Email",
      html: "<p>This is a test email to verify the Resend API is working.</p>",
    })

    if (error) {
      console.error("Error sending test email:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Error in test-email route:", error)
    return NextResponse.json({ success: false, error: error?.message || "Unknown error" }, { status: 500 })
  }
}
