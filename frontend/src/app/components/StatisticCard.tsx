import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";

interface StatisticCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  count,
  icon,
}) => {
  return (
    <Card className="p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-white text-gray-900">
      <CardHeader className="flex flex-col items-center">
        <div className="p-4 rounded-full bg-gray-200">{icon}</div>
        <CardTitle className="text-xl font-semibold mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <p className="text-5xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
