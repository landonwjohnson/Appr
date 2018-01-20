UPDATE tracker_card
    SET
        card_name = $3,
        card_data = $4,
        card_order_id = $5,
        list_order = $6
    WHERE id = $2
    AND project_id = $1
;

Select * from tracker_card
    Where id = $2
    ;