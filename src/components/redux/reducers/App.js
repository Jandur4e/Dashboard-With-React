// import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    decrementByTwo,
    increment,
    incrementByTwo,
    reset,
} from "../actions/actions";
import Header from "../../header/header";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="display-output">
            <Header />
            <h1>Count</h1>
            <div className="wrapper">
                <div>
                    <h1>
                        Hello World <br /> A little Redux Project. YaaY!
                    </h1>
                    <h3>Counter</h3>
                    <h3>{counter}</h3>
                    <button onClick={() => dispatch(increment(1))}>Increase</button>
                    <button onClick={() => dispatch(incrementByTwo(2))}>Increase by 2</button>
                    <button onClick={() => dispatch(reset())}>Reset</button>
                    <button onClick={() => dispatch(decrement(1))}>Decrease</button>
                    <button onClick={() => dispatch(decrementByTwo(2))}>Decrease by 2</button>
                </div>
            </div>
        </div>
    );
}

export default App;