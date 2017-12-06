UPDATE project_idea
    SET idea_data = $3
    WHERE id = $1 AND project_id = $2
;