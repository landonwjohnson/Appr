DROP TABLE IF EXISTS users, group, project, user_group, group_project, user_project, roles, tracker;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT unique,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT
 );

 CREATE TABLE user_group (
    user_id references users(id), 
    group_id references group(id
 );

CREATE TABLE group (
    id SERIAL PRIMARY KEY,
    user_id int references users(id),
    group_name TEXT
);

CREATE TABLE group_project (
    group_id references group(id), 
    project_id references project(id), 
    roles_id references roles(id)
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    group_id int references group(id),
    idea_field TEXT,
    user_field TEXT,
    features_field TEXT,
    view_field TEXT,
    controller_field TEXT,
    endpoint_field TEXT,
    schema_field TEXT
);

CREATE TABLE user_project ( 
    user_id references users(id), 
    project_id references project(id), 
    roles_id references roles(id)
);

CREATE TABLE roles ( 
    id SERIAL PRIMARY KEY, 
    roles TEXT 
); 

CREATE TABLE tracker (
    group_id int references group(id),
    user_id int references users(id),
    tracker1_name TEXT default ('Views/Routes'),
    tracker2_name TEXT default ('Controllers/Services'),
    tracker3_name TEXT default ('Test Front End'),
    tracker4_name TEXT default ('Create End Points'),
    tracker5_name TEXT default ('Move Staged Data'),
    tracker6_name TEXT default ('Test End Points (Postman)'),
    tracker7_name TEXT default ('Test Front End with Server'),
    tracker8_name TEXT default ('Replace Staged Data with Queries'),
    tracker9_name TEXT default ('Test with Postman'),
    tracker10_name TEXT default ('Test End to End'),
    tracker11_name TEXT default ('Hosting'),
    tracker1_data TEXT,
    tracker2_data TEXT,
    tracker3_data TEXT,
    tracker4_data TEXT,
    tracker5_data TEXT,
    tracker6_data TEXT,
    tracker7_data TEXT,
    tracker8_data TEXT,
    tracker9_data TEXT,
    tracker10_data TEXT,
    tracker11_data TEXT
);





-- INSERT INTO users (username, password, email, first_name, last_name)
-- VALUES ('username1234', 'password123', 'a@a.com', 'Testy', 'McTesterson');

-- INSERT INTO user_group ( user_id, group_id )
-- VALUES ('1', '1');

-- INSERT INTO group (group_name)
-- VALUES ('Test Group');

-- INSERT INTO group_project ( group_id, project_id, roles_id )
-- VALUES ('1','1','1');

-- INSERT INTO project (idea_field, user_field, features_field, view_field, controller_field, endpoint_field, schema_field )
-- VALUES ('username1234', 'password123', 'a@a.com', 'Testy', 'McTesterson');

-- INSERT INTO user_project ( user_id, project_id, roles_id )
-- VALUES ('1','1','1');

-- INSERT INTO roles ( id, roles )
-- VALUES ('1','admin');

-- INSERT INTO tracker (tracker1_name, 
--     tracker2_name,
--     tracker3_name,
--     tracker4_name,
--     tracker5_name,
--     tracker6_name,
--     tracker7_name,
--     tracker8_name,
--     tracker9_name,
--     tracker10_name,
--     tracker11_name,
--     tracker1_data,
--     tracker2_data,
--     tracker3_data,
--     tracker4_data,
--     tracker5_data,
--     tracker6_data,
--     tracker7_data,
--     tracker8_data,
--     tracker9_data,
--     tracker10_data,
--     tracker11_data
-- )
-- VALUES (
--     'Views/Routes',
--     'Controllers/Services',
--     'Test Front End',
--     'Create End Points',
--     'Move Staged Data',
--     'Test End Points (Postman',
--     'Test Front End with Server',
--     'Replace Staged Data with Queries',
--     'Test with Postman',
--     'Test End to End',
--     'Hosting',
--     'data1',
--     'data2',
--     'data2',
--     'data3',
--     'data4',
--     'data5',
--     'data6',
--     'data7',
--     'data8',
--     'data9',
--     'data10',
--     'data11'
-- );