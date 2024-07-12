import { useSelector } from 'react-redux';

import { RootState } from '@app/types/RootState.type';

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
