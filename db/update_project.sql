UPDATE project
    SET
        ownder_id = $2
    WHERE id = $1
;