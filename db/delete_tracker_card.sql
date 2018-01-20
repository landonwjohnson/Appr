DELETE FROM tracker_card
    WHERE id = $2
    AND project_id = $1
;