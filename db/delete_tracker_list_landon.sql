DELETE FROM tracker_list
    WHERE id = $1
    AND project_id = $2
    AND list_order = $3;



