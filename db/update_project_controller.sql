UPDATE  project_controller
SET project_id = $2, when_data = $3, do_data = $4, require_data = $5
WHERE id = $1
;