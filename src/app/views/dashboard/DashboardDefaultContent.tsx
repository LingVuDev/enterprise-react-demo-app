import { Theme, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { getSalesAxios } from 'services/saleService';
import styled from 'styled-components';
import Page from 'app/components/Page';
import { Card, CardContent, Grid, Box, Container } from '@mui/material';
import Chart from 'react-apexcharts';

const Root = styled(Page)`
  :root {
    height: 100%;
  }
`;

const getChartStyling = (theme: Theme): ApexCharts.ApexOptions => ({
  chart: {
    background: theme.palette.background.paper,
    toolbar: {
      show: false,
    },
  },
  colors: ['#13affe', '#fbab49'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: theme.palette.divider,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: true,
    labels: {
      colors: theme.palette.text.secondary,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  theme: {
    mode: theme.palette.mode,
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
});

const DashboardDefaultContent = () => {
  const theme = useTheme();
  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();
    setSales(data);
  };

  return (
    <Root title="Dashboard">
      <Container maxWidth={'sm'}>
        <Box my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Chart
                    options={getChartStyling(theme)}
                    series={sales}
                    type="bar"
                    height={'100%'}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Root>
  );
};

export default DashboardDefaultContent;
