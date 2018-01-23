SELECT * FROM tracker_card
    WHERE project_id = $1
    AND list_order = $2
    ORDER BY card_order_id
;