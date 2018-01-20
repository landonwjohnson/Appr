INSERT INTO tracker_card (project_id, card_name, card_data, card_order_id, list_order)
    VALUES
        ($1, $2, $3, $4, $5)
;

SELECT * FROM tracker_card
    WHERE project_id = $1
    ORDER BY card_order_id
    ;