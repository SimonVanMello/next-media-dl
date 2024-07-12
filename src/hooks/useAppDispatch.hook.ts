import { useDispatch } from 'react-redux';

import { AppDispatch } from '@app/types/AppDispatch.type';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
