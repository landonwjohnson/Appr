INSERT INTO project_user_field (project_id, target_demo_data, skill_data, description_data)
    VALUES
        ($1, $2, $3, $4)
;

SELECT DISTINCT * FROM project_user_field
    WHERE project_id = $1
    AND target_demo_data = $2
    AND skill_data = $3
    AND description_data = $4
    ORDER BY id
;
