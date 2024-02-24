import React, { useState } from 'react';
import { GeneratedLetterResponce } from "../../types";
import './GenerationPage.css';
import {wait} from "@testing-library/user-event/dist/utils";

export const GenerationPage: React.FC = () => {
  const [template, setTemplate] = useState('');
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleGenerate = async () => {
      setIsLoading(true);
      try {
          const response = await fetch(
                'http://localhost:8000/generate_letter/',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        letter_template: template,
                        resume: resume,
                        job_description: jobDescription
                    }),
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            const data: GeneratedLetterResponce = await response.json();
            setGeneratedLetter(data.generated_letter);
      } catch (error) {
          await wait(3000);
          console.error("An error occurred:", error);
      } finally {
          setIsLoading(false);
      }
  };

  const fillWithExample = () => {
      setJobDescription(
          'Мы - инновационный технологический стартап, специализирующийся на разработке передовых решений в области искусственного интеллекта и машинного обучения. Наша цель - трансформация отраслевых стандартов с помощью высокотехнологичных продуктов.\n' +
          '\n' +
          'В связи с расширением нашего отдела искусственного интеллекта, мы ищем опытного ML инженера, который поделится нашей страстью к инновациям и стремлению к совершенству.\n' +
          '\n' +
          '**Обязанности:**\n' +
          '\n' +
          '- Разработка и реализация алгоритмов машинного и глубокого обучения для решения разнообразных задач: от предиктивной аналитики до компьютерного зрения и обработки естественного языка.\n' +
          '- Анализ и обработка больших объемов данных для обучения и тестирования моделей.\n' +
          '- Сотрудничество с командой разработчиков для интеграции моделей ML в общую архитектуру продукта.\n' +
          '- Внедрение лучших практик и методологий для повышения качества и эффективности процесса разработки.\n' +
          '- Поддержание и оптимизация существующих моделей для обеспечения их актуальности и высокой производительности.\n' +
          '\n' +
          '**Требования:**\n' +
          '\n' +
          '- Высшее техническое образование в области компьютерных наук или смежных дисциплин.\n' +
          '- Опыт работы в области машинного обучения/глубокого обучения не менее 3 лет.\n' +
          '- Знание и опыт работы с основными библиотеками и фреймворками для ML/DL, такими как TensorFlow, PyTorch, Keras.\n' +
          '- Опыт работы с языками программирования Python и/или R.\n' +
          '- Знание методов обработки и анализа данных, включая SQL и NoSQL базы данных.\n' +
          '- Способность к самостоятельной работе и работе в команде, высокий уровень ответственности и мотивации.\n' +
          '\n' +
          '**Мы предлагаем:**\n' +
          '\n' +
          '- Конкурентоспособную заработную плату и прозрачную систему бонусов.\n' +
          '- Гибкий график работы и возможность удаленной работы.\n' +
          '- Профессиональное развитие и обучение за счет компании.\n' +
          '- Дружелюбную и поддерживающую атмосферу в команде талантливых специалистов.\n' +
          '- Уникальную возможность работать над проектами, имеющими глобальное значение и влияние.\n' +
          '\n' +
          'Если вы готовы присоединиться к нам и внести свой вклад в разработку инновационных решений, отправляйте свое резюме и сопроводительное письмо на нашу электронную почту. Мы с нетерпением ждем возможности познакомиться с вами!\n'
      );
      setResume(
          'Иванова Анна Михайловна\n' +
          '\n' +
          'Женщина, 26 лет, родилась 15 марта 1998\n' +
          '\n' +
          '+7 (999) 123-45-67 — 📩 tg: @anna_ai\n' +
          '\n' +
          'anna.ai98@example.com — предпочитаемый способ связи\n' +
          '\n' +
          'Профиль GitHub: https://github.com/annaai\n' +
          '\n' +
          'Проживает: Москва\n' +
          '\n' +
          'Гражданство: Россия, есть разрешение на работу: Россия\n' +
          '\n' +
          'Готова к переезду, готова к командировкам\n' +
          '\n' +
          'Желаемая должность и зарплата\n' +
          '\n' +
          'ML Engineer / Data Scientist\n' +
          '\n' +
          '150 000 ₽\n' +
          '\n' +
          'Специализации:\n' +
          '\n' +
          '- Machine Learning Engineer\n' +
          '- Data Scientist\n' +
          '\n' +
          'Занятость: полная занятость\n' +
          '\n' +
          'График работы: полный день, гибкий график, удаленная работа\n' +
          '\n' +
          'Опыт работы — 3 года\n' +
          '\n' +
          'Innovatech Solutions, Москва\n' +
          '\n' +
          'Информационные технологии, искусственный интеллект, машинное обучение\n' +
          '\n' +
          'Май 2021 — настоящее время 3 года\n' +
          '\n' +
          'ML Engineer\n' +
          '\n' +
          '- Разработка и оптимизация алгоритмов машинного обучения для аналитики данных.\n' +
          '- Применение техник Deep Learning для задач Computer Vision и NLP.\n' +
          '- Участие в разработке системы рекомендаций на основе пользовательских данных.\n' +
          '- Оптимизация моделей для повышения производительности и точности.\n' +
          '- Работа с большими объемами данных, использование SQL и NoSQL баз данных.\n' +
          '\n' +
          'Результаты работы: повышение точности предсказательных моделей на 20%, сокращение времени обработки данных на 30%.\n' +
          '\n' +
          'Образование\n' +
          '\n' +
          'Московский Государственный Университет, Москва\n' +
          '\n' +
          '2020\n' +
          '\n' +
          'Факультет вычислительной математики и кибернетики\n' +
          '\n' +
          'Повышение квалификации, курсы\n' +
          '\n' +
          '"Глубокое обучение в обработке изображений" - Coursera, 2021\n' +
          '\n' +
          '"Продвинутый курс по машинному обучению" - Stepik, 2022\n' +
          '\n' +
          'Ключевые навыки\n' +
          '\n' +
          '- Python, PyTorch, TensorFlow, Keras\n' +
          '- Computer Vision, NLP, Deep Learning\n' +
          '- SQL, MongoDB\n' +
          '- Linux, Docker, Git\n' +
          '- Английский язык — C1\n' +
          '\n' +
          'Дополнительная информация\n' +
          '\n' +
          'Обо мне: Увлечена решением сложных задач, связанных с анализом данных и машинным обучением. Имею опыт участия в научных проектах и публикации статей по тематике ИИ. В свободное время занимаюсь самообразованием и изучением новых технологий в области искусственного интеллекта.\n' +
          '\n' +
          'Проекты и хакатоны:\n' +
          '- Участник международного хакатона по искусственному интеллекту AI Journey 2022.\n' +
          '- Разработка проекта по распознаванию эмоций по аудиофайлам, который был представлен на конференции Neural Information Processing Systems (NeurIPS).\n' +
          '\n' +
          'Связаться со мной можно в Telegram ➜ https://t.me/anna_ai\n' +
          'Мой GitHub ➜ https://github.com/annaai\n' +
          '\n' +
          'С нетерпением жду возможности внести свой вклад в ваш проект и команду!\n'
      );
      setTemplate(
          'Добрый день!\n' +
          '\n' +
          'Меня зовут Анна Иванова.\n' +
          '\n' +
          'Я с большим интересом ознакомилась с вашей вакансией на должность ML инженера. Ваше описание позиции и перечень задач говорят о том, что передо мной стоят масштабные и вызовные проекты, которые полностью соответствуют моим профессиональным интересам и областям экспертизы:\n' +
          '{placeholder}\n' +
          '▸ Мой опыт в области машинного обучения и разработке алгоритмов искусственного интеллекта идеально подходит для решения поставленных задач.\n' +
          '\n' +
          'Кратко о себе:\n' +
          '● Я увлечена созданием и оптимизацией алгоритмов машинного обучения, что позволяет мне глубоко понимать и эффективно решать технические задачи.\n' +
          '● Активно участвую в жизни профессионального сообщества, посещаю конференции и митапы, что помогает мне быть в курсе последних тенденций в области ИИ и машинного обучения.\n' +
          '● У меня есть успешный опыт участия в хакатонах, где я не только разрабатывала решения, но и работала в команде для достижения общих целей. Например:\n' +
          '○ AI Journey 2022\n' +
          '○ Нейронные сети и глубокое обучение - проект по распознаванию эмоций\n' +
          '\n' +
          'Я уверена, что мой опыт и навыки позволят мне внести значительный вклад в успех вашей компании. Я готова применить свои знания для решения интересных и сложных задач, стоящих перед вашей командой.\n' +
          '\n' +
          'С нетерпением жду возможности обсудить, как я могу помочь вашей команде достигнуть её целей. Связаться со мной можно по электронной почте или через Telegram:\n' +
          '➜ anna.ai98@example.com\n' +
          '➜ https://t.me/anna_ai\n' +
          '\n' +
          'Благодарю за внимание и надеюсь на скорую встречу!\n' +
          '\n' +
          'С уважением,\n' +
          'Анна Иванова\n'
      );
  };

  const isButtonDisabled = !template || !resume || !jobDescription || isLoading;

  return (
      <div className={'generation-container'}>
          <h2 className={'generation-header'}>Сгенерировать письмо</h2>
          <p className={'generation-text'}>Пожалуйста, введите необходимые данные. Для плейсхолдеров в шаблоне сопроводительного письма используйте &#123;placeholder&#125;.</p>
          <textarea
              className={'generation-input'}
              placeholder="Шаблон сопроводительного письма"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
          />
          <textarea
              className={'generation-input'}
              placeholder="Ваше резюме"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
          />
          <textarea
              className={'generation-input'}
              placeholder="Описание вакансии"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
          />
          <button
              className={'generation-button'}
              onClick={fillWithExample}
              disabled={!isButtonDisabled || isLoading}
          >
              Пример данных
          </button>
          <button
              className={'generation-button'}
              onClick={handleGenerate}
              disabled={isButtonDisabled}
          >
              Сгенерировать
          </button>
          {isLoading ? (
              <div className="loading-spinner"></div> // Use the spinner when loading
          ) : generatedLetter ? (
              <div className={'generation-result'}>
                  <h3>Generated Letter</h3>
                  <br/>
                  <p>{generatedLetter}</p>
              </div>
          ) : null}
      </div>
  );
};
