import './Dice.css'
import React, { Component } from 'react'

export default class Dice extends Component {

    getRandom(dice) {
        const diceValue = document.querySelector(`.dice-value${this.props.value}`)
        const criticalValue = document.querySelector(`.critical${this.props.value}`)
        
        const result = Math.floor(Math.random() * dice + 1)

        if(result === 1) {
            diceValue.textContent = result
            criticalValue.textContent = 'Erro Crítico!'
            diceValue.style.color = 'red'
            criticalValue.style.color = 'red'
            return 
        }

        if(dice === result) {
            diceValue.textContent = result
            criticalValue.textContent = 'Acerto Crítico!'
            diceValue.style.color = 'green'
            criticalValue.style.color = 'green'
            return 
        }

        diceValue.textContent = result
        criticalValue.textContent = null
        diceValue.style.color = null
        criticalValue.style.color = null
        return
    }

    render() {
        return (
            <div className="dice-content">
                <div className="img-dice">
                    <img src={this.props.img} alt={this.props.label} />
                </div>
                <div className="dice">
                    <h3>{this.props.label}</h3>
                    <input type="button" value="Roll" onClick={() => this.getRandom(this.props.value)}/>
                </div>
                <div className="results">
                    <span className={"dice-value" + this.props.value}></span>
                    <span className={"critical" + this.props.value}></span>
                </div>
            </div>
        )
    }
}