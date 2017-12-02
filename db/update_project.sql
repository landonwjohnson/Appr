UPDATE project
    SET
        name = $2
    WHERE id = $1
;