SELECT * FROM project_idea
    WHERE project_id = $1
    ORDER BY id
;