import { useState, useEffect } from 'react';

function Step3IncidentTime({ date, time, meridiem, onChange, onBack, onNext }) {
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  useEffect(() => {
    if (dateError) validateDate(date);
    if (timeError) validateTime(time);
  }, [date, time]);

  const validateDate = (value) => {
    const selected = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected > today) {
      setDateError('The date of the incident cannot be in the future.');
      return false;
    }
    setDateError('');
    return true;
  };

  const validateTime = (value) => {
    const match = value.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) {
      setTimeError('Please enter a valid time (HH:MM).');
      return false;
    }

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);

    if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
      setTimeError('Please enter a valid time (1–12 hours, 00–59 minutes).');
      return false;
    }

    setTimeError('');
    return true;
  };

  const formatTimeInput = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}:${digits.slice(2)}`;
    return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
  };

  const handleNextClick = () => {
    const isDateValid = validateDate(date);
    const isTimeValid = validateTime(time);
    if (isDateValid && isTimeValid) {
      onNext();
    }
  };

  return (
    <section className="p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-xl font-bold">When did the incident happen?</h2>

      <div>
        <label className="block font-semibold mb-1">Select a date</label>
        <input
          type="date"
          className={`border rounded px-3 py-2 w-full max-w-xs ${
            dateError ? 'border-red-500' : 'border-gray-300'
          }`}
          value={date}
          onChange={(e) => onChange('date', e.target.value)}
          onBlur={(e) => validateDate(e.target.value)}
        />
        {dateError && <p className="text-red-600 text-sm mt-1">{dateError}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Around what time did the incident happen?</label>
        <div className="flex space-x-2 max-w-xs">
          <input
            type="text"
            placeholder="HH:MM"
            className={`border rounded px-3 py-2 w-28 text-center ${
              timeError ? 'border-red-500' : 'border-gray-300'
            }`}
            value={time}
            onChange={(e) => onChange('time', formatTimeInput(e.target.value))}
            onBlur={(e) => validateTime(e.target.value)}
          />
          {['AM', 'PM'].map((val) => (
            <button
              key={val}
              className={`border rounded px-4 py-2 ${
                meridiem === val ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
              onClick={() => onChange('meridiem', val)}
              type="button"
            >
              {val}
            </button>
          ))}
        </div>
        {timeError && <p className="text-red-600 text-sm mt-1">{timeError}</p>}
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border rounded text-sm" onClick={onBack}>
          ← Back
        </button>
        <button
          className="bg-gray-900 text-white px-6 py-2 rounded font-semibold"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Step3IncidentTime;
