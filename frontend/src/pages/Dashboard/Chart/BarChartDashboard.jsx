import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartDashboard = ({ data }) => {
  return (
    <ResponsiveContainer className="text-white mb-2" width="100%" height="100%">
      <BarChart width={500} height={300} data={data} tick={{ fill: 'text-[#FFFFFF]' }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month"  tick={{ fill: 'white' }} />
        <YAxis tick={{ fill: 'white' }}/>
        <Tooltip />
        <Bar dataKey="expenditure" fill="#F99F24" name="Expenditure" />
        <Bar dataKey="earning" fill="#FFFF" name="Earnings" />
      </BarChart>
      </ResponsiveContainer>
  );
};

export default BarChartDashboard;
