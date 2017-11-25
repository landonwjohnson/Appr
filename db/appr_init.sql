DROP TABLE IF EXISTS users, groups, project, user_group, group_project, user_project, roles, tracker;
--test
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT unique,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT
 );

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    created_by int references users(id),
    name TEXT
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    name TEXT
    -- idea_field TEXT,
    -- user_field TEXT,
    -- features_field TEXT,
    -- view_field TEXT,
    -- controller_field TEXT,
    -- endpoint_field TEXT,
    -- schema_field TEXT
);

CREATE TABLE roles ( 
    id SERIAL PRIMARY KEY, 
    roles TEXT 
); 

CREATE TABLE user_group (
    user_id int references users(id), 
    group_id int references groups(id)
);

CREATE TABLE group_project (
    group_id int references groups(id), 
    project_id int references project(id), 
    roles_id int references roles(id)
);

CREATE TABLE user_project ( 
    user_id int references users(id), 
    project_id int references project(id), 
    roles_id int references roles(id)
);

CREATE TABLE tracker (
    id SERIAL PRIMARY KEY,
    group_id int references groups(id),
    user_id int references users(id),
    tracker_order int,
    tracker_name TEXT ,
    tracker_data TEXT
);


--Users

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('RealChosenOne', 'Reyismydaughter', 'a@a.com', 'Luke', 'Skywalker');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('DarthVader', 'deathstar4eva', 'b@b.com', 'Anekin', 'Skywalker');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('beepbeepboop', 'boopboopbop', 'c@c.com', 'R2', 'D2');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('HansPrincess', 'sololove', 'd@d.com', 'Leia', 'Organa');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('YoDaMan', 'thereisnotry', 'e@e.com', 'Minch', 'Yoda');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('EmperorsNewGroove', 'password123', 'f@f.com', 'Sheev', 'Palpatine');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('iShotfirst', '12parsecs', 'g@g.com', 'Han', 'Solo');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('queenbee', 'vadersgirl', 'h@h.com', 'Padme', 'Amidala');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('KenobiTheWan', 'password123', 'i@i.com', 'Obi-Wan', 'Kenobi');

INSERT INTO users ( username, password, email, first_name, last_name )
VALUES ('badassbountyhunter', 'iDiedTooSoon', 'j@j.com', 'Boba', 'Fett');

--Groups

INSERT INTO groups ( created_by, name )
VALUES ('Good Guys', '1');

INSERT INTO groups ( created_by, name )
VALUES ('Dark Side', '6');

INSERT INTO groups ( name )
VALUES ('Droids', '3');

--Projects

INSERT INTO project ( id, name )
VALUES ('1', 'Save the Galaxy... again');

INSERT INTO project ( id, name )
VALUES ('2', 'DeathStar');

INSERT INTO project ( id, name )
VALUES ('6', 'DeathStar2');


/*Duplicate of what will be added later
-- INSERT INTO project ( group_id, idea_field, user_field, features_field, view_field, controller_field, endpoint_field, schema_field )
-- VALUES ('1', 'idea field', 'user field', 'features field', 'view field', 'controller field', 'endpoint field', 'schema field');
*/

INSERT INTO user_group ( user_id, group_id )
VALUES ('1', '1');

--Roles

INSERT INTO roles ( roles )
VALUES ('admin');

INSERT INTO roles ( roles )
VALUES ('admin');

INSERT INTO roles ( roles )
VALUES ('admin');

INSERT INTO group_project (group_id, project_id, roles_id)
VALUES ('1','1','1');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('1','1','1');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','1', '1', 'test tracker name', 'test tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','1', '1', 'test tracker name', 'test tracker data');