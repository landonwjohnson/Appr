INSERT INTO project_view (project_id, name, image_url)
    VALUES
        ($1, $2, $3)
;

SELECT * FROM project_view
    WHERE name = $2
;

