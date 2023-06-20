import { useAppContext } from './Context';

function App() {
  const { count } = useAppContext()
  
  console.log(count);

  return (
    <>
     Number: {count}
    </>
  )
}


export default App
