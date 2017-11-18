UPDATE  USERS
SET firstname = $2, lastname = $3, email = $4, password = $5, username = $6
WHERE id = $1
;