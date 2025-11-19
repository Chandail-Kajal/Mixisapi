import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, CartesianAxis, Dot } from "recharts";


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

    <AreaChart className="h-full w-full " style={{}} responsive data={data}>
      <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #D1D5DB",
          borderRadius: "8px",
        }}
        labelStyle={{ color: "#000000" ,
           fontSize: "16px",
        }} 
        itemStyle={{ color: "#22C55E",
          fontWeight: "bold",
          fontSize: "16px"
        }} 
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#22C55E"
        strokeWidth={3}
        fill="url(#colorGreen)"
        dot={{ r: 4, fill: "#22C55E" }}
        isAnimationActive={true}
        animationDuration={1500}
        animationBegin={0}
      />
      <defs>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity={0.5} />
          <stop offset="80%" stopColor="#ffffff" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </AreaChart>

  );

};


export default Chart;