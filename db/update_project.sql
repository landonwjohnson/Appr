UPDATE project
    SET
        owner_id = $2
    WHERE id = $1
;