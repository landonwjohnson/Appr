UPDATE "group"
    SET status_id = 3
    WHERE group_id = $1
;