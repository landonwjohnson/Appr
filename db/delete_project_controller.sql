DELETE FROM project_controller
    WHERE id = $2
    AND project_id = $1
;