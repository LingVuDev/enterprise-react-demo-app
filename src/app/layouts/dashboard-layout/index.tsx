import DashboardSidebarNavigation from './DashboardSidebarNavigation';
import Grid from '@mui/material/Grid';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation />
      {children}
    </Grid>
  );
};

export default DashboardLayout;
