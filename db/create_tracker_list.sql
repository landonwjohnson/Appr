INSERT INTO tracker_list (project_id, list_name, list_order)
    VALUES
        ($1, $2, $3)
;

SELECT * FROM tracker_list
    WHERE project_id = $1
    ORDER BY list_order
    ;