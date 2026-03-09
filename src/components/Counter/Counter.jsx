import { useReducer } from 'react';
import styles from './Counter.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Counter</h1>
            <p className={styles.countDisplay}>{state.count}</p>
            <div className={styles.buttonGroup}>
                <button
                    className={`${styles.button} ${styles.decrementBtn}`}
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>
                <button
                    className={`${styles.button} ${styles.incrementBtn}`}
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;
