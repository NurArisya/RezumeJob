-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               9.3.0 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for myrezumejob
CREATE DATABASE IF NOT EXISTS `myrezumejob` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myrezumejob`;

-- Dumping structure for table myrezumejob.applicant
CREATE TABLE IF NOT EXISTS `applicant` (
  `applicantID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `applicantUsername` varchar(50) DEFAULT NULL,
  `applicantPassword` varchar(100) DEFAULT NULL,
  `applicantFirstName` varchar(50) DEFAULT NULL,
  `applicantLastName` varchar(50) DEFAULT NULL,
  `applicantEmail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`applicantID`),
  KEY `userID` (`userID`),
  CONSTRAINT `applicant_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.applicant: ~0 rows (approximately)
INSERT INTO `applicant` (`applicantID`, `userID`, `applicantUsername`, `applicantPassword`, `applicantFirstName`, `applicantLastName`, `applicantEmail`) VALUES
	(1, 1, 'test@gmail.com', 'Test123@', 'test', 'user', 'test@gmail.com');

-- Dumping structure for table myrezumejob.job
CREATE TABLE IF NOT EXISTS `job` (
  `jobID` int NOT NULL AUTO_INCREMENT,
  `jobProviderID` int NOT NULL,
  `jobTitle` varchar(200) DEFAULT NULL,
  `jobDesc` text,
  `jobLocation` varchar(150) DEFAULT NULL,
  `jobPostedDate` date DEFAULT NULL,
  `jobDueDate` date DEFAULT NULL,
  PRIMARY KEY (`jobID`),
  KEY `jobProviderID` (`jobProviderID`),
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`jobProviderID`) REFERENCES `jobprovider` (`jobProviderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.job: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.jobprovider
CREATE TABLE IF NOT EXISTS `jobprovider` (
  `jobProviderID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `jobProviderUsername` varchar(50) DEFAULT NULL,
  `jobProviderPassword` varchar(100) DEFAULT NULL,
  `companyName` varchar(100) DEFAULT NULL,
  `companyEmail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`jobProviderID`),
  KEY `userID` (`userID`),
  CONSTRAINT `jobprovider_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.jobprovider: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume
CREATE TABLE IF NOT EXISTS `resume` (
  `resumeID` int NOT NULL AUTO_INCREMENT,
  `applicantID` int NOT NULL,
  `resumeTitle` varchar(100) DEFAULT NULL,
  `resumeDesc` varchar(255) DEFAULT NULL,
  `createdDate` date DEFAULT NULL,
  `lastModifiedDate` date DEFAULT NULL,
  PRIMARY KEY (`resumeID`),
  CONSTRAINT `resume_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `applicant` (`applicantID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_certifications
CREATE TABLE IF NOT EXISTS `resume_certifications` (
  `certID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `certificationName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`certID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_certifications_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_certifications: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_education
CREATE TABLE IF NOT EXISTS `resume_education` (
  `educationID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `school` varchar(150) DEFAULT NULL,
  `degree` varchar(150) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`educationID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_education_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_education: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_experience
CREATE TABLE IF NOT EXISTS `resume_experience` (
  `experienceID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `company` varchar(150) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`experienceID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_experience_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_experience: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_header
CREATE TABLE IF NOT EXISTS `resume_header` (
  `headerID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`headerID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_header_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_header: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_language
CREATE TABLE IF NOT EXISTS `resume_language` (
  `langID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `language` varchar(50) DEFAULT NULL,
  `proficiency` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`langID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_language_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_language: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_projects
CREATE TABLE IF NOT EXISTS `resume_projects` (
  `projectID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `tools` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`projectID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_projects_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_projects: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_references
CREATE TABLE IF NOT EXISTS `resume_references` (
  `referenceID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`referenceID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_references_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_references: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_skills
CREATE TABLE IF NOT EXISTS `resume_skills` (
  `skillID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `skillName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`skillID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_skills_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_skills: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_summary
CREATE TABLE IF NOT EXISTS `resume_summary` (
  `summaryID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `summaryText` text,
  PRIMARY KEY (`summaryID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_summary_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_summary: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.resume_volunteer
CREATE TABLE IF NOT EXISTS `resume_volunteer` (
  `volunteerID` int NOT NULL AUTO_INCREMENT,
  `resumeID` int NOT NULL,
  `organization` varchar(200) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`volunteerID`),
  KEY `resumeID` (`resumeID`),
  CONSTRAINT `resume_volunteer_ibfk_1` FOREIGN KEY (`resumeID`) REFERENCES `resume` (`resumeID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.resume_volunteer: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.systemadministrator
CREATE TABLE IF NOT EXISTS `systemadministrator` (
  `systemAdminID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `systemAdminUsername` varchar(50) DEFAULT NULL,
  `systemAdminPassword` varchar(100) DEFAULT NULL,
  `systemAdminFirstName` varchar(50) DEFAULT NULL,
  `systemAdminLastName` varchar(50) DEFAULT NULL,
  `systemAdminEmail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`systemAdminID`),
  KEY `userID` (`userID`),
  CONSTRAINT `systemadministrator_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.systemadministrator: ~0 rows (approximately)

-- Dumping structure for table myrezumejob.users
CREATE TABLE IF NOT EXISTS `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `userpassword` varchar(200) NOT NULL,
  `role` enum('applicant','jobprovider','admin') NOT NULL DEFAULT 'applicant',
  PRIMARY KEY (`userID`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table myrezumejob.users: ~1 rows (approximately)
INSERT INTO `users` (`userID`, `first_name`, `last_name`, `email`, `userpassword`, `role`) VALUES
	(1, 'test', 'user', 'test@gmail.com', 'Test123@', 'applicant');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
