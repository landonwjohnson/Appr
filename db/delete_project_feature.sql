DELETE FROM project_feature
    WHERE id = $2
    AND project_id = $1
;
