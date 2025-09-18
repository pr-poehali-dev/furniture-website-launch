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
              КроватиДом
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
                Кровати
                <span className="block text-muted-foreground text-3xl lg:text-4xl font-light">
                  для идеального сна
                </span>
              </h1>
              <p className="text-xl font-open text-muted-foreground leading-relaxed">
                Создаем комфортные кровати для здорового и качественного сна. 
                Ортопедические матрасы, натуральные материалы, индивидуальный дизайн.
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
                src="/img/e5d5879f-9d20-4e2c-8646-e7ce2ed527e6.jpg" 
                alt="Современные кровати"
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
              Каталог кроватей
            </h2>
            <p className="text-lg font-open text-muted-foreground max-w-2xl mx-auto">
              Полная коллекция кроватей: односпальные, двуспальные, с мягким изголовьем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Односпальные кровати', 
                description: 'Компактные решения для маленьких спален',
                icon: 'Bed',
                items: ['Размер 90x200 см', 'Ортопедическое основание', 'Мягкое изголовье']
              },
              { 
                title: 'Двуспальные кровати', 
                description: 'Просторные модели для пар',
                icon: 'Bed',
                items: ['Размер 160x200 см', 'Независимые матрасы', 'Комфортное изголовье']
              },
              { 
                title: 'Кровати-подиумы', 
                description: 'Современные модели без ножек',
                icon: 'Bed',
                items: ['Минималистичный дизайн', 'Встроенное освещение', 'Мягкая обивка']
              },
              { 
                title: 'Кровати с ящиками', 
                description: 'Функциональные модели с хранением',
                icon: 'Archive',
                items: ['Выдвижные ящики', 'Максимум хранения', 'Плавное открывание']
              },
              { 
                title: 'Детские кровати', 
                description: 'Безопасные модели для детей',
                icon: 'Baby',
                items: ['Экологичные материалы', 'Защитные бортики', 'Яркие цвета']
              },
              { 
                title: 'Матрасы и основания', 
                description: 'Ортопедические решения для сна',
                icon: 'Layers',
                items: ['Пружинные блоки', 'Память формы', 'Гипоаллергенные материалы']
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
              { title: 'Консультация', icon: 'MessageCircle', description: 'Подберем идеальную кровать' },
              { title: 'Производство', icon: 'Wrench', description: 'Индивидуальный размер и дизайн' },
              { title: 'Доставка', icon: 'Truck', description: 'Бесплатная доставка по городу' },
              { title: 'Сборка', icon: 'Settings', description: 'Профессиональная сборка кровати' }
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
                    Спальня семьи {item === 1 ? 'Петровых' : item === 2 ? 'Сидоровых' : 'Ивановых'}
                  </h3>
                  <p className="font-open text-muted-foreground text-sm mb-4">
                    Комфортная спальня с ортопедическим матрасом и мягким изголовьем
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-open text-xs text-muted-foreground">
                      Материал: {item === 1 ? 'Дуб' : item === 2 ? 'Сосна' : 'Бук'}
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
                  <span className="font-open">info@krovatim.ru</span>
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
              КроватиДом
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
              © 2024 КроватиДом. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}