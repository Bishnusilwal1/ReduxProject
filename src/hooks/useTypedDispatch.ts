import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

const useTypedDispatch = () => useDispatch<AppDispatch>();

export default useTypedDispatch;
