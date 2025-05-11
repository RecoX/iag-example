import { useState } from 'react';
import { AccidentContextSection } from './sections/AccidentContextSection';
import { IncidentLocationSection } from './sections/IncidentLocationSection';
import { WitnessSection } from './sections/WitnessSection';
import { PoliceSection } from './sections/PoliceSection';
import { DamageSection } from './sections/DamageSection';
import { DriverSection } from './sections/DriverSection';
import { CriminalHistorySection } from './sections/CriminalHistorySection';
import { ContactSection } from './sections/ContactSection';

function Step5FullIncidentForm({ onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    wasParked: '',
    someoneInDriverSeat: '',
    accidentInvolved: '',
    address: '',
    locationDetails: '',
    witnessStatus: '',
    policeStatus: '',
    whatHappened: '',
    vehicleDamaged: '',
    damageDescription: '',
    safeToDrive: '',
    usedForBusiness: '',
    hasModifications: '',
    driver: '',
    licenceType: '',
    licenceHeldDuration: '',
    driverOffences: [],
    drugsOrAlcohol: '',
    mainContact: '',
    criminalOffenceHistory: '',
    pastVehicleClaims: '',
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFinalSubmit = () => {
    // TODO: Validate if required, then send
    console.log('🚗 Submitting claim:', formData);
    onSubmit();
  };

  return (
    <form className="p-6 bg-white shadow rounded space-y-10">
      <h2 className="text-2xl font-bold">Tell us about the incident</h2>

      <AccidentContextSection data={formData} update={updateField} />
      <IncidentLocationSection data={formData} update={updateField} />
      <WitnessSection data={formData} update={updateField} />
      <PoliceSection data={formData} update={updateField} />
      <DamageSection data={formData} update={updateField} />
      <DriverSection data={formData} update={updateField} />
      <CriminalHistorySection data={formData} update={updateField} />
      <ContactSection data={formData} update={updateField} />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border rounded text-sm">
          ← Back
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
        >
          Submit Claim
        </button>
      </div>
    </form>
  );
}

export default Step5FullIncidentForm;
