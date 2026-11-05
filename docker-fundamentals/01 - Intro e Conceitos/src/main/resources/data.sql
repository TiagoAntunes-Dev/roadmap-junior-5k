-- =====================================
-- USERS
-- =====================================
INSERT INTO tb_users (username, email) VALUES ('Naruto Uzumaki', 'naruto@konoha.com');
INSERT INTO tb_users (username, email) VALUES ('Sasuke Uchiha', 'sasuke@konoha.com');
INSERT INTO tb_users (username, email) VALUES ('Monkey D. Luffy', 'luffy@onepiece.com');

-- =====================================
-- QUIZZES (com Enum Difficulty)
-- =====================================
INSERT INTO tb_quizzes (title, description, difficulty) VALUES ('Naruto Shippuden Quiz', 'Conhecimento ninja!', 'FACIL');
INSERT INTO tb_quizzes (title, description, difficulty) VALUES ('One Piece Quiz', 'Os Chapéus de Palha!', 'MEDIO');

-- =====================================
-- QUESTIONS
-- =====================================
INSERT INTO tb_questions (statement, quiz_id) VALUES ('Qual é o sonho de Naruto?', 1);
INSERT INTO tb_questions (statement, quiz_id) VALUES ('Qual é o golpe do Luffy?', 2);

-- =====================================
-- OPTIONS
-- =====================================
INSERT INTO tb_options (text, correct, question_id) VALUES ('Ser Hokage', true, 1);
INSERT INTO tb_options (text, correct, question_id) VALUES ('Ser Rei dos Piratas', false, 1);
INSERT INTO tb_options (text, correct, question_id) VALUES ('Gomu Gomu no Pistol', true, 2);
INSERT INTO tb_options (text, correct, question_id) VALUES ('Kamehameha', false, 2);

-- =====================================
-- SCORES
-- =====================================
INSERT INTO tb_scores (points, user_id, quiz_id) VALUES (150, 1, 1);
INSERT INTO tb_scores (points, user_id, quiz_id) VALUES (200, 2, 1);

-- =====================================
-- RELACIONAMENTO N:N (User - Quiz Favoritos)
-- =====================================
INSERT INTO tb_user_favorite_quizzes (user_id, quiz_id) VALUES (1, 1);
INSERT INTO tb_user_favorite_quizzes (user_id, quiz_id) VALUES (3, 2);