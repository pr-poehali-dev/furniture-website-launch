import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-open">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-roboto font-bold text-primary">
              ОфисМебель
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-open text-primary hover:text-primary/80 transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="font-open text-primary hover:text-primary/80 transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-open text-primary hover:text-primary/80 transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="font-open text-primary hover:text-primary/80 transition-colors"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="font-open text-primary hover:text-primary/80 transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button size="sm" className="font-open">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-roboto font-bold text-primary leading-tight">
                Офисная мебель
                <span className="block text-muted-foreground text-3xl lg:text-4xl font-light">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl font-open text-muted-foreground leading-relaxed">
                Создаем эргономичные рабочие места, которые вдохновляют на продуктивность. 
                Минималистичный дизайн, премиальные материалы, индивидуальный подход.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="font-open font-medium"
                  onClick={() => scrollToSection('catalog')}
                >
                  Смотреть каталог
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-open"
                  onClick={() => scrollToSection('contacts')}
                >
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1507a741-02c5-4ecb-8765-99ca8fe4273e.jpg" 
                alt="Современная офисная мебель"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto font-bold text-primary mb-4">
              Каталог мебели
            </h2>
            <p className="text-lg font-open text-muted-foreground max-w-2xl mx-auto">
              Полный спектр офисной мебели: от рабочих столов до систем хранения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Рабочие столы', 
                description: 'Эргономичные столы для максимальной продуктивности',
                icon: 'Laptop',
                items: ['Регулируемые по высоте', 'Встроенная подсветка', 'Кабель-менеджмент']
              },
              { 
                title: 'Офисные стулья', 
                description: 'Комфорт и поддержка для долгой работы',
                icon: 'Armchair',
                items: ['Ортопедическая спинка', 'Мембранные материалы', 'Регулировка под рост']
              },
              { 
                title: 'Системы хранения', 
                description: 'Организация пространства без лишних деталей',
                icon: 'Archive',
                items: ['Модульные шкафы', 'Скрытые механизмы', 'Безопасные замки']
              },
              { 
                title: 'Переговорные', 
                description: 'Мебель для встреч и коллективной работы',
                icon: 'Users',
                items: ['Конференц-столы', 'Медиа-оборудование', 'Акустические панели']
              },
              { 
                title: 'Кровати', 
                description: 'Комфортная мебель для отдыха',
                icon: 'Bed',
                items: ['Ортопедические матрасы', 'Регулируемые основания', 'Экологичные материалы']
              },
              { 
                title: 'Тумбочки', 
                description: 'Практичные решения для хранения',
                icon: 'Package',
                items: ['Выдвижные ящики', 'Скрытые отделения', 'Беспроводная зарядка']
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Icon name={category.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-roboto font-semibold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <p className="font-open text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center font-open text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg font-open text-muted-foreground max-w-2xl mx-auto">
              Полный цикл: от дизайна до установки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Дизайн-проект', icon: 'Palette', description: '3D визуализация вашего офиса' },
              { title: 'Производство', icon: 'Wrench', description: 'Изготовление под ваши требования' },
              { title: 'Доставка', icon: 'Truck', description: 'Бережная транспортировка' },
              { title: 'Монтаж', icon: 'Settings', description: 'Профессиональная установка' }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-roboto font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-open text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto font-bold text-primary mb-4">
              Портфолио работ
            </h2>
            <p className="text-lg font-open text-muted-foreground max-w-2xl mx-auto">
              Реализованные проекты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-secondary/30 relative">
                  <img 
                    src="/img/ef3bd259-f989-489e-85c1-28c606977340.jpg" 
                    alt={`Проект ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-roboto font-semibold text-primary mb-2">
                    Офис IT-компании {item}
                  </h3>
                  <p className="font-open text-muted-foreground text-sm mb-4">
                    Современное рабочее пространство для {20 + item * 10} сотрудников
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-open text-xs text-muted-foreground">
                      Срок: {2 + item} недели
                    </span>
                    <Button variant="ghost" size="sm" className="font-open">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-roboto font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg font-open mb-8 opacity-90">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-4" />
                  <span className="font-open">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-4" />
                  <span className="font-open">info@officemebel.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-4" />
                  <span className="font-open">Москва, ул. Дизайнерская, 1</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Textarea 
                    placeholder="Расскажите о вашем проекте"
                    rows={4}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-primary hover:bg-white/90 font-open font-medium"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary/95 text-primary-foreground/80 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-lg font-roboto font-bold text-white mb-4 md:mb-0">
              ОфисМебель
            </div>
            <div className="flex space-x-6">
              <button className="hover:text-white transition-colors font-open text-sm">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white transition-colors font-open text-sm">
                Условия использования
              </button>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-white/10">
            <p className="font-open text-sm">
              © 2024 ОфисМебель. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}