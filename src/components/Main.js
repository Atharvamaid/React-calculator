import React , {Component} from 'react';

class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            output : "",
            history : "", 
            
        }

        this.handleInput = this.handleInput.bind(this);
        
    }

    handleInput(value){
        if(value==""){
            this.setState({
                output : value,
                history : value
            });
        }
        else if(value=="+" || value=="-" || value=="*" || value=="/"){
            this.setState({
                history : this.state.output,
                output : value
            });
        }
        else if (value == "="){
            const x = eval(this.state.history + this.state.output);
            this.setState({
                history : this.state.history + this.state.output,
                output : x
            });
        }
        else{
            this.setState({
                output : this.state.output + value
            });
        }
        
    }

    render()
    {
        return(
            <div className="cont bg-dark">
                    <div className="Output-panel">
                        <div className="history">
                        <p id="hist">{this.state.history}</p>
                        </div>
                        <div className="output">
                        <p id="inp">{this.state.output}</p>
                        </div>
                    </div>
                    <div className="keyboard">
                    <button className="operator" id="c" onClick={(value)=>this.handleInput("")}>C</button>
                    <button className="operator" id="ce">CE</button>
                    <button className="operator" id="%" onClick={(value)=>this.handleInput("%")}>%</button>
                    <button className="operator" id="/" onClick={(value)=>this.handleInput("/")}>/</button>
                    <button className="number" id="7" onClick={(value)=>this.handleInput("7")}>7</button>
                    <button class="number" id="8" onClick={(value)=>this.handleInput("8")}>8</button>
                    <button class="number" id="9" onClick={(value)=>this.handleInput("9")}>9</button>
                    <button class="operator" id="*" onClick={(value)=>this.handleInput("*")}>&times;</button>
                    <button class="number" id="4" onClick={(value)=>this.handleInput("4")}>4</button>
                    <button class="number" id="5" onClick={(value)=>this.handleInput("5")}>5</button>
                    <button class="number" id="6" onClick={(value)=>this.handleInput("6")}>6</button>
                    <button class="operator" id="-" onClick={(value)=>this.handleInput("-")}>-</button>
                    <button class="number" id="1" onClick={(value)=>this.handleInput("1")}>1</button>
                    <button class="number" id="2" onClick={(value)=>this.handleInput("2")}>2</button>
                    <button class="number" id="3" onClick={(value)=>this.handleInput("3")}>3</button>
                    <button class="operator" id="+" onClick={(value)=>this.handleInput("+")}>+</button>
                    <button class="empty" id="empty"></button>
                    <button class="number" id="0" onClick={(value)=>this.handleInput("0")}>0</button>
                    <button class="empty" id="empty"></button>
                    <button class="operator" id="=" onClick={(value)=>this.handleInput("=")}>=</button>
                    </div>
            </div>
        );
    }
}
export default Main;