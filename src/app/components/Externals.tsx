import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const Externals = ({ children }:any) => 
{
    return (
        <Suspense 
            fallback="loading...."
        >
            <ErrorBoundary fallback={<div>Oh no</div>}>
                { children }
            </ErrorBoundary>
        </Suspense>
    )
}
