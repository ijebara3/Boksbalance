"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { sendRegistrationEmail } from "@/lib/actions"

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const isMobile = useMobile()

  const [formData, setFormData] = useState({
    // Section 1: Personal information
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    address: "",
    postalCode: "",
    city: "",
    phoneYouth: "",
    emailYouth: "",

    // Section 2: Parent/Guardian information
    parentName: "",
    parentPhone: "",
    parentEmail: "",

    // Section 3: Practical information
    school: "",
    currentCare: "",
    livingArrangement: "",
    referrerName: "",
    referrerRole: "",

    // Section 4: Reason for registration
    currentIssues: "",
    expectations: "",
    previousPrograms: "",

    // Section 5: Medical information
    physicalLimitations: "",
    medication: "",
    diagnosis: "",

    // Section 6: Additional information
    additionalInfo: "",

    // Privacy agreement
    privacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send registration email via server action
      const result = await sendRegistrationEmail(formData)

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          birthDate: "",
          gender: "",
          address: "",
          postalCode: "",
          city: "",
          phoneYouth: "",
          emailYouth: "",
          parentName: "",
          parentPhone: "",
          parentEmail: "",
          school: "",
          currentCare: "",
          livingArrangement: "",
          referrerName: "",
          referrerRole: "",
          currentIssues: "",
          expectations: "",
          previousPrograms: "",
          physicalLimitations: "",
          medication: "",
          diagnosis: "",
          additionalInfo: "",
          privacy: false,
        })
        setCurrentStep(1)
      } else {
        setError(result.error || "Er is iets misgegaan. Probeer het later opnieuw.")
      }
    } catch (err) {
      setError("Er is iets misgegaan. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const steps = [
    { number: 1, title: "Persoonsgegevens" },
    { number: 2, title: "Ouder/verzorger" },
    { number: 3, title: "Praktische info" },
    { number: 4, title: "Hulpvraag" },
    { number: 5, title: "Medische info" },
    { number: 6, title: "Overige info" },
  ]

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Aanmelding verzonden!</h3>
        <p className="text-muted-foreground mb-6 mobile-text">
          Bedankt voor je aanmelding. We hebben je gegevens ontvangen en nemen zo snel mogelijk contact met je op via{" "}
          <strong>boksbalance@outlook.com</strong>.
        </p>
        <Button onClick={() => setIsSuccess(false)} className="mobile-touch-target">
          Nieuwe aanmelding
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.3 : 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 relative">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    currentStep >= step.number ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.number}
                </div>
                <span className="text-xs mt-1 text-center hidden md:block">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 md:top-5 left-1/2 w-full h-0.5 ${
                    currentStep > step.number ? "bg-primary" : "bg-gray-200"
                  }`}
                  style={{ transform: "translateY(-50%)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Persoonsgegevens jongere</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="mobile-touch-target">
                  Voornaam *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 mobile-touch-target"
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="mobile-touch-target">
                  Achternaam *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 mobile-touch-target"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="birthDate" className="mobile-touch-target">
                Geboortedatum *
              </Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label className="mobile-touch-target">Geslacht *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => handleSelectChange("gender", value)}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2 mobile-touch-target">
                  <RadioGroupItem value="man" id="man" />
                  <Label htmlFor="man" className="mobile-text">
                    Man
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mobile-touch-target">
                  <RadioGroupItem value="vrouw" id="vrouw" />
                  <Label htmlFor="vrouw" className="mobile-text">
                    Vrouw
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mobile-touch-target">
                  <RadioGroupItem value="anders" id="anders" />
                  <Label htmlFor="anders" className="mobile-text">
                    Anders
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="address" className="mobile-touch-target">
                Adres *
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="postalCode" className="mobile-touch-target">
                  Postcode *
                </Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 mobile-touch-target"
                />
              </div>

              <div>
                <Label htmlFor="city" className="mobile-touch-target">
                  Woonplaats *
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 mobile-touch-target"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phoneYouth" className="mobile-touch-target">
                Telefoonnummer jongere
              </Label>
              <Input
                id="phoneYouth"
                name="phoneYouth"
                type="tel"
                value={formData.phoneYouth}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="emailYouth" className="mobile-touch-target">
                E-mailadres jongere
              </Label>
              <Input
                id="emailYouth"
                name="emailYouth"
                type="email"
                value={formData.emailYouth}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Parent/Guardian Information */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Gegevens ouder/verzorger</h2>

            <div>
              <Label htmlFor="parentName" className="mobile-touch-target">
                Naam ouder/verzorger *
              </Label>
              <Input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="parentPhone" className="mobile-touch-target">
                Telefoonnummer ouder/verzorger *
              </Label>
              <Input
                id="parentPhone"
                name="parentPhone"
                type="tel"
                value={formData.parentPhone}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="parentEmail" className="mobile-touch-target">
                E-mailadres ouder/verzorger *
              </Label>
              <Input
                id="parentEmail"
                name="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>
          </motion.div>
        )}

        {/* Step 3: Practical Information */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Praktische informatie</h2>

            <div>
              <Label htmlFor="school" className="mobile-touch-target">
                School / dagbesteding *
              </Label>
              <Input
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="currentCare" className="mobile-touch-target">
                Huidige hulpverlening
              </Label>
              <Input
                id="currentCare"
                name="currentCare"
                value={formData.currentCare}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="livingArrangement" className="mobile-touch-target">
                Woonbegeleiding / gezinsvorm *
              </Label>
              <Select
                value={formData.livingArrangement}
                onValueChange={(value) => handleSelectChange("livingArrangement", value)}
              >
                <SelectTrigger className="mt-1 mobile-touch-target">
                  <SelectValue placeholder="Selecteer een optie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thuis">Thuis bij ouders</SelectItem>
                  <SelectItem value="pleegzorg">Pleegzorg</SelectItem>
                  <SelectItem value="gezinshuis">Gezinshuis</SelectItem>
                  <SelectItem value="begeleidwonen">Begeleid wonen</SelectItem>
                  <SelectItem value="zelfstandig">Zelfstandig</SelectItem>
                  <SelectItem value="anders">Anders</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="referrerName" className="mobile-touch-target">
                Naam verwijzer
              </Label>
              <Input
                id="referrerName"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="referrerRole" className="mobile-touch-target">
                Rol verwijzer (bijv. mentor, gezinsbegeleider)
              </Label>
              <Input
                id="referrerRole"
                name="referrerRole"
                value={formData.referrerRole}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>
          </motion.div>
        )}

        {/* Step 4: Reason for Registration */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Reden van aanmelding / hulpvraag</h2>

            <div>
              <Label htmlFor="currentIssues" className="mobile-touch-target">
                Waar loopt de jongere momenteel tegenaan? *
              </Label>
              <Textarea
                id="currentIssues"
                name="currentIssues"
                value={formData.currentIssues}
                onChange={handleChange}
                required
                className="mt-1 min-h-[120px] mobile-touch-target"
                placeholder="Beschrijf de uitdagingen en problemen waar de jongere mee te maken heeft"
              />
            </div>

            <div>
              <Label htmlFor="expectations" className="mobile-touch-target">
                Wat zijn de verwachtingen van BoksBalance? *
              </Label>
              <Textarea
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                required
                className="mt-1 min-h-[120px] mobile-touch-target"
                placeholder="Wat hoopt u/jij dat BoksBalance kan betekenen voor de jongere?"
              />
            </div>

            <div>
              <Label htmlFor="previousPrograms" className="mobile-touch-target">
                Zijn er eerdere trajecten gevolgd? Zo ja, welke?
              </Label>
              <Textarea
                id="previousPrograms"
                name="previousPrograms"
                value={formData.previousPrograms}
                onChange={handleChange}
                className="mt-1 min-h-[120px] mobile-touch-target"
                placeholder="Beschrijf eerdere hulpverleningstrajecten of programma's"
              />
            </div>
          </motion.div>
        )}

        {/* Step 5: Medical Information */}
        {currentStep === 5 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Medische aandachtspunten / bijzonderheden</h2>

            <div>
              <Label htmlFor="physicalLimitations" className="mobile-touch-target">
                Zijn er fysieke beperkingen of medische aandachtspunten?
              </Label>
              <Textarea
                id="physicalLimitations"
                name="physicalLimitations"
                value={formData.physicalLimitations}
                onChange={handleChange}
                className="mt-1 min-h-[100px] mobile-touch-target"
                placeholder="Bijv. astma, blessures, motorische problemen"
              />
            </div>

            <div>
              <Label htmlFor="medication" className="mobile-touch-target">
                Gebruikt de jongere medicatie? Zo ja, welke?
              </Label>
              <Textarea
                id="medication"
                name="medication"
                value={formData.medication}
                onChange={handleChange}
                className="mt-1 min-h-[100px] mobile-touch-target"
                placeholder="Noem de medicatie en dosering indien van toepassing"
              />
            </div>

            <div>
              <Label htmlFor="diagnosis" className="mobile-touch-target">
                Zijn er psychische diagnoses bekend? (bijv. ADHD, ASS, angststoornis)
              </Label>
              <Textarea
                id="diagnosis"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                className="mt-1 min-h-[100px] mobile-touch-target"
                placeholder="Beschrijf eventuele diagnoses"
              />
            </div>
          </motion.div>
        )}

        {/* Step 6: Additional Information */}
        {currentStep === 6 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Overige informatie / opmerkingen</h2>

            <div>
              <Label htmlFor="additionalInfo" className="mobile-touch-target">
                Is er nog iets dat belangrijk is om te weten?
              </Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 min-h-[150px] mobile-touch-target"
                placeholder="Voeg hier eventuele aanvullende informatie toe"
              />
            </div>

            <div className="flex items-start space-x-2 mobile-touch-target pt-4">
              <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleCheckboxChange} required />
              <Label htmlFor="privacy" className="text-sm mobile-text">
                Ik ga akkoord met het privacybeleid en de verwerking van de ingevoerde gegevens. *
              </Label>
            </div>
          </motion.div>
        )}

        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="mobile-touch-target bg-transparent"
          >
            Vorige
          </Button>

          {currentStep < 6 ? (
            <Button type="button" onClick={nextStep} className="mobile-touch-target">
              Volgende
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="mobile-touch-target">
              {isSubmitting ? "Verzenden..." : "Verzenden"}
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  )
}
