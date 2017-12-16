SELECT * FROM users
    WHERE email = $1
    AND status_id = 1
    ORDER BY id
;