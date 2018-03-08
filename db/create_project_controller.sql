INSERT INTO project_controller (project_id, controller_name, when_data, do_data, require_data)
    VALUES
        ($1, $2, $3, $4, $5)
;

SELECT DISTINCT * FROM project_controller
    WHERE project_id = $1
    AND controller_name = $2
    AND when_data = $3
    AND do_data = $4
    AND require_data = $5
    ORDER BY id
;
