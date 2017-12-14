INSERT INTO project_idea (project_id, idea_data)
    VALUES
        ($1, $2)
;

SELECT DISTINCT * FROM project_idea
    WHERE project_id = $1 AND idea_data = $2
;
