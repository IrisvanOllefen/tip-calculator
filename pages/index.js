function HomePage() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <form>
        <label>How much was your bill?</label>
        <input type="number"/>
        <label>How was the service?</label>
        <select name="service">
          <option value="-">Choose an option</option>
          <option value="-">30% - Outstanding</option>
          <option value="-">20% - Good</option>
          <option value="-">15% - OK</option>
          <option value="-">10% - Bad</option>
          <option value="-">5% - Terrible</option>
        </select>
        <input type="submit" value="Calculate"/>
      </form>
      <h2>You should tip (result)</h2>
    </div>
  )
}

export default HomePage
