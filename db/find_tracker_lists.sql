SELECT * FROM tracker_list
    WHERE project_id = $1
    ORDER BY list_order
;