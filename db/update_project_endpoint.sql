UPDATE project_endpoint
    SET
        url_data = $3,
        is_get = $4,
        is_post = $5,
        is_update = $6,
        is_delete = $7,
        response_data = $8,
        request_data = $9
    WHERE id = $1
    AND project_id = $2
;