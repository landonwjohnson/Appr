UPDATE users
    SET
        first_name = $2,
        last_name = $3,
        email = $4,
        password = $5,
        username = $6,
        avatar = $7
    WHERE id = $1
    AND status_id = 1
;