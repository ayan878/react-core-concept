import { useContext } from 'react'
import { myContext } from './MyContext';

function MyComponent() {
    const {count , setCount}=useContext(myContext)
  return (
    <div>
      <div>
        <h1>Context api</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div />
      </div>
    </div>
  );
}

export default MyComponent