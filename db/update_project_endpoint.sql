UPDATE project_endpoint
    SET project_id = $2, url_data = $3, is_get = $4, is_post = $5, is_update = $6, is_delete = $7, req_endpoint_id = $8, res_endpoint_id = $9
    WHERE id = $1 AND project_id = $2
;