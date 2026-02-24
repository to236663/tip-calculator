import { useState } from 'react';

function TipCalculator() {
  const [billDigits, setBillDigits] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [total, setTotal] = useState(null);
  const [perPerson, setPerPerson] = useState(null);
  const [errors, setErrors] = useState({});

  const formatBill = (digits) => {
    if (!digits) return '';
    return (parseInt(digits, 10) / 100).toFixed(2);
  };

  const handleBillChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '');
    setBillDigits(digits);
    setTotal(null);
    setPerPerson(null);
    setErrors((prev) => ({ ...prev, bill: undefined }));
  };

  const calculateTotal = () => {
    const billAmount = billDigits === '' ? NaN : parseInt(billDigits, 10) / 100;
    const tip = parseFloat(tipPercent);
    const people = parseInt(numPeople, 10);

    const newErrors = {};
    if (isNaN(billAmount) || billDigits === '') newErrors.bill = 'Please enter a valid bill amount.';
    if (isNaN(tip) || tipPercent === '') newErrors.tip = 'Please enter a valid tip percentage.';
    if (numPeople !== '' && (isNaN(people) || people <= 0 || String(people) !== String(parseFloat(numPeople)))) {
      newErrors.numPeople = 'Number of people must be a whole number greater than zero.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const grandTotal = billAmount + billAmount * (tip / 100);
    setTotal(grandTotal.toFixed(2));
    if (!isNaN(people) && people > 0) {
      setPerPerson((grandTotal / people).toFixed(2));
    } else {
      setPerPerson(null);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      backgroundColor: '#273b2b',
    }}>
    <div style={{
      width: '90%',
      maxWidth: '500px',
      fontFamily: 'sans-serif',
      fontSize: '1.2rem',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Tip Calculator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '1.2rem' }}>Bill Amount ($):</label>
        <input
          type="text"
          inputMode="numeric"
          value={formatBill(billDigits)}
          onChange={handleBillChange}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
        {errors.bill && <p style={{ color: '#ff6b6b', margin: '6px 0 0', fontSize: '0.95rem', textAlign: 'left' }}>{errors.bill}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '1.2rem' }}>Tip Percentage (%):</label>
        <input
          type="number"
          value={tipPercent}
          onChange={(e) => { setTipPercent(e.target.value); setTotal(null); setPerPerson(null); setErrors((prev) => ({ ...prev, tip: undefined })); }}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
        {errors.tip && <p style={{ color: '#ff6b6b', margin: '6px 0 0', fontSize: '0.95rem', textAlign: 'left' }}>{errors.tip}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '1.2rem' }}>Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => { setNumPeople(e.target.value); setTotal(null); setPerPerson(null); setErrors((prev) => ({ ...prev, numPeople: undefined })); }}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
        {errors.numPeople && <p style={{ color: '#ff6b6b', margin: '6px 0 0', fontSize: '0.95rem', textAlign: 'left' }}>{errors.numPeople}</p>}
      </div>
      <button onClick={calculateTotal} style={{ padding: '14px 28px', fontSize: '1.1rem', cursor: 'pointer' }}>
        Calculate
      </button>
      {total !== null && (
        <div style={{ marginTop: '25px', fontSize: '1.5rem' }}>
          <p style={{ margin: '0 0 10px' }}>
            Total: <strong>${total}</strong>
          </p>
          {perPerson !== null && (
            <p style={{ margin: 0 }}>
              Per Person: <strong>${perPerson}</strong>
            </p>
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default TipCalculator;
