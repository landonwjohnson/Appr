DELETE FROM project_view
    WHERE id = $2
    AND project_id = $1
;