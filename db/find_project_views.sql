SELECT * FROM project_view
    WHERE project_id = $1
    ORDER BY id
;