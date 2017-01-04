DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_name VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  rank INTEGER
);
