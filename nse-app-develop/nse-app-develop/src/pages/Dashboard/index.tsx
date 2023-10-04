import React from 'react';
import { PageHeader } from '../../lib/components';
import HourTraffic from './components/HourTraffic';
import { OverallReport } from './components/OverallReport';
import DeliverabilityGraph from '../../lib/containers/DeliverabilityGraph';
import RejectTypes from './components/RejectTypes';
import TrafficCount from './components/TrafficCount';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard" />
      <div className="w-full flex space-x-3">
        <div className="space-y-3">
          <TrafficCount />
          <RejectTypes />
          <HourTraffic />
        </div>
        <div className="flex-grow space-y-3">
          <OverallReport />
          <DeliverabilityGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
