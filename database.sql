-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: db:3306
-- Время создания: Июл 05 2022 г., 08:21
-- Версия сервера: 8.0.29
-- Версия PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `zx`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `gender`, `image`, `createdDate`) VALUES
(1, 'biba', NULL, 'biba@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 03:17:58'),
(3, 'misha', NULL, 'misha@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:08:39'),
(4, 'ivan', NULL, 'ivan@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:08:51'),
(5, 'petr', NULL, 'petr@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:08:58'),
(6, 'lera', NULL, 'lera@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:04'),
(7, 'biba', 'bibovna', 'vika@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', 'F', 'img1.jpg', '2022-07-05 04:09:09'),
(8, 'petya', NULL, 'petya@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:16'),
(9, 'viktor', NULL, 'viktor@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:23'),
(10, 'alex', NULL, 'alex@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:29'),
(11, 'olga', NULL, 'olga@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:45'),
(12, 'oksana', NULL, 'oksana@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:09:55'),
(13, 'tom', NULL, 'tom@mail.ru', '$2b$10$q6KZcEWMWxWGEn2cmKICiOXWRnPoSIDQhDybT33jhFa5UOu83ImBe', NULL, NULL, '2022-07-05 04:10:04');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
