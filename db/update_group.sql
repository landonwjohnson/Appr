UPDATE groups
    SET name = $2, owner_id = $3
    WHERE id = $1
;