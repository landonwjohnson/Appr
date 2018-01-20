INSERT INTO tracker_list (project_id, list_name, card_order_id, list_order)
    VALUES
        ($1, $2, $3, $4)
;

SELECT * FROM tracker_list
    WHERE project_id = $1
    ORDER BY card_order_id
    ;