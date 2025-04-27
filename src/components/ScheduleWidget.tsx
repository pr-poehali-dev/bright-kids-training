import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TrainingSchedule {
  day: string;
  time: string;
  type: string;
}

const ScheduleWidget = () => {
  const schedule: TrainingSchedule[] = [
    { day: "Понедельник", time: "16:00", type: "Основная тренировка" },
    { day: "Среда", time: "16:30", type: "Техника бросков" },
    { day: "Пятница", time: "17:00", type: "Спарринг" },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="bg-sport-blue text-white p-4 flex items-center gap-2">
        <Calendar size={20} />
        <h3 className="font-bold">Расписание тренировок</h3>
      </div>
      <div className="p-4">
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <div>
              <p className="font-bold">{item.day}</p>
              <p className="text-sm text-gray-600">{item.type}</p>
            </div>
            <div className="text-sport-blue font-bold">{item.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ScheduleWidget;
