INSERT INTO project_endpoint (project_id, endpoint_name, http_verb, url_data, response_data, request_data)
    VALUES
        ($1, $2, $3, $4, $5, $6)
;