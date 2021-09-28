import React from 'react';
import Grid from '@mui/material/Grid';
import DashboardSidebarNavigation from './DashboardSidebarNavigation';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation /> {children}
    </Grid>
  );
};

export default Dashboard;
