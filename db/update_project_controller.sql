UPDATE project_controller
    SET
        controller_name = $3,
        when_data = $4,
        do_data = $5,
        require_data = $6
    WHERE id = $2
    AND project_id = $1
;