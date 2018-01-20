SELECT * FROM tracker_card
    WHERE project_id = $1
    ORDER BY card_order_id
;