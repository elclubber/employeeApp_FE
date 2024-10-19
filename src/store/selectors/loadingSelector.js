import { createSelector } from 'reselect';
import { selectIsAuthLoading } from './authSelector';
import { selectEmployeeIsLoading } from './employeeSelector';

// Combined loading selector using reselect
export const selectIsAppLoading = createSelector(
    [selectIsAuthLoading, selectEmployeeIsLoading],
    (authLoading, employeeLoading) => authLoading || employeeLoading // If any is loading, return true
);
