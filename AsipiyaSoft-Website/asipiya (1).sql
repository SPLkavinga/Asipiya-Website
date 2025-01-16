-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 07:39 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asipiya`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `nic` varchar(50) DEFAULT NULL,
  `cv_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `name`, `email`, `contact_number`, `position`, `linkedin`, `nic`, `cv_path`, `created_at`) VALUES
(9, 'yasindu', 'adeel@gmail.com', '0710377940', 'software', 'https://www.linkedin.com/in/lahiru-kavinga-902006278/', '200433033300', 'uploads\\7a87e27047e3e051407517b986741ec3', '2024-12-26 06:39:17'),
(11, 'sajana', 'lahiru.20211349@iit.ac.lk', '0710377940', 'intern software engineer', 'https://www.linkedin.com/in/lahiru-kavinga-902006278/', '452112', 'uploads\\f3caa3832255d1fbd0efe7a6d6e33403', '2024-12-26 06:42:01'),
(13, 'Lahiru Kavinga', 'lkspathirana@gmail.com', '0713324845', 'intern software engineer', 'https://www.linkedin.com/in/lahiru-kavinga-902006278/', '980080610v', 'uploads\\bb77d9f73517c48fed0b3ed899a5fe6e', '2024-12-27 06:03:12');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `job_type` enum('Full-time','Part-time') NOT NULL,
  `description` text NOT NULL,
  `bullet_points` text DEFAULT NULL,
  `shortdis` varchar(255) DEFAULT NULL,
  `shortTitle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `title`, `job_type`, `description`, `bullet_points`, `shortdis`, `shortTitle`) VALUES
(11, 'Intern Software Engineer', 'Full-time', 'Ready to make an impact? We are looking for Software Engineer to join our dynamic team.', 'Demonstrated understanding of web markup, including HTML5 and CSS3.,\nBasic knowledge of Bootstrap and Tailwind CSS.,\nStrong knowledge of design patterns and Object-Oriented Programming (OOP) concepts.,\nGood understanding of advanced JavaScript libraries and frameworks, particularly ReactJS.,\nBasic knowledge of Agile and waterfall methodologies.', 'Join Asipiya Soft Solution\'s Innovation Journey!', 'About this position');

-- --------------------------------------------------------

--
-- Table structure for table `career_details`
--

CREATE TABLE `career_details` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactNumber` varchar(20) DEFAULT NULL,
  `nicNumber` varchar(20) DEFAULT NULL,
  `linkedinProfile` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `filePath` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `career_details`
--

INSERT INTO `career_details` (`id`, `name`, `email`, `contactNumber`, `nicNumber`, `linkedinProfile`, `position`, `message`, `filePath`, `created_at`) VALUES
(1, 'Chamindu Newandith', 'cnewandith123@gmail.com', '0703672198', '222s', 'https://www.youtube.com/watch?v=btZII7TXlhk', 'hhh', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'uploads\\b2fa198c76d57abb333fcd641c28e332', '2024-12-24 03:12:14');

-- --------------------------------------------------------

--
-- Table structure for table `email_details`
--

CREATE TABLE `email_details` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `interests` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `email_details`
--

INSERT INTO `email_details` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `message`, `interests`, `created_at`) VALUES
(1, 'Chamindu', 'Newandith', 'cnewandith123@gmail.com', '0703672198', 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'UI/UX Design, Other, Web Design, Design System, Software Solutions', '2024-12-24 03:10:00'),
(2, 'Chamindu', 'Newandith', 'cnewandith123@gmail.com', '0703672198', 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'UI/UX Design, Other, Web Design, Design System, Software Solutions', '2024-12-24 03:10:20'),
(3, 'Lahiru', 'Kavinga', 'lkspathirana@gmail.com', '0713324845', 'test', 'UI/UX Design', '2024-12-25 04:54:42'),
(4, 'Lahiru', 'Kavinga', 'lkspathirana@gmail.com', '0713324845', 'test', 'UI/UX Design', '2024-12-25 04:55:11');

-- --------------------------------------------------------

--
-- Table structure for table `form_data`
--

CREATE TABLE `form_data` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `form_data`
--

INSERT INTO `form_data` (`id`, `name`, `description`) VALUES
(2, 'Associate Software Engineer', '[\"Join Asipiya Soft Solution\'s Innovation Journey!\",\"Ready to make an impact? We are looking for Associate Software Engineer to join our dynamic team.\",\"Requirements:\",\"????Strong understanding of programming fundamentals\",\"data structures\",\"and algorithms.\\n\\n????Proficiency in React.js with JavaScript/TypeScript\",\"JSX\",\"Redux\",\"and asynchronous programming.\\n\\n\\n????Strong backend development skills using PHP with Laravel\",\"covering MVC architecture\",\"RESTful API development\",\"routing\",\"middleware\",\"and authentication.\\n\\n????Good knowledge of PostgreSQL for database design\",\"querying\",\"and optimization.\",\"????Excellent problem-solving skills\",\"with the ability to analyze complex issues and implement effective solutions.\",\"\"]'),
(3, 'ss', '[\"sss\"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `career_details`
--
ALTER TABLE `career_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_details`
--
ALTER TABLE `email_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form_data`
--
ALTER TABLE `form_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `career_details`
--
ALTER TABLE `career_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `email_details`
--
ALTER TABLE `email_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `form_data`
--
ALTER TABLE `form_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
