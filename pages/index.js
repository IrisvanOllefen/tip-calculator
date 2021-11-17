import {  useState } from 'react'

function HomePage() {

  const [billAmount, setBillAmount] = useState('')
  const [serviceRate, setServiceRate] = useState('')
  const [result, setResult] = useState('')
  const [total, setTotal] = useState()


  function calculateTip(event) {
    event.preventDefault()
    
    if (billAmount === '' || serviceRate == 0) {
      alert("Please enter values")
    } else {
      result = billAmount * serviceRate
      setResult(result)
      const resultInt = parseInt(result)
      const billAmountInt = parseInt(billAmount)
      total = resultInt + billAmountInt
      setTotal(total)
      return result, total
    }
  }

  return (
    <div className="container">
      <h1 className="title">Tip Calculator</h1>
      <form method="get" onSubmit={calculateTip}>
        <label>How much was your bill?</label>
        <input type="number" className="price-input" onChange={(event) => setBillAmount(event.target.value)} value={billAmount} />
        <label>How was the service?</label>
        <select name="service" className="service-input" onChange={(event) => setServiceRate(event.target.value)} value={serviceRate}>
          <option value="-">Choose an option</option>
          <option value="0.3">30% - Outstanding</option>
          <option value="0.2">20% - Good</option>
          <option value="0.15">15% - OK</option>
          <option value="0.1">10% - Bad</option>
          <option value="0.05">5% - Terrible</option>
        </select>
        <input type="submit" value="Calculate" className="calculate-button" />
      </form>
      <h2 className="result">You should tip {result ? result + ' euros' : '...'}</h2>
      <h2 className="total">So your total would be {total ? total + ' euros' : '...'}</h2>
    </div>
  )
}

export default HomePage
