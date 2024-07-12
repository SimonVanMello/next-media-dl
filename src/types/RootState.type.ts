import reduxStore from '@app/app/store';

export type RootState = ReturnType<typeof reduxStore.store.getState>;
