UPDATE project_feature
    SET feature_data = $3
    WHERE project_id = $1 AND id = $2
;