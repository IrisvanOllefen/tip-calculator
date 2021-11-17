import {  useState } from 'react'

function HomePage() {

  const [billAmount, setBillAmount] = useState('')
  const [serviceRate, setServiceRate] = useState('')
  const [peopleAmount, setPeopleAmount] = useState('')
  const [result, setResult] = useState('')
  const [dividedResult, setDividedResult] = useState('')
  const [total, setTotal] = useState()
  const [dividedTotal, setDividedTotal] = useState('')


  function calculateTip(event) {
    event.preventDefault()
    
    if (billAmount === '' || serviceRate == 0 || billAmount === '') {
      alert("Please enter values")
    } else {
      result = billAmount * serviceRate
      setResult(result)
      const resultInt = parseInt(result)
      const billAmountInt = parseInt(billAmount)
      total = resultInt + billAmountInt
      setTotal(total)
        if (peopleAmount === '' || peopleAmount <= 1) {
          peopleAmount = 1
        } else {
          dividedResult = (resultInt) / peopleAmount
          setDividedResult(dividedResult)
          dividedTotal = (total) / peopleAmount
          setDividedTotal(dividedTotal) 
          return dividedResult
        }
      return result, dividedResult, total
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
          <option value="0.3">Outstanding</option>
          <option value="0.2">Good</option>
          <option value="0.15">OK</option>
          <option value="0.1">Bad</option>
          <option value="0.05">Terrible</option>
        </select>
        <label>How much people are sharing the bill?</label>
        <input type="number" className="people-input" onChange={(event) => setPeopleAmount(event.target.value)}/>
        <input type="submit" value="Calculate" className="calculate-button" />
      </form>
      <h2 className="result">You should tip {result ? result + ' euros' : '...'}</h2>
      <h3 className="result-people">Per person, this would mean {dividedResult ? dividedResult + ' euros' : '...'}</h3>
      <h2 className="total">So your total would be {total ? total + ' euros' : '...'}</h2>
      <h3 className="total-people">Per person, your total would be {dividedTotal ? dividedTotal + ' euros' : '...'}</h3>
    </div>
  )
}

export default HomePage
