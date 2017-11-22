UPDATE  users
SET first_name = NULL,
last_name = NULL,
email = NULL,
password = NULL
WHERE 
id = $1
;