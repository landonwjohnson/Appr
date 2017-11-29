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
    name TEXT,
    author_id int references users(id)
);

CREATE TABLE idea (
    id SERIAL PRIMARY KEY,
    project_id int references project(id),
    idea_data TEXT
);

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
VALUES ('HumanCyborgRelations', 'beepboopsbuddy', 'h@h.com', 'C3', 'PO');

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

INSERT INTO project ( name, author_id )
VALUES ('Save the Galaxy', '1');

INSERT INTO project ( name, author_id )
VALUES ('DeathStar', '2');


/*Duplicate of what will be added later
-- INSERT INTO project ( group_id, idea_field, user_field, features_field, view_field, controller_field, endpoint_field, schema_field )
-- VALUES ('1', 'idea field', 'user field', 'features field', 'view field', 'controller field', 'endpoint field', 'schema field');
*/

--Groups

INSERT INTO user_group ( user_id, group_id )
VALUES ('1', '1');

INSERT INTO user_group ( user_id, group_id )
VALUES ('2', '2');

INSERT INTO user_group ( user_id, group_id )
VALUES ('3', '3');

INSERT INTO user_group ( user_id, group_id )
VALUES ('4', '1');

INSERT INTO user_group ( user_id, group_id )
VALUES ('5', '1');

INSERT INTO user_group ( user_id, group_id )
VALUES ('6', '2');

INSERT INTO user_group ( user_id, group_id )
VALUES ('7', '1');

INSERT INTO user_group ( user_id, group_id )
VALUES ('8', '3');

INSERT INTO user_group ( user_id, group_id )
VALUES ('9', '1');

INSERT INTO user_group ( user_id, group_id )
VALUES ('10', '2');

--Roles

INSERT INTO roles ( roles )
VALUES ('admin');

INSERT INTO roles ( roles )
VALUES ('can_write');

INSERT INTO roles ( roles )
VALUES ('can_read');

--Group Projects

INSERT INTO group_project (group_id, project_id, roles_id)
VALUES ('1','1','1');

--User Projects

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('1','1','2');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('2','1','3');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('3','1','3');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('4','1','2');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('5','1','2');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('7','1','2');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('8','1','3');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('9','1','2');


INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('2','2','1');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('6','2','1');

INSERT INTO user_project ( user_id, project_id, roles_id )
VALUES ('10','2','3');

--Tracker for Group 1

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','1', '1', 'views and routes', 'test views and routes tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','1', '2', 'controllers and services with staged data in services', 'test controllers and services tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','4', '3', 'test front end', 'test FE tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','4', '4', 'create end points', 'test endpoint tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','5', '5', 'move staged data from service to server', 'test server staged data tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','5', '6', 'test endpoints with postman', 'test postman tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','7', '7', 'test FE with server', 'test FE w/ server tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','7', '8', 'replace staged data with queries', 'test query tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','9', '9', 'test full stack w/ postman ', 'test full stack tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','9', '10', 'test end to end', 'test end to end tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('1','1', '11', 'get site hosted', 'test site hosted tracker data');

--Tracker for Group 2

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','2', '1', 'views and routes', 'test views and routes tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','2', '2', 'controllers and services with staged data in services', 'test controllers and services tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','2', '3', 'test front end', 'test FE tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','6', '4', 'create end points', 'test endpoint tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','6', '5', 'move staged data from service to server', 'test server staged data tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','6', '6', 'test endpoints with postman', 'test postman tracker data');

INSERT INTO tracke r ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','10', '7', 'test FE with server', 'test FE w/ server tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','10', '8', 'replace staged data with queries', 'test query tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','10', '9', 'test full stack w/ postman ', 'test full stack tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','6', '10', 'test end to end', 'test end to end tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('2','2', '11', 'get site hosted', 'test site hosted tracker data');

--Tracker for Group 3

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '1', 'views and routes', 'test views and routes tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '2', 'controllers and services with staged data in services', 'test controllers and services tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '3', 'test front end', 'test FE tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '4', 'create end points', 'test endpoint tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '5', 'move staged data from service to server', 'test server staged data tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','3', '6', 'test endpoints with postman', 'test postman tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','8', '7', 'test FE with server', 'test FE w/ server tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','8', '8', 'replace staged data with queries', 'test query tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','8', '9', 'test full stack w/ postman ', 'test full stack tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','8', '10', 'test end to end', 'test end to end tracker data');

INSERT INTO tracker ( group_id, user_id, tracker_order, tracker_name, tracker_data ) 
VALUES ('3','8', '11', 'get site hosted', 'test site hosted tracker data');