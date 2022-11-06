# Backend

## Banco de Dados 🎲

### Modelagem

<p>Escolhemos o <a href="https://www.sqlite.org/quickstart.html" target="_blank">SQLite</a> como o banco de dados do projeto por ser leve e ágil para implementar.</p>
<figure>
  <img src="docs/img/database-diagram.png" alt="Diagrama de entidades e relacionamentos">
  <figcaption>Diagrama de entidades e relacionamentos do banco de dados.</figcaption>
</figure>

---

### Implementação

Para criar e testar as tabelas utilizamos as seguintes queries:

#### <strong>- Tabela "user"</strong>

Código de criação da tabela user, que recebe os dados dos usuários da plataforma:

<pre>
CREATE TABLE IF NOT EXISTS user (
id INTEGER NOT NULL PRIMARY KEY,
name TEXT NOT NULL,
email TEXT NOT NULL,
password TEXT NOT NULL,
is_admin INTEGER NOT NULL
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO usuario (name, email, password, is_admin) VALUES ("", "", "", 0); // insert sem valores

INSERT INTO usuario (name, email, password, is_admin) VALUES ("Arthur", "arthur@arthur.com", "123456", 0);
INSERT INTO usuario (name, email, password, is_admin) VALUES ("Rosana", "rosana@rosana.com", "123456", 0);
INSERT INTO usuario (name, email, password, is_admin) VALUES ("Lucyan", "lucyan@lucyan.com", "123456", 0);
INSERT INTO usuario (name, email, password, is_admin) VALUES ("Juliana", juliana@juliana.com", "123456", 0);
</pre>

---

#### <strong>Tabela "path"</strong>

Código de criação da tabela path, que recebe os dados das trilhas da plataforma:

<pre>
CREATE TABLE IF NOT EXISTS path (
id INTEGER NOT NULL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO path (title, description) VALUES ("", ""); // insert sem valores

INSERT INTO path (title, description) VALUES ("UX/UI", "Tudo sobre UX/UI");
INSERT INTO path (title, description) VALUES ("QA", "Tudo sobre QA");
INSERT INTO path (title, description) VALUES ("Fullstack", "Tudo sobre Fullstack");
</pre>

---

#### <strong>Tabela "module"</strong>

Código de criação da tabela module, que recebe os dados dos módulos das trilhas:

<pre>
CREATE TABLE IF NOT EXISTS module (
id INTEGER NOT NULL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL,
path_id INTEGER NOT NULL,
FOREIGN KEY(path_id) REFERENCES path(id)
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO module (title, description, path_id) VALUES ("", "", 1); // insert sem valores

INSERT INTO module (title, description, path_id) VALUES ("O Início", "Comece seu caminho por aqui", 1);
INSERT INTO module (title, description, path_id) VALUES ("Fundamentos de UX(User Experience"), "O básico do UX", 1);
INSERT INTO module (title, description, path_id) VALUES ("Fundamentos de UI", "O básico de UI", 1);
</pre>

---

#### <strong>Tabela "content"</strong>

Código de criação da tabela content, que recebe os dados dos conteúdos da plataforma:

<pre>
CREATE TABLE IF NOT EXISTS content (
id INTEGER NOT NULL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL,
author TEXT NOT NULL,
type TEXT NOT NULL,
length_min INTEGER NOT NULL,
link TEXT NOT NULL,
module_id INTEGER NOT NULL,
FOREIGN KEY(module_id) REFERENCES module(id)
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO content VALUES (title, description, author, type, length_min, link, module_id) VALUES ("","","","",1,"",1); // insert sem valores

INSERT INTO content VALUES (title, description, author, type, length_min, link, module_id) VALUES ("Migração de Carreira","Como funciona migração de carreira?","Orange Juice","Artigo",6,"https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",1);
</pre>

---

#### <strong>Tabela "user_path"</strong>

Código de criação da tabela user_path, que recebe os dados do relacionamento do usuário com a trilha:

<pre>
CREATE TABLE IF NOT EXISTS user_path (
id INTEGER NOT NULL PRIMARY KEY,
user_id INTEGER NOT NULL,
path_id INTEGER NOT NULL,
progress INTEGER NOT NULL,
FOREIGN KEY(user_id) REFERENCES user(id),
FOREIGN KEY(path_id) REFERENCES path(id)
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO user_path (user_id, path_id, progress) VALUES (1,1,1);
</pre>

---

#### <strong>-Tabela "user_content"</strong>

Código de criação da tabela user_content, que recebe os dados do relacionamento do usuário com o conteúdo:

<pre>
CREATE TABLE IF NOT EXISTS user_content (
id INTEGER NOT NULL PRIMARY KEY,
user_id INTEGER NOT NULL,
content_id INTEGER NOT NULL,
status TEXT NOT NULL,
FOREIGN KEY(user_id) REFERENCES user(id),
FOREIGN KEY(content_id) REFERENCES content(id)
);
</pre>

Exemplos de inserts:

<pre>
INSERT INTO user_content (user_id, content_id, status) VALUES (1,1,""); // insert sem valores

INSERT INTO user_content (user_id, content_id, status) VALUES (1,1,"Concluído");
</pre>
