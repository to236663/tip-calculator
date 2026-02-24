import { useState } from 'react';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [total, setTotal] = useState(null);
  const [perPerson, setPerPerson] = useState(null);

  const calculateTotal = () => {
    const billAmount = parseFloat(bill);
    const tip = parseFloat(tipPercent);
    const people = parseInt(numPeople, 10);
    if (isNaN(billAmount) || isNaN(tip)) return;
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
      backgroundColor: '#003300',
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
          type="number"
          value={bill}
          onChange={(e) => { setBill(e.target.value); setTotal(null); setPerPerson(null); }}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '1.2rem' }}>Tip Percentage (%):</label>
        <input
          type="number"
          value={tipPercent}
          onChange={(e) => { setTipPercent(e.target.value); setTotal(null); setPerPerson(null); }}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '1.2rem' }}>Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => { setNumPeople(e.target.value); setTotal(null); setPerPerson(null); }}
          style={{ display: 'block', width: '100%', padding: '12px', marginTop: '8px', fontSize: '1.1rem', boxSizing: 'border-box' }}
        />
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
