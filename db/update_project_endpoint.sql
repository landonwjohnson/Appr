UPDATE project_endpoint
    SET 
        endpoint_name = $3,
        http_verb = $4,
        url_data = $5,
        response_data = $6,
        request_data = $7
    WHERE project_id = $1
    AND id = $2
;