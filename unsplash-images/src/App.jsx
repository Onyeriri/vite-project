import { useGlobalContext } from '../context/context';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';
import SearchForm from './components/searchForm';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';



const App = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <div id='main'>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools />
        <ToastContainer position='top-center'/>
    </div>
  );
};
export default App;
