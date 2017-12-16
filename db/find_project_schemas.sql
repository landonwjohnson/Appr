SELECT * FROM project_schema
    WHERE project_id = $1
    ORDER BY id
;
