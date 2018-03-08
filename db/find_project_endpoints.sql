SELECT * FROM project_endpoint
    WHERE project_id = $1
    ORDER BY id
;