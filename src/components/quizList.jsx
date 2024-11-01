import { useNavigate } from "react-router-dom";
import  Button  from "./Button/Button";

function QuizList() {
  const themeList = [
    { id: 1, title: "IT" },
    { id: 2, title: "Столицы" },
    { id: 3, title: "Животные" },
    { id: 4, title: "Языки программирования" },
    { id: 5, title: "Великие ученые" },
    { id: 6, title: "Мировая история" },
    { id: 7, title: "География" },
    { id: 8, title: "Концепции в IT" },
    { id: 9, title: "Достопримечательности" },
    { id: 10, title: "Литература" },
  ];

  const navigate = useNavigate();

  const getQuestions = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <>
      <h1 className="title">Выберите квиз:</h1>
      <ul className="list">
        {themeList.map((theme) => (
          <li key={theme.id} title={theme.title} className="theme">
            <Button width='255' onClick={() => getQuestions(theme.id)}>{theme.title}</Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuizList;
