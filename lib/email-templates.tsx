interface ContactFormEmailProps {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactFormEmail({ name, email, phone, message }: ContactFormEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #06b6d4 100%)",
          color: "white",
          padding: "30px",
          textAlign: "center",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <h1>Nieuw Contactbericht</h1>
        <p>BoksBalance Contact Formulier</p>
      </div>
      <div style={{ background: "#f9fafb", padding: "30px", borderRadius: "0 0 10px 10px" }}>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold", color: "#00a0bc", marginBottom: "5px" }}>Naam:</div>
          <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
            {name}
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold", color: "#00a0bc", marginBottom: "5px" }}>Email:</div>
          <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
            {email}
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold", color: "#00a0bc", marginBottom: "5px" }}>Telefoon:</div>
          <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
            {phone}
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold", color: "#00a0bc", marginBottom: "5px" }}>Bericht:</div>
          <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}

interface RegistrationFormEmailProps {
  parentName: string
  parentEmail: string
  parentPhone: string
  childName: string
  childAge: string
  concerns: string
  heardFrom: string
  additionalInfo?: string
}

export function RegistrationFormEmail({
  parentName,
  parentEmail,
  parentPhone,
  childName,
  childAge,
  concerns,
  heardFrom,
  additionalInfo,
}: RegistrationFormEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #06b6d4 100%)",
          color: "white",
          padding: "30px",
          textAlign: "center",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <h1>Nieuwe Aanmelding</h1>
        <p>BoksBalance Aanmeldformulier</p>
      </div>
      <div style={{ background: "#f9fafb", padding: "30px", borderRadius: "0 0 10px 10px" }}>
        <div style={{ marginBottom: "25px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#00a0bc",
              marginBottom: "15px",
              borderBottom: "2px solid #00a0bc",
              paddingBottom: "5px",
            }}
          >
            Ouder/Verzorger Gegevens
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Naam:</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {parentName}
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Email:</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {parentEmail}
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Telefoon:</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {parentPhone}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#00a0bc",
              marginBottom: "15px",
              borderBottom: "2px solid #00a0bc",
              paddingBottom: "5px",
            }}
          >
            Jongere Gegevens
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Naam:</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {childName}
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Leeftijd:</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {childAge}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#00a0bc",
              marginBottom: "15px",
              borderBottom: "2px solid #00a0bc",
              paddingBottom: "5px",
            }}
          >
            Aanvullende Informatie
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>
              Belangrijkste zorgen/uitdagingen:
            </div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {concerns}
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Hoe heeft u over ons gehoord?</div>
            <div style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}>
              {heardFrom}
            </div>
          </div>
          {additionalInfo && (
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontWeight: "bold", color: "#555", marginBottom: "5px" }}>Extra informatie:</div>
              <div
                style={{ background: "white", padding: "10px", borderRadius: "5px", borderLeft: "3px solid #00a0bc" }}
              >
                {additionalInfo}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
