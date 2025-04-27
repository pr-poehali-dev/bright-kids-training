import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Video, MessageSquare, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ScheduleWidget from "@/components/ScheduleWidget";

const Index = () => {
  const [studentName] = useState("Максим");
  
  const quickLinks = [
    { 
      to: "/materials", 
      label: "Учебные материалы", 
      icon: <BookOpen size={24} />,
      color: "bg-sport-blue"
    },
    { 
      to: "/videos", 
      label: "Видеозадания", 
      icon: <Video size={24} />,
      color: "bg-sport-orange"
    },
    { 
      to: "/messages", 
      label: "Сообщения", 
      icon: <MessageSquare size={24} />,
      color: "bg-green-500"
    },
    { 
      to: "/challenges", 
      label: "Челленджи", 
      icon: <Award size={24} />,
      color: "bg-purple-500"
    },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="animate-scale-in">
            <h1 className="text-3xl md:text-4xl font-bold text-sport-dark">
              Привет, {studentName}! 👋
            </h1>
            <p className="text-gray-600 mt-2">
              Что будем изучать сегодня?
            </p>
          </div>
          <div className="bg-sport-yellow text-sport-dark font-bold py-1 px-3 rounded-full text-sm flex items-center">
            80 баллов 🏆
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {quickLinks.map((link, index) => (
            <Link to={link.to} key={index}>
              <Card className="card-shadow h-full">
                <div className="flex items-center p-6 gap-4">
                  <div className={`${link.color} p-3 rounded-full text-white`}>
                    {link.icon}
                  </div>
                  <div className="font-semibold text-lg">{link.label}</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="card-shadow p-6 h-full">
              <h2 className="font-bold text-xl mb-4">Последние достижения</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-sport-orange p-2 rounded-full">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Техника борьбы</p>
                    <p className="text-sm text-gray-600">3 новых упражнения освоено</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-sport-blue p-2 rounded-full">
                    <Video className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Первое видеозадание</p>
                    <p className="text-sm text-gray-600">Отправлено и одобрено тренером</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/progress" className="btn-primary inline-block">
                  Посмотреть весь прогресс
                </Link>
              </div>
            </Card>
          </div>
          <div className="animate-bounce-slow">
            <ScheduleWidget />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
