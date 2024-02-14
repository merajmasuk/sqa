import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const AreaDashboard = ({data}) => {
 
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip />
          <Area type="monotone" dataKey="expenditure" stackId="1" stroke="#FFFF" fill="#FFFF" />
          <Area type="monotone" dataKey="earning" stackId="1" stroke="#F99F24" fill="#F99F24" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#FFFF" fill="#FFFF" />
        </AreaChart>
      </ResponsiveContainer>
    );
};

export default AreaDashboard;