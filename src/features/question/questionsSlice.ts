import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
    reducerPath: 'questionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://peppercoding.ru/quiz/' }),
    endpoints: (builder) => ({
        // Запрос на получение ответов по id
        getQuestions: builder.query({
            query: (id) => `${id}`,
        }),
        // Запрос на добавление ответов
        addAnswers: builder.mutation({
            query: ({ id, answers }) => ({
                url: `${id}/submit`,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                  },
                body: JSON.stringify({ answers })
            }),
        }),
    }),
});
export const { useGetQuestionsQuery, useAddAnswersMutation } = questionsApi;