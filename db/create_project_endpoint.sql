INSERT INTO project_endpoint (project_id, endpoint_name, http_verb, url_data, response_data, request_data)
    VALUES
        ($1, $2, $3, $4, $5, $6)
;

SELECT DISTINCT * FROM project_endpoint
    WHERE project_id = $1
    AND endpoint_name = $2
    AND http_verb = $3
    AND url_data = $4
    AND response_data = $5
    AND request_data = $6
;