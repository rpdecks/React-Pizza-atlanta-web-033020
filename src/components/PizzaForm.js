import React from "react"
// import PizzaList from "../containers/PizzaList"

const PizzaForm = props => {
  let pizzaId = props.id
  return(
    <div
      className="form-row"
    >
      <div className="col-5">
          <input type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={props.topping}
              onChange={(e) => props.handleToppingChange(e.target.value)}
            />
      </div>
      <div className="col">
        <select 
          value={props.size} 
          className="form-control"
          onChange={(e) => props.handleSizeChange(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            value="Vegetarian" 
            checked={props.vegetarian}
            onChange={(e) => props.handleVegetarianChange(e.target.value)}
          />
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            value="Not Vegetarian" 
            checked={!props.vegetarian}
            onChange={(e) => props.handleVegetarianChange(e.target.value)}
          />
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button 
          type="submit" 
          className="btn btn-success" 
          onClick={() => props.submitPizzaEdit(props, pizzaId)}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default PizzaForm
