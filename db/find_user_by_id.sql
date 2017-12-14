SELECT * FROM users
    WHERE id = $1
    AND status_id = 1
    ORDER BY id
;