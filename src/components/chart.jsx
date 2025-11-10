import {
 
  AreaChart,
 
  Area,
 
  XAxis,
 
  YAxis,
 
  CartesianGrid,
 
  Tooltip,
 
  CartesianAxis,
 
  Dot,
 
} from "recharts";
 
 
const data = [
 
  {
 
    name: "Jan",
 
    value: 20,
 
  },
 
  {
 
    name: "Feb",
 
    value: 30,
 
  },
 
  {
 
    name: "Mar",
 
    value: 45,
 
  },
 
  {
 
    name: "Apr",
 
    value: 55,
 
  },
 
  {
 
    name: "May",
 
    value: 70,
 
  },
 
  {
 
    name: "Jun",
 
    value: 82,
 
  },
 
  {
 
    name: "Jul",
 
    value: 91,
 
  },
 
  {
 
    name: "Aug",
 
    value: 98,
 
  },
 
];
 
 
const Chart = () => {
 
  return (
 
    <AreaChart className="h-full w-full" style={{}} responsive data={data}>
 
      <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
 
      <XAxis dataKey="name" />
 
      <Tooltip />
 
      <Area type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={3} fill="#22C55E">
 
        <Dot radius={5}  />
 
      </Area>
 
    </AreaChart>
 
  );
 
};
 
 
export default Chart;