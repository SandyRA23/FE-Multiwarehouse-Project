import React from 'react';
import { Box } from '../styles/box';
import Chart, { Props } from 'react-apexcharts';

// Example product data for statistics
const state: Props['series'] = [
  {
    name: 'Smartphone',
    data: [150, 180, 210, 250, 300, 350, 400], // Smartphone sales or quantity data
  },
  {
    name: 'Monitor',
    data: [80, 100, 120, 140, 160, 180, 200], // Monitor sales or quantity data
  },
  {
    name: 'Laptop',
    data: [200, 220, 250, 280, 320, 350, 400], // Laptop sales or quantity data
  },
  {
    name: 'Smartwatch',
    data: [50, 70, 90, 110, 140, 170, 200], // Smartwatch sales or quantity data
  },
  {
    name: 'Headphone',
    data: [100, 130, 160, 180, 220, 240, 280], // Headphone sales or quantity data
  },
  {
    name: 'Tablet',
    data: [120, 140, 180, 200, 240, 280, 320], // Tablet sales or quantity data
  },
];

const options: Props['options'] = {
  chart: {
    type: 'area',
    animations: {
      easing: 'linear',
      speed: 300,
    },
    sparkline: {
      enabled: false,
    },
    brush: {
      enabled: false,
    },
    id: 'product-statistics',
    fontFamily: 'Inter, sans-serif',
    foreColor: 'var(--nextui-colors-accents9)',
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Months or time period
    labels: {
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif',
      },
    },
    axisBorder: {
      color: 'var(--nextui-colors-border)',
    },
    axisTicks: {
      color: 'var(--nextui-colors-border)',
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  tooltip: {
    enabled: true, // Show tooltip on hover for product statistics
    shared: true,
    y: {
      formatter: (value: number) => `$${value}`, // Formatter for tooltips
    },
  },
  grid: {
    show: true,
    borderColor: 'var(--nextui-colors-border)',
    strokeDashArray: 0,
    position: 'back',
  },
  stroke: {
    curve: 'smooth',
    fill: {
      colors: ['#FF5733', '#33C1FF'], // Colors for Product A and B
    },
  },
  markers: false,
};

export const Steam = () => {
  return (
    <Box
      css={{
        width: '100%',
        zIndex: 5,
      }}
    >
      <div id="chart">
        <Chart options={options} series={state} type="area" height={425} />
      </div>
    </Box>
  );
};
