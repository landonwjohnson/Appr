UPDATE project
    SET
        name = $2,
        background = $3 
    WHERE id = $1
    AND status_id = 1
;