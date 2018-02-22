SELECT * FROM tracker_list
    WHERE id = $2
    AND project_id = $1
    ORDER BY list_order
;