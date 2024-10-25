import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function QuizPage() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://peppercoding.ru/quiz/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error, please try again');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [id]);

    const handleQuizPage = (event) => {
        event.preventDefault();
        // Отслеживаю выбранный ответ
        const selectedAnswer = event.target.value;
        // Обновляю массив с ответами
        setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);

        // Проверяю, если это последний вопрос
        if (nextIndex == (data.questions.length - 1)) {
            handleSubmit(); // Вызываю функцию отправки результатов
        } else {
            setCurrentIndex(nextIndex); // Переход к следующему вопросу
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!data || !data.questions) {
        return <div>Loading...</div>;
    }

    //Отправка ответов на сервер
    const handleSubmit = async () => {
        try {
            let response = await fetch(`https://peppercoding.ru/quiz/${id}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ answers }) // Отправляю массив ответов
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let result = await response.json();
            setResult(result); // Отображаю сообщение от сервера
        } catch (error) {
            console.error('Error:', error); // Логирую ошибку
        }
    };
    // Заполнение прогрессбара
    const progressPercentage = ((currentIndex) / (data.questions.length - 1)) * 100;

    // Сброс результатов
    const resetResult = () => {
        setData(null);
        setAnswers([]);
        setResult(null);
        navigate(`/`);
    }

    return (
        <>
        <h2>{data.name}</h2>
        <div className="block">
            <form className="form">
                {currentIndex < data.questions.length ? (
                <>
                  <div className="progress-bar">
                    <span style={{ width: `${progressPercentage}%`}} className="gradient"></span>
                </div>
                    <p className="txt question">{currentIndex + 1}. {data.questions[currentIndex].question}</p>
                    <div>
                        {data.questions[currentIndex].options.map((item, optionIndex) => (
                            <button type="submit" className="form__btn" key={optionIndex} value={item} onClick={handleQuizPage}>
                                {item}
                            </button>
                        ))}
                    </div>
                </>) : (
                    <>
                    {result ? ( // Проверка на наличие результата
                                <p className="txt">Вы отгадали: {result.score}/{result.total}</p>
                            ) : (
                                <p>Загрузка результата...</p>
                            )}
                            <button type="button" className="btn" onClick={resetResult}>Играть снова</button>
                        </>
                    )}
            </form>
        </div>
        </>
    );
}

export default QuizPage;