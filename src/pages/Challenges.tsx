
import { useState } from "react";
import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

interface Badge {
  id: number;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
}

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Отжимания 10x3",
      description: "Выполни 3 подхода по 10 отжиманий",
      points: 15,
      completed: false
    },
    {
      id: 2,
      title: "Растяжка 20 минут",
      description: "Выполняй растяжку по видеоуроку 20 минут",
      points: 10,
      completed: false
    },
    {
      id: 3,
      title: "Изучение новых бросков",
      description: "Пройди урок и попрактикуй новую технику бросков",
      points: 25,
      completed: false
    }
  ]);

  const badges: Badge[] = [
    {
      id: 1,
      name: "За прогресс",
      icon: "🥇",
      description: "Выполни 5 челленджей",
      earned: true
    },
    {
      id: 2,
      name: "Старание",
      icon: "🥈",
      description: "Тренируйся 3 дня подряд",
      earned: true
    },
    {
      id: 3,
      name: "Победитель",
      icon: "🥉",
      description: "Выиграй свой первый спарринг",
      earned: false
    }
  ];

  const totalPoints = 80;
  const completeChallenge = (id: number) => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === id ? { ...challenge, completed: true } : challenge
      )
    );
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-4 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-sport-dark flex items-center gap-2">
              Челленджи и награды <span className="text-sport-orange">🏆</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Зарабатывай баллы и получай медали за активность
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
            <Trophy className="text-sport-orange mr-2" />
            <span className="font-bold text-xl">{totalPoints} баллов</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-sport-dark mt-8 mb-4">
            Активные челленджи
          </h2>
          
          {challenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              onComplete={completeChallenge} 
            />
          ))}

          <h2 className="text-xl font-semibold text-sport-dark mt-12 mb-4">
            Твои награды
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ChallengeCardProps {
  challenge: Challenge;
  onComplete: (id: number) => void;
}

const ChallengeCard = ({ challenge, onComplete }: ChallengeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{challenge.title}</h3>
            <p className="text-gray-600 mb-3">{challenge.description}</p>
          </div>
          <div className="bg-orange-100 text-sport-orange font-semibold rounded-full px-3 py-1 text-sm">
            +{challenge.points} баллов
          </div>
        </div>
        
        <Button 
          onClick={() => onComplete(challenge.id)}
          disabled={challenge.completed}
          className={`w-full ${challenge.completed ? 'bg-green-500 hover:bg-green-500' : 'bg-sport-blue hover:bg-blue-600'}`}
        >
          {challenge.completed ? "Выполнено ✓" : "Выполнить"}
        </Button>
      </div>
    </Card>
  );
};

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard = ({ badge }: BadgeCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg text-center hover-scale card-shadow">
      <div className="text-6xl mb-3">{badge.icon}</div>
      <h3 className="font-bold text-lg mb-1">{badge.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{badge.description}</p>
      <div className={`text-sm font-medium px-3 py-1 rounded-full ${badge.earned ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
        {badge.earned ? 'Получено' : 'Не получено'}
      </div>
    </div>
  );
};

export default Challenges;
