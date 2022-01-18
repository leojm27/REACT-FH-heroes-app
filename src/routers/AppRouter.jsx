import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/*<Route path="/login" element={<LoginScreen />} />*/}

                {<Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />}

                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

                {/*<Route path="/*" element={<DashboardRoutes />} />*/}

            </Routes>
        </BrowserRouter>
    )
}
