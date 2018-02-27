UPDATE tracker_list
    SET
        list_name = $3,
        list_order = $4
    WHERE id = $2
    AND project_id = $1
;

