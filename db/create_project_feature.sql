INSERT INTO project_feature(project_id, feature_data)
    VALUES ($1, $2)
;

SELECT DISTINCT * FROM project_feature
    WHERE project_id = $1
    AND feature_data = $2
;