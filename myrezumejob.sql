CREATE TABLE resume_header (
  headerID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  name VARCHAR(150),
  address VARCHAR(255),
  phone VARCHAR(20),
  email VARCHAR(100),
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_summary (
  summaryID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  summaryText TEXT,
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_experience (
  experienceID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  company VARCHAR(150),
  role VARCHAR(100),
  startDate DATE,
  endDate DATE,
  description TEXT,
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_education (
  educationID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  school VARCHAR(150),
  degree VARCHAR(150),
  startDate DATE,
  endDate DATE,
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_skills (
  skillID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  skillName VARCHAR(100),
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_certifications (
  certID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  certificationName VARCHAR(255),
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_language (
  langID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  language VARCHAR(50),
  proficiency VARCHAR(50),
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_references (
  referenceID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  name VARCHAR(100),
  position VARCHAR(100),
  company VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_projects (
  projectID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT null,
  title VARCHAR(200),
  tools VARCHAR(255),
  description TEXT,
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

CREATE TABLE resume_volunteer (
  volunteerID INT AUTO_INCREMENT PRIMARY KEY,
  resumeID INT NOT NULL,
  organization VARCHAR(200),
  role VARCHAR(100),
  startDate DATE,
  endDate DATE,
  description TEXT,
  FOREIGN KEY (resumeID) REFERENCES resume(resumeID) ON DELETE CASCADE
);

