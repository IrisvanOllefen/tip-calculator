function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Tip Calculator</h1>
      <form>
        <label>How much was your bill?</label>
        <input type="number" className="price-input"/>
        <label>How was the service?</label>
        <select name="service" className="service-input">
          <option value="-">Choose an option</option>
          <option value="-">30% - Outstanding</option>
          <option value="-">20% - Good</option>
          <option value="-">15% - OK</option>
          <option value="-">10% - Bad</option>
          <option value="-">5% - Terrible</option>
        </select>
        <input type="submit" value="Calculate" className="calculate-button" />
      </form>
      <h2 className="result">You should tip (result)</h2>
    </div>
  )
}

export default HomePage
