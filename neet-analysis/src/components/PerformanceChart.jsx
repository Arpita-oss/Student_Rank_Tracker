import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { apiResponse } from "../data";

const PerformanceChart = () => {
  const data = apiResponse.performance_analysis.topic_wise_performance.map((item) => ({
    topic: item.topic,
    accuracy: parseInt(item.accuracy),
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-3">Topic-Wise Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="accuracy" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
