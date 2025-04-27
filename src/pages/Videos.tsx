import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Check, Search } from "lucide-react";

interface VideoExercise {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  completed: boolean;
}

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [exercises, setExercises] = useState<VideoExercise[]>([
    {
      id: 1,
      title: "Отработка прямого удара",
      description: "Техника правильного прямого удара с отработкой на груше",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1590056115085-b8b50c815fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      completed: false,
    },
    {
      id: 2,
      title: "Боковой удар: основы",
      description: "Правильная постановка корпуса и техника бокового удара",
      duration: "4:20",
      thumbnail: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      completed: true,
    },
    {
      id: 3,
      title: "Защитная стойка",
      description: "Как принять правильную защитную стойку и блокировать удары",
      duration: "5:15",
      thumbnail: "https://images.unsplash.com/photo-1600959359869-63e477901752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      completed: false,
    },
    {
      id: 4,
      title: "Разминка перед тренировкой",
      description: "Комплекс упражнений для правильной разминки перед занятием",
      duration: "6:10",
      thumbnail: "https://images.unsplash.com/photo-1601805825132-5d7bbf977c35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      completed: false,
    },
  ]);

  const toggleCompleted = (id: number) => {
    setExercises(
      exercises.map((exercise) =>
        exercise.id === id
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      )
    );
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Видеозадания</h1>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Поиск упражнения..."
              className="pl-10 pr-4 py-2 rounded-full border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">Все упражнения</TabsTrigger>
            <TabsTrigger value="completed">Выполненные</TabsTrigger>
            <TabsTrigger value="pending">Ожидающие</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {filteredExercises.map((exercise) => (
              <VideoCard 
                key={exercise.id} 
                exercise={exercise} 
                onToggleComplete={toggleCompleted} 
              />
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            {filteredExercises
              .filter((exercise) => exercise.completed)
              .map((exercise) => (
                <VideoCard 
                  key={exercise.id} 
                  exercise={exercise} 
                  onToggleComplete={toggleCompleted} 
                />
              ))}
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-4">
            {filteredExercises
              .filter((exercise) => !exercise.completed)
              .map((exercise) => (
                <VideoCard 
                  key={exercise.id} 
                  exercise={exercise} 
                  onToggleComplete={toggleCompleted} 
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface VideoCardProps {
  exercise: VideoExercise;
  onToggleComplete: (id: number) => void;
}

const VideoCard = ({ exercise, onToggleComplete }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <img
            src={exercise.thumbnail}
            alt={exercise.title}
            className="h-48 w-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
            {exercise.duration}
          </div>
        </div>
        
        <div className="p-4 md:w-2/3">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-2">{exercise.title}</h3>
            {exercise.completed && (
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                <Check size={12} className="mr-1" /> Выполнено
              </span>
            )}
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
          
          <div className="flex space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Play size={16} className="mr-2" /> Смотреть видео
            </Button>
            <Button 
              variant={exercise.completed ? "outline" : "default"}
              className={exercise.completed 
                ? "border-green-600 text-green-600 hover:bg-green-50" 
                : "bg-orange-500 hover:bg-orange-600"
              }
              onClick={() => onToggleComplete(exercise.id)}
            >
              {exercise.completed ? "Отменить выполнение" : "Выполнить задание"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
