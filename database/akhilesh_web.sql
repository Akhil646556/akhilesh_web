CREATE DATABASE IF NOT EXISTS `akhilesh_web`;
USE `akhilesh_web`;

-- --------------------------------------------------------

-- Table structure for table `tab_projects`
CREATE TABLE IF NOT EXISTS `tab_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  `creation_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for table `tab_skills`
CREATE TABLE IF NOT EXISTS `tab_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(100) NOT NULL,
  `proficiency` int(3) DEFAULT 0,
  `category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
