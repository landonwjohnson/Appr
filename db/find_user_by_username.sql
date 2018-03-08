SELECT * FROM users
    WHERE username = $1
    AND status_id = 1
    ORDER BY id
;