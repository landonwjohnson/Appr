UPDATE project_endpoint
    SET 
        endpoint_name = $3,
        http_verb = $4
        url_data = $5,
        response_data = $6,
        request_data = $7
    WHERE id = $1
    AND project_id = $2
;