SELECT * FROM tracker_card
    WHERE project_id = $1
    AND list_id = $2
    ORDER BY card_order
;