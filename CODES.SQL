CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    login VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);
INSERT INTO users (username, login, password) VALUES 
('ALICE', 'ssasaxsa@cdsdsc', 'dscdsdsdslcbeg8yo3togwkjbdsy'),
('JOHN', 'John@dsdsc', 'dscds12dsdslcbeg8yo3togwkjbdsy');