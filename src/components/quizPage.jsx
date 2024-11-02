import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button/Button";
import { useGetQuestionsQuery, useAddAnswersMutation } from "../features/question/questionsSlice";

function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetQuestionsQuery(id);
  const [addAnswers] = useAddAnswersMutation();

  const handleQuizPage = (event) => {
    event.preventDefault();
    // Отслеживаю выбранный ответ
    const selectedAnswer = event.target.value;
    // Обновляю массив с ответами
    setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    // Проверяю, если это последний вопрос
    if (nextIndex === data.questions.length - 1) {
      handleSubmit(); // Вызываю функцию отправки результатов
    } else {
      setCurrentIndex(nextIndex); // Переход к следующему вопросу
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //Отправка ответов на сервер
  const handleSubmit = async () => {
    try {
      const result = await addAnswers({ id, answers }).unwrap(); // Передаю id и answers
      setResult(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Заполнение прогрессбара
  const progressPercentage = (currentIndex / (data.questions.length - 1)) * 100;

  // Сброс результатов
  const resetResult = () => {
    setAnswers([]);
    setResult(null);
    navigate(`/`);
  };

  return (
    <>
      <h2>{data.name}</h2>
      <div className="block">
        {currentIndex < data.questions.length ? (
          <form className="form">
            <div className="progress-bar">
              <span
                style={{ width: `${progressPercentage}%` }}
                className="gradient"
              ></span>
            </div>
            <p className="txt question">
              {currentIndex + 1}. {data.questions[currentIndex].question}
            </p>
            <div>
              {data.questions[currentIndex].options.map((item, optionIndex) => (
                <Button
                key={optionIndex}
                value={item}
                isBlock = {true}
                answer
                marginBottom='15'
                type= 'submit'
                onClick={handleQuizPage}
                >{item}</Button>
              ))}
            </div>
          </form>
        ) : (
          <>
            {result ? ( // Проверка на наличие результата
              <p className="txt">
                Вы отгадали: {result.score}/{result.total}
              </p>
            ) : (
              <p>Загрузка результата...</p>
            )}
            <Button
              width='255'
              isBorder={false}
              borderRadius = 'M'
              isPurple
              color={false}
              secondary
              onClick={resetResult}>Играть снова
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default QuizPage;
