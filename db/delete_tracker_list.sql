DELETE FROM tracker_list
    WHERE id = $2
    AND project_id = $1
;

DELETE FROM tracker_card
    WHERE list_order = $3
    AND project_id = $1
;



