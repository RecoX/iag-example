import { useState } from "react";
import Step1SelectAsset from "../components/CreateClaimWizard/Step1SelectAsset/Step1SelectAsset";
import Step2Disclaimer from "../components/CreateClaimWizard/Step2Disclaimer/Step2Disclaimer";
import Step3IncidentTime from "../components/CreateClaimWizard/Step3IncidentTime/Step3IncidentTime";
import Step4IncidentType from "../components/CreateClaimWizard/Step4IncidentType/Step4IncidentType";
import Step5FullIncidentForm from "../components/CreateClaimWizard/Step5FullIncidentForm/Step5FullIncidentForm";
import GlassClaim from "../components/CreateClaimWizard/GlassClaim/GlassClaim";
import { useNavigate } from 'react-router-dom';

function CreateClaim() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Shared state between steps
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [meridiem, setMeridiem] = useState("AM");
  const [incidentType, setIncidentType] = useState("");
  const [showGlassClaim, setShowGlassClaim] = useState(false);

  // Asset to choose from (mocked for now)
  const asset = {
    id: 1,
    title: "Comprehensive Car Insurance",
    subtitle: "2017 Mercedes-Benz Sprinter ABC123",
    policyNumber: "MOTS00579123",
  };

  const handleChange = (field, value) => {
    if (field === "date") setIncidentDate(value);
    if (field === "time") setIncidentTime(value);
    if (field === "meridiem") setMeridiem(value);
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const addClaim = (newClaim) => {
    const existing = JSON.parse(localStorage.getItem("activeClaims")) || [];
    localStorage.setItem(
      "activeClaims",
      JSON.stringify([...existing, newClaim])
    );
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Make a Claim</h1>
      <div className="text-sm text-gray-500 mb-4">Step {step} of 5</div>

      {step === 1 && (
        <Step1SelectAsset
          asset={asset}
          onSelect={(asset) => {
            setSelectedAsset(asset);
            handleNext();
          }}
        />
      )}

      {step === 2 && selectedAsset && (
        <Step2Disclaimer onBack={handleBack} onNext={handleNext} />
      )}

      {step === 3 && (
        <Step3IncidentTime
          date={incidentDate}
          time={incidentTime}
          meridiem={meridiem}
          onChange={handleChange}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}

      {step === 4 && !showGlassClaim && (
        <Step4IncidentType
          selected={incidentType}
          onSelect={(val) => {
            setIncidentType(val);
            setShowGlassClaim(val === "glass");
          }}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}

      {step === 4 && showGlassClaim && (
        <GlassClaim
          onBack={() => {
            setShowGlassClaim(false);
            setIncidentType("");
            setStep(4); // ✅ Explicitly restore step 4
          }}
        />
      )}

      {step === 5 && (
        <Step5FullIncidentForm
          onBack={handleBack}
          onSubmit={() => {
            addClaim({
              id: Date.now(),
              title: selectedAsset?.subtitle || "Untitled Vehicle",
              type: "Motor insurance claim",
              status: "Open claim",
            });
            alert("🎉 Claim submitted successfully!");
            navigate('/');
          }}
        />
      )}
    </main>
  );
}

export default CreateClaim;
