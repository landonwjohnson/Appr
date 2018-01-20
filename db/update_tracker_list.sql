UPDATE tracker_list
    SET
        list_name = $3,
        card_order_id = $4,
        list_order = $5
    WHERE id = $2
    AND project_id = $1
;

Select * from tracker_list
    Where id = $2
    ;