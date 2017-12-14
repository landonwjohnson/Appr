SELECT * FROM project_feature
    WHERE project_id = $1
    ORDER BY id
;