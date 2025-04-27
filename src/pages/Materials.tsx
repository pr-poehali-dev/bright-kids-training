import { useState } from "react";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

interface Material {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const Materials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const materials: Material[] = [
    {
      id: 1,
      title: "Классические захваты в дзюдо",
      description: "Основы правильных захватов для начинающих спортсменов",
      category: "техника",
      imageUrl: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "История развития дзюдо в России",
      description: "Материалы об основоположниках российской школы дзюдо",
      category: "теория",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Техники бросков через спину",
      description: "Пошаговые инструкции и видеоматериалы",
      category: "техника",
      imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Правила соревнований 2025",
      description: "Обновленные правила и регламент проведения соревнований",
      category: "теория",
      imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Тактика ведения поединка",
      description: "Стратегии и подходы для различных типов соперников",
      category: "видео",
      imageUrl: "https://images.unsplash.com/photo-1509255929945-586a420363cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Основы самостраховки",
      description: "Безопасное падение и защитные техники",
      category: "видео",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredMaterials = searchQuery 
    ? materials.filter(material => 
        material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : materials;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-sport-dark flex items-center gap-2">
              Учебные материалы <span className="text-sport-blue">📚</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Изучай теорию, смотри видео и тренируй технику выполнения
            </p>
          </div>
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Поиск материалов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все материалы</TabsTrigger>
            <TabsTrigger value="theory">Теория</TabsTrigger>
            <TabsTrigger value="technique">Техника</TabsTrigger>
            <TabsTrigger value="video">Видеоматериалы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="theory" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials
                .filter(material => material.category === "теория")
                .map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technique" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials
                .filter(material => material.category === "техника")
                .map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials
                .filter(material => material.category === "видео")
                .map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

const MaterialCard = ({ material }: { material: Material }) => {
  return (
    <Card className="overflow-hidden hover-scale card-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={material.imageUrl} 
          alt={material.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{material.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{material.description}</p>
        <button className="btn-primary w-full text-center">
          Открыть материал
        </button>
      </div>
    </Card>
  );
};

export default Materials;
