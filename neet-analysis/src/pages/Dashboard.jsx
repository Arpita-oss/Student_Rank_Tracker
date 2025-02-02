import PerformanceChart from "../components/PerformanceChart";
import CollegeList from "../components/CollegeList";
import RankPrediction from "../components/RankPrediction";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">NEET Rank Predictor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RankPrediction />
          <PerformanceChart />
          <CollegeList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
