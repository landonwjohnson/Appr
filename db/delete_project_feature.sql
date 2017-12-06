DELETE FROM project_feature
    WHERE project_id = $1 AND id = $1
;
