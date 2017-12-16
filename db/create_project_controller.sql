INSERT INTO project_controller (project_id, when_data, do_data, require_data)
    VALUES
        ($1, $2, $3, $4)
;

SELECT DISTINCT * FROM project_controller
    WHERE project_id = $1
    AND when_data = $2
    AND do_data = $3
    AND require_data = $4
    ORDER BY id
;
